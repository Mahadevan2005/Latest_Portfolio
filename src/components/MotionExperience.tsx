import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelectors = [
  ".section > *",
  ".page-hero > *",
  ".project-filters",
  ".project-card",
  ".credential-card",
  ".work-entry",
  ".writing-entry",
  ".note-row",
  ".about-story > *",
  ".education-entry",
  ".toolkit-row",
  ".stat-grid > *",
  ".coding-panel > *",
  ".contact-layout > *",
  ".home-explore > a",
  ".hero-stats > *",
].join(",");

export default function MotionExperience() {
  const location = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const controller = new AbortController();
    const { signal } = controller;

    const progress = document.querySelector<HTMLElement>(".site-progress");
    const header = document.querySelector<HTMLElement>(".site-header");
    let previousY = window.scrollY;
    let ticking = false;

    const updateScrollEffects = () => {
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress?.style.setProperty("--scroll-progress", String(Math.min(1, y / max)));
      header?.classList.toggle("is-condensed", y > 40);
      header?.classList.toggle("is-hidden", y > 360 && y > previousY + 3);
      if (y < previousY - 3) header?.classList.remove("is-hidden");
      previousY = y;
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScrollEffects);
      }
    }, { passive: true, signal });
    updateScrollEffects();

    const revealItems = new Set<HTMLElement>();
    const observer = reduced ? null : new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer?.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    const registerRevealItems = () => {
      document.querySelectorAll<HTMLElement>(revealSelectors).forEach((element, index) => {
        if (revealItems.has(element)) return;
        revealItems.add(element);
        element.classList.add("motion-reveal");
        element.style.setProperty("--reveal-order", String(index % 4));
        if (reduced) element.classList.add("is-visible");
        else observer?.observe(element);
      });
      document.querySelectorAll<HTMLElement>(".section, .work-list, .project-grid, .credential-grid, .home-explore").forEach(element => {
        element.classList.add("motion-line");
      });
    };
    registerRevealItems();

    const mutationObserver = new MutationObserver(registerRevealItems);
    const main = document.getElementById("main-content");
    if (main) mutationObserver.observe(main, { childList: true, subtree: true });
    signal.addEventListener("abort", () => { observer?.disconnect(); mutationObserver.disconnect(); }, { once: true });


    if (finePointer && !reduced) {
      const cursor = document.querySelector<HTMLElement>(".motion-cursor");
      if (cursor) {
        document.documentElement.classList.add("has-motion-cursor");
        let cursorFrame = 0;
        window.addEventListener("pointermove", event => {
          cancelAnimationFrame(cursorFrame);
          cursorFrame = requestAnimationFrame(() => {
            cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
            cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
            cursor.classList.add("is-visible");
            const target = event.target as HTMLElement;
            cursor.classList.toggle("is-active", Boolean(target.closest("a, button, input, textarea, [role='button']")));
          });
        }, { passive: true, signal });
        document.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"), { signal });
      }

      document.querySelectorAll<HTMLElement>(".button").forEach(element => {
        element.classList.add("is-magnetic");
        element.addEventListener("pointermove", event => {
          const bounds = element.getBoundingClientRect();
          element.style.setProperty("--magnetic-x", `${(event.clientX - bounds.left - bounds.width / 2) * 0.16}px`);
          element.style.setProperty("--magnetic-y", `${(event.clientY - bounds.top - bounds.height / 2) * 0.2}px`);
        }, { signal });
        element.addEventListener("pointerleave", () => {
          element.style.setProperty("--magnetic-x", "0px");
          element.style.setProperty("--magnetic-y", "0px");
        }, { signal });
      });

      const portrait = document.querySelector<HTMLElement>(".hero-portrait-card");
      const portraitImage = portrait?.querySelector<HTMLElement>("img");
      if (portrait && portraitImage) {
        portrait.addEventListener("pointermove", event => {
          const bounds = portrait.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          portrait.style.setProperty("--portrait-rx", `${-y * 3.5}deg`);
          portrait.style.setProperty("--portrait-ry", `${x * 4.5}deg`);
          portraitImage.style.setProperty("--portrait-x", `${x * 10}px`);
          portraitImage.style.setProperty("--portrait-y", `${y * 10}px`);
        }, { signal });
        portrait.addEventListener("pointerleave", () => {
          portrait.style.setProperty("--portrait-rx", "0deg");
          portrait.style.setProperty("--portrait-ry", "0deg");
          portraitImage.style.setProperty("--portrait-x", "0px");
          portraitImage.style.setProperty("--portrait-y", "0px");
        }, { signal });
      }
    }

    return () => {
      controller.abort();
      document.documentElement.classList.remove("has-motion-cursor");
      revealItems.forEach(element => {
        element.classList.remove("motion-reveal", "is-visible");
        element.style.removeProperty("--reveal-order");
      });
    };
  }, [location.pathname]);

  return <>
    <div className="site-progress" aria-hidden="true" />
    <div className="motion-cursor" aria-hidden="true"><span /><i /></div>
    <div className="site-grain" aria-hidden="true" />
  </>;
}
