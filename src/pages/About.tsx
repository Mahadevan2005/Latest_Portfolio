import { Link } from "react-router-dom";
import { educationData } from "../data/content";
import PageIntro from "../components/PageIntro";
const toolkit = [
 ["Languages", "Java · Python · JavaScript · TypeScript · Bash"],
 ["Interfaces", "React · Vue.js · HTML · CSS · Tailwind"],
 ["Backend", "Django · Flask · Spring Boot · FastAPI"],
 ["Data & infrastructure", "MySQL · PostgreSQL · Redis · AWS · Linux"],
 ["Working tools", "Git · Postman · Salesforce · Figma"]
];
export default function About() {
 return <div className="wrap page-body"><PageIntro number="07" label="Profile" title="About Me"><div className="about-intro"><p>I’m Mahadevan, a Software Development Engineer I at HackerRank. I build products and AI-powered systems that improve how developers work, following a six-month internship focused on multi-agent AI, accessibility, and candidate evaluation.</p><p>I enjoy taking ideas from architecture to production—designing reliable backend systems, integrating AI into practical workflows, and making complex products feel straightforward. Most of what I know comes from building end-to-end, debugging failures, and improving what I ship through real usage.</p><p>Outside work, I enjoy music, movies, coding problems, exploring new technologies, and meeting new people.</p></div></PageIntro>
 <section className="section" id="education"><div className="section-head"><div><p className="eyebrow">01 / Education</p><h2 className="display">Education</h2></div><p>A foundation in computer science, alongside the mathematics and practical tools of data science.</p></div>{educationData.map(e=><article className="education-entry" key={e.id}><div><span className="folio">{e.duration}</span><h3>{e.degree}</h3><p className="body-copy">{e.institution}</p><p className="small-copy">{e.location}</p></div><div><p className="body-copy">{e.description}</p><ul className="contributions">{e.achievements.map(a=><li key={a}>{a}</li>)}</ul></div></article>)}</section>
 <section className="section" id="skills"><div className="section-head"><div><p className="eyebrow">02 / Toolkit</p><h2 className="display">Technical Skills</h2></div><p>Full-stack development, backend systems, responsive interfaces, and a focus on performance and maintainability.</p></div>{toolkit.map(([label,value])=><div className="toolkit-row" key={label}><span className="folio">{label}</span><p>{value}</p></div>)}</section><div className="next-page"><span className="eyebrow">Away from the code</span><Link to="/thoughts">Read my reflections <span>→</span></Link></div></div>;
}
