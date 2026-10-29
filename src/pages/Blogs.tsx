import { useState } from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { blogPosts } from "../data/content";
const categories = ["All", "AI & ML", "System Design", "Networking", "Web Development"];
export default function Blogs() {
 const [category, setCategory] = useState("All");
 const posts = blogPosts.filter(p => category === "All" || p.primaryCategory === category || p.tags.includes(category));
 return <div className="wrap page-body"><PageIntro number="04" label="Writing" title="Technical Articles"><p>Exploring the systems we use every day. Notes on AI, the web, and the engineering decisions that make software work.</p></PageIntro>
 <div className="archive-toolbar"><div className="filter-group" aria-label="Article categories">{categories.map(c => <button key={c} aria-pressed={category === c} className={`filter-button ${category === c ? "active" : ""}`} onClick={() => setCategory(c)}>{c}</button>)}</div><span className="folio" role="status">{posts.length} articles</span></div>
 <div className="writing-list">{posts.map((p,i) => <article className="writing-entry" key={p.id}><a href={p.url} target="_blank" rel="noreferrer" className="writing-art" aria-label={`Read ${p.title}`}><span className="folio">FIELD NOTES / 0{blogPosts.indexOf(p)+1}</span><span className="art-word">{p.id === "prompt-caching" ? "cache." : "dns."}</span><span className="art-code">{p.id === "prompt-caching" ? "context → reuse → response" : "name → resolve → connect"}</span><span className="art-arrow">↗</span></a><div><p className="eyebrow plain">{p.primaryCategory} · {p.readTime}</p><h2><a href={p.url} target="_blank" rel="noreferrer">{p.title}</a></h2><p className="body-copy">{p.excerpt}</p><div className="article-meta"><span>{p.date}</span><a href={p.url} className="text-link" target="_blank" rel="noreferrer">Read on Medium ↗</a></div>{i === 0 && category === "All" && <span className="tag">Latest article</span>}</div></article>)}</div>
 <div className="next-page"><span className="eyebrow">A different kind of writing</span><Link to="/thoughts">Thoughts & reflections <span>→</span></Link></div></div>;
}
