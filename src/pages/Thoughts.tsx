import { Link } from "react-router-dom";
import { thoughts } from "../data/content";
import PageIntro from "../components/PageIntro";
export default function Thoughts() {
 return <div className="wrap page-body"><PageIntro number="05" label="Personal notes" title="Thoughts & Reflections"><p>Notes on how I see, learn, and make sense of the world—covering growth, patience, and the lessons that don’t fit on a résumé.</p></PageIntro>
 <div className="notes-list">{thoughts.map((note,i) => <Link className="note-row" key={note.id} to={`/thoughts/${note.id}`}><span className="folio">0{i+1}</span><div><p className="eyebrow plain">{note.category}</p><h2>{note.text}</h2></div><span className="small-copy">{note.date}</span><span className="row-arrow">↗</span></Link>)}</div>
 <div className="quiet-note"><span className="display">“</span><p>Achievements are visible. Becoming is not.<br />But becoming is what makes achievements meaningful.</p><span className="folio">From “Becoming Over Achieving”</span></div></div>;
}
