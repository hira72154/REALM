
import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = 0;
    let lastFrame = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        90,
        Math.max(35, Math.floor((width * height) / 13000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 1.6 + 1,
      }));
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function animate(time) {
      if (!reducedMotion && time - lastFrame < 30) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      lastFrame = time;

      ctx.clearRect(0, 0, width, height);

      const dark =
        document.documentElement.getAttribute("data-theme") === "dark";

      const rgb = dark ? "100, 180, 255" : "8, 105, 225";

      const connectionDistance = width < 600 ? 135 : 175;

      particles.forEach((particle) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) {
            particle.vx *= -1;
          }

          if (particle.y < 0 || particle.y > height) {
            particle.vy *= -1;
          }

          if (mouse.active) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.hypot(dx, dy);

            if (distance < 200 && distance > 1) {
              const force = (1 - distance / 200) * 1.2;

              particle.x += (dx / distance) * force;
              particle.y += (dy / distance) * force;
            }
          }
        }

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${rgb}, ${dark ? 0.9 : 0.7})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const distance = Math.hypot(
            a.x - b.x,
            a.y - b.y
          );

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) *
              (dark ? 0.6 : 0.48);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(${rgb}, ${opacity})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      if (mouse.active && !reducedMotion) {
        particles.forEach((particle) => {
          const distance = Math.hypot(
            particle.x - mouse.x,
            particle.y - mouse.y
          );

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particle.x, particle.y);

            ctx.strokeStyle = `rgba(${rgb}, ${
              (1 - distance / 200) * 0.7
            })`;

            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        });
      }

      if (!reducedMotion) {
        animationId = requestAnimationFrame(animate);
      }
    }

    resize();
    animationId = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handleMouseMove);
    document.addEventListener("pointerleave", handleMouseLeave);
    window.addEventListener("blur", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handleMouseMove);
      document.removeEventListener("pointerleave", handleMouseLeave);
      window.removeEventListener("blur", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-background"
      aria-hidden="true"
    />
  );
}
