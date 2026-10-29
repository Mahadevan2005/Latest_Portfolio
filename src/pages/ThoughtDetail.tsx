import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { thoughtDetails, thoughts } from "../data/content";
import NotFound from "./NotFound";
export default function ThoughtDetail() {
 const { id } = useParams();
 const thought = thoughtDetails[id as keyof typeof thoughtDetails];
 const [feedback, setFeedback] = useState("");
 useEffect(() => { if (!feedback) return; const timer = window.setTimeout(() => setFeedback(""), 3000); return () => clearTimeout(timer); }, [feedback]);
 useEffect(() => { document.title = (thought ? thought.title : "Reflection not found") + " · Mahadevan"; }, [thought]);
 if (!thought) return <NotFound />;
 const next = thoughts[(thoughts.findIndex(t => t.id === id) + 1) % thoughts.length];
 async function share() { try { await navigator.clipboard.writeText(window.location.href); setFeedback("Link copied"); } catch { setFeedback("Copy the address from your browser to share."); } }
 return <article className="wrap page-body reading-page"><header className="reading-header"><Link className="text-link" to="/thoughts">← All reflections</Link><p className="eyebrow">A note by Mahadevan</p><h1 className="display">{thought.title}</h1><div className="article-meta"><span>{thought.date} · {thought.read_time}</span><button className="text-link" onClick={share}>Copy link ↗</button></div><p className="small-copy" role="status">{feedback}</p></header>
 <div className="reading-prose" dangerouslySetInnerHTML={{__html: thought.text}} />
 <div className="next-page"><span className="eyebrow">Keep reading</span><Link to={`/thoughts/${next.id}`}>{next.text} <span>→</span></Link></div></article>;
}
