import type { ReactNode } from "react";
export default function PageIntro({ number, label, title, accent, wide = false, children }: { number: string; label: string; title: string; accent?: string; wide?: boolean; children: ReactNode }) {
  return <header className="page-hero"><div className="page-kicker"><p className="eyebrow">{label}</p><span className="folio">{number} / MAHADEVAN</span></div><h1 className="display">{title}{accent && <><br /><em>{accent}</em></>}</h1><div className={`intro-copy${wide ? " wide" : ""}`}>{children}</div></header>;
}
