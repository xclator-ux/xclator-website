"use client";
import { useEffect, useRef } from "react";

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Cinematic section transitions ── */
  useEffect(() => {
    const sc = document.getElementById("scroll-container");
    if (!sc) return;

    let heroExited = false;
    let prodExited  = false;
    let svcExited   = false;

    const heroEl  = document.getElementById("s-hero");
    const svcEl   = document.getElementById("s-services");
    const statsEl = document.getElementById("s-stats");

    // Hero exit: letter split
    const heroIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting && !heroExited) {
          heroExited = true;
          const h1 = document.querySelector<HTMLElement>("#s-hero h1");
          if (!h1) return;
          const letters = h1.querySelectorAll<HTMLElement>(".hero-letter");
          if (!letters.length) return;
          letters.forEach((l, i) => {
            const angle = (Math.random() - 0.5) * 120;
            const dist  = 60 + Math.random() * 80;
            const dir   = i % 2 === 0 ? -1 : 1;
            l.style.transition = `transform ${0.45 + Math.random() * 0.2}s cubic-bezier(0.16,1,0.3,1) ${i * 0.018}s, opacity 0.4s ease ${i * 0.018}s`;
            l.style.transform  = `translate(${dir * dist * 0.6}px, ${-dist * 0.4}px) rotate(${angle}deg)`;
            l.style.opacity    = "0";
          });
          setTimeout(() => {
            letters.forEach((l) => {
              l.style.transition = "none";
              l.style.transform  = "";
              l.style.opacity    = "";
            });
            heroExited = false;
          }, 1400);
        }
      });
    }, { threshold: 0.05 });
    if (heroEl) heroIo.observe(heroEl);

    // Products → Services: card flip
    const svcIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !prodExited) {
          prodExited = true;
          const cards = document.querySelectorAll<HTMLElement>(".pcard");
          cards.forEach((c, i) => {
            c.style.transition = `transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s, opacity 0.35s ease ${i * 0.08}s`;
            c.style.transform  = "perspective(800px) rotateY(-80deg)";
            c.style.opacity    = "0";
          });
          setTimeout(() => {
            cards.forEach((c) => {
              c.style.transition = "none";
              c.style.transform  = "";
              c.style.opacity    = "";
            });
            prodExited = false;
          }, 1200);
        }
      });
    }, { threshold: 0.3 });
    if (svcEl) svcIo.observe(svcEl);

    // Services → Stats: panel dissolve
    const statsIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !svcExited) {
          svcExited = true;
          const panels = document.querySelectorAll<HTMLElement>(".spanel");
          panels.forEach((p, i) => {
            p.style.transition = `transform 0.5s ease ${i * 0.1}s, opacity 0.4s ease ${i * 0.1}s, filter 0.4s ease ${i * 0.1}s`;
            p.style.transform  = "translateY(-30px) scale(0.92)";
            p.style.opacity    = "0";
            p.style.filter     = "blur(8px)";
          });
          if (statsEl) {
            const cells = statsEl.querySelectorAll<HTMLElement>("[data-target]");
            cells.forEach((c, i) => {
              c.parentElement!.style.opacity    = "0";
              c.parentElement!.style.transform  = "scale(0.85) translateY(24px)";
              c.parentElement!.style.filter     = "blur(6px)";
              setTimeout(() => {
                c.parentElement!.style.transition = "transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease, filter 0.5s ease";
                c.parentElement!.style.opacity    = "1";
                c.parentElement!.style.transform  = "scale(1) translateY(0)";
                c.parentElement!.style.filter     = "blur(0)";
              }, 200 + i * 100);
            });
          }
          setTimeout(() => {
            panels.forEach((p) => {
              p.style.transition = "none";
              p.style.transform  = "";
              p.style.opacity    = "";
              p.style.filter     = "";
            });
            svcExited = false;
          }, 1400);
        }
      });
    }, { threshold: 0.3 });
    if (statsEl) statsIo.observe(statsEl);

    return () => {
      heroIo.disconnect();
      svcIo.disconnect();
      statsIo.disconnect();
    };
  }, []);

  return (
    <div
      id="scroll-container"
      ref={containerRef}
    >
      {children}
    </div>
  );
}
