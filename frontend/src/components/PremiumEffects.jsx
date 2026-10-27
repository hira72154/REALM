
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PremiumEffects() {
  const glowRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    if (reducedMotion || !finePointer) {
      glow.style.display = "none";
      return;
    }

    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationId = 0;

    function handleMove(event) {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.style.opacity = "1";
    }

    function handleLeave() {
      glow.style.opacity = "0";
    }

    function animate() {
      currentX +=
        (targetX - currentX) * 0.13;

      currentY +=
        (targetY - currentY) * 0.13;

      glow.style.transform = `
        translate3d(
          ${currentX}px,
          ${currentY}px,
          0
        )
        translate(-50%, -50%)
      `;

      animationId =
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener(
      "pointermove",
      handleMove
    );

    document.addEventListener(
      "pointerleave",
      handleLeave
    );

    window.addEventListener(
      "blur",
      handleLeave
    );

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "pointermove",
        handleMove
      );

      document.removeEventListener(
        "pointerleave",
        handleLeave
      );

      window.removeEventListener(
        "blur",
        handleLeave
      );
    };
  }, []);

  useEffect(() => {
    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const root = document.querySelector("main");

    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "is-revealed"
            );

            observer.unobserve(
              entry.target
            );
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    function watchElements() {
      root
        .querySelectorAll(
          ".realm-reveal:not(.is-revealed):not([data-observed])"
        )
        .forEach((element) => {
          element.dataset.observed = "true";
          observer.observe(element);
        });
    }

    watchElements();

    const mutationObserver =
      new MutationObserver(watchElements);

    mutationObserver.observe(root, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();

      root
        .querySelectorAll("[data-observed]")
        .forEach((element) => {
          delete element.dataset.observed;
        });
    };
  }, [pathname]);

  return (
    <div
      ref={glowRef}
      className="premium-cursor-glow"
      aria-hidden="true"
    />
  );
}
