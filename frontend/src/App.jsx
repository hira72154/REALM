
import {
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";
import PremiumEffects from "./components/PremiumEffects";

import usePageMeta from "./usePageMeta";

import "./App.css";
import "./pages.css";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Support = lazy(() => import("./pages/Support"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

// Scroll to top when changing pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// Custom 404 page
function NotFound() {
  usePageMeta({
    title: "Page Not Found | THE REALM",
    description:
      "The page you are looking for could not be found. Visit THE REALM homepage to explore our AI, automation and web development services.",
    robots: "noindex, follow",
  });

  return (
    <section className="section">
      <div
        className="container"
        style={{
          textAlign: "center",
          maxWidth: "760px",
          margin: "0 auto",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <span className="eyebrow">ERROR 404</span>

        <h1 style={{ marginTop: "16px" }}>
          This page doesn't exist.
        </h1>

        <p style={{ margin: "20px auto 28px" }}>
          The link may be incorrect, or the page may
          have moved. Let's get you back on track.
        </p>

        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

// Website page routes
function PageRoutes() {
  const location = useLocation();

  return (
    <main
      key={location.pathname}
      className="realm-page-enter"
    >
      <Suspense
        fallback={
          <section
            className="section"
            aria-live="polite"
            aria-busy="true"
          >
            <div className="container">
              <p>Loading page...</p>
            </div>
          </section>
        }
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/privacy-policy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

// Main App
export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("realm-theme");

    if (saved === "light" || saved === "dark") {
      return saved;
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem("realm-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((previous) =>
      previous === "light" ? "dark" : "light"
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <InteractiveBackground />
      <PremiumEffects />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <PageRoutes />

      <Footer />
    </BrowserRouter>
  );
}
