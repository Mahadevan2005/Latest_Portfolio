import { useState } from "react";
import PageIntro from "../components/PageIntro";
import AckoladeCard from "../components/Accolades/AckoladeCard";
import FilterPicker from "../components/FilterPicker";
import { ackoladesData } from "../data/content";
const issuers = [...new Set(ackoladesData.map(a => a.issuer))].sort();
const issuerCounts = ackoladesData.reduce<Record<string, number>>((counts, accolade) => {
 counts[accolade.issuer] = (counts[accolade.issuer] ?? 0) + 1;
 return counts;
}, {});
export default function Accolades() {
 const [query,setQuery] = useState("");
 const [issuer,setIssuer] = useState("");
 const filtered = ackoladesData.filter(a => (!issuer || a.issuer === issuer) && [a.title,a.description,a.issuer].join(" ").toLowerCase().includes(query.toLowerCase()));
 return <div className="wrap page-body"><PageIntro number="03" label="Recognition" title="Credentials & Awards"><p>A collection of awards, certifications, and milestones. The evidence of showing up, staying curious, and putting what I learn into practice.</p></PageIntro>
 <div className="archive-toolbar"><label className="search-field"><span className="sr-only">Search credentials</span><input type="search" placeholder="Find a credential…" value={query} onChange={e=>setQuery(e.target.value)}/></label><FilterPicker value={issuer} items={issuers} counts={issuerCounts} total={ackoladesData.length} label="Issuer" allLabel="All issuers" searchPlaceholder="Find an issuer…" itemName="credential" onChange={setIssuer} className="credential-filter" hideLabel/><span role="status" className="folio">{filtered.length} / {ackoladesData.length} credentials</span></div>
 <div className="credential-grid">{filtered.map(a=><AckoladeCard key={a.id} ackolade={a}/>)}</div>{!filtered.length && <div className="empty-state"><h2>No matching credentials.</h2><p>Try a different title or issuer.</p><button className="button" onClick={()=>{setQuery("");setIssuer("");}}>Reset filters</button></div>}</div>;
}
