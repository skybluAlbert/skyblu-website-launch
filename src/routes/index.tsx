import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkyBlu Technologies \u2014 Edge AI infrastructure" },
      { name: "description", content: "SkyBlu Technologies designs, deploys and manages edge AI compute, integrated with data centre and cloud." },
      { property: "og:title", content: "SkyBlu Technologies \u2014 Edge AI infrastructure" },
      { property: "og:description", content: "SkyBlu Technologies designs, deploys and manages edge AI compute, integrated with data centre and cloud." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
<main className="sb-page sb-ref-001">
<section className="sb-hero sb-ref-002">
<div className="sb-scrim"></div>
<div className="sb-fade"></div>
<div className="sb-ref-003">
<header className="sb-ref-004">
<a href="#top" aria-label="SkyBlu Technologies home" className="sb-ref-005">
<svg width="68" height="56" viewBox="0 0 44 36" aria-hidden="true">
<circle cx="20" cy="18" r="8" fill="var(--sb-color-3)"></circle>
<g fill="var(--sb-color-3)">
<circle cx="7" cy="18" r="2.1"></circle>
<circle cx="10.8" cy="8.8" r="2.1"></circle>
<circle cx="20" cy="5" r="2.1"></circle>
<circle cx="29.2" cy="8.8" r="2.1"></circle>
<circle cx="33" cy="18" r="2.1"></circle>
</g>
<path d="M12 32 H32 a5.5 5.5 0 0 0 0.6 -10.97 A8 8 0 0 0 17.4 20.4 A5.8 5.8 0 0 0 12 32 Z" fill="var(--sb-color-2)" stroke="var(--sb-color-1)" strokeWidth="1.8" strokeLinejoin="round"></path>
</svg>
<span className="sb-ref-006">
<span className="sb-ref-007">skyblu</span>
<span className="sb-ref-008">Technologies</span>
</span>
</a>
<Button asChild variant="reference" size="reference"><a href="mailto:albert@skyblu.co.uk" className="sb-ghost sb-ref-009">albert@skyblu.co.uk</a></Button>
</header>
<div id="top" className="sb-ref-010">
<span className="sb-ref-011">
<span className="sb-pulse sb-ref-012"></span>
          Site under construction
        </span>
<h1 className="sb-ref-013">Edge AI infrastructure, where your data lives.</h1>
<p className="sb-ref-014">SkyBlu Technologies designs, deploys and manages edge AI compute — running AI workloads on-site, alongside the systems you already have, and connected to data centre and cloud when you need them.</p>
<div className="sb-ref-015">
<Button asChild variant="reference" size="reference"><a href="mailto:albert@skyblu.co.uk" className="sb-cta sb-ref-016">
            Talk to us
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a></Button>
<span className="sb-ref-017">Full website coming soon</span>
</div>
</div>
</div>
</section>
<section className="sb-ref-018">
<div className="sb-ref-019">
<div className="sb-ref-020">
<h2 className="sb-ref-021">What we do</h2>
<span className="sb-ref-022">Edge · Data centre · Cloud</span>
</div>
<div className="sb-ref-023">
<div className="sb-tile sb-ref-024">
<div className="sb-ref-025">
<svg width="30" height="30" viewBox="0 0 28 28" aria-hidden="true"><g fill="none" stroke="var(--sb-color-4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="14" height="14" rx="2.5"></rect><rect x="11" y="11" width="6" height="6" rx="1"></rect><path d="M11 3v4M17 3v4M11 21v4M17 21v4M3 11h4M3 17h4M21 11h4M21 17h4"></path></g></svg>
<span className="sb-ref-026">01</span>
</div>
<h3 className="sb-ref-027">Edge AI platform</h3>
<p className="sb-ref-028">Managed compute nodes that run AI inference on-site — low latency, data stays local, no cloud round-trip.</p>
</div>
<div className="sb-tile sb-ref-029">
<div className="sb-ref-030">
<svg width="30" height="30" viewBox="0 0 28 28" aria-hidden="true"><g fill="none" stroke="var(--sb-color-4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="2"></rect><rect x="17" y="3" width="8" height="8" rx="2"></rect><rect x="10" y="17" width="8" height="8" rx="2"></rect><path d="M7 11v3h14v-3M14 14v3"></path></g></svg>
<span className="sb-ref-031">02</span>
</div>
<h3 className="sb-ref-032">Systems integration</h3>
<p className="sb-ref-033">Edge compute fitted into your existing networks, devices and security — no rip-and-replace.</p>
</div>
<div className="sb-tile sb-ref-034">
<div className="sb-ref-035">
<svg width="30" height="30" viewBox="0 0 28 28" aria-hidden="true"><g fill="none" stroke="var(--sb-color-4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="18" height="6" rx="1.5"></rect><rect x="5" y="11" width="18" height="6" rx="1.5"></rect><rect x="5" y="19" width="18" height="6" rx="1.5"></rect><path d="M9 6h.01M9 14h.01M9 22h.01"></path></g></svg>
<span className="sb-ref-036">03</span>
</div>
<h3 className="sb-ref-037">Data centres</h3>
<p className="sb-ref-038">Design and integration of resilient data centre and colocation environments.</p>
</div>
<div className="sb-tile sb-ref-039">
<div className="sb-ref-040">
<svg width="30" height="30" viewBox="0 0 28 28" aria-hidden="true"><g fill="none" stroke="var(--sb-color-4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h12.5a4.5 4.5 0 0 0 .6-8.96A6.5 6.5 0 0 0 8.6 11.1 5 5 0 0 0 8 21z"></path></g></svg>
<span className="sb-ref-041">04</span>
</div>
<h3 className="sb-ref-042">Sovereign &amp; hybrid cloud</h3>
<p className="sb-ref-043">Keep sensitive data in-country, and extend to cloud where it makes sense.</p>
</div>
</div>
</div>
</section>
<section className="sb-ref-044">
<div className="sb-ref-045">
<div className="sb-ref-046">
<h2 className="sb-ref-047">Building something at the edge? Let’s talk.</h2>
<p className="sb-ref-048">Whether it’s a pilot, a site assessment or a full rollout, we’d like to hear what you’re working on.</p>
</div>
<Button asChild variant="reference" size="reference"><a href="mailto:albert@skyblu.co.uk" className="sb-dark sb-ref-049">
        albert@skyblu.co.uk
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a></Button>
</div>
</section>
<footer className="sb-ref-050">
<div className="sb-ref-051">
<span>© 2026 SkyBlu Technologies Ltd</span>
<span>skyblu.co.uk</span>
</div>
</footer>
</main>
  );
}
