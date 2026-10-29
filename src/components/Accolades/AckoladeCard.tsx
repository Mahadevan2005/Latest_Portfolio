import { useState } from "react";
import ImageViewer from "../ImageViewer";
export interface AckoladeProps { id: number; title: string; description: string; image: string; date: string; issuer?: string; }
export default function AckoladeCard({ ackolade }: { ackolade: AckoladeProps; index?: number }) {
 const [open,setOpen] = useState(false);
 return <article className="credential-card"><button className="credential-image" onClick={() => setOpen(true)} aria-label={`View ${ackolade.title}`}><img src={ackolade.image} alt={ackolade.title} loading="lazy" /></button><div className="credential-copy"><p className="eyebrow plain">{ackolade.issuer}</p><h2>{ackolade.title}</h2><p className="body-copy">{ackolade.description}</p><div className="article-meta"><span>{ackolade.date}</span><button className="text-link" onClick={() => setOpen(true)}>View ↗</button></div></div>{open && <ImageViewer src={ackolade.image} title={ackolade.title} onClose={() => setOpen(false)} />}</article>;
}
