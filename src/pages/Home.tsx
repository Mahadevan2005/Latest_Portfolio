import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import HeroPortrait from "../components/Home/HeroPortrait";

const focusAreas = [
  { title: "Backend Systems", description: "APIs, queues, schedulers, and data workflows engineered for reliability, recovery, and scale.", detail: "APIs · orchestration · distributed systems" },
  { title: "Applied AI", description: "Production AI workflows that combine agents, retrieval, evaluation, and human feedback.", detail: "Agents · RAG · evaluation infrastructure" },
  { title: "Product Engineering", description: "End-to-end products shaped from architecture and backend logic to accessible user experiences.", detail: "System design · full stack · delivery" },
];
const skills = ["Java", "Python", "TypeScript", "React", "Django", "Spring Boot", "PostgreSQL", "Redis", "AWS", "AI systems"];

export default function Home() {
  return <>
    <section className="wrap" style={{ paddingBlock: "clamp(64px, 10vw, 128px) 56px" }}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.75fr] lg:items-start">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <p className="eyebrow">Software engineer · HackerRank · India</p>
          <motion.h1 className="display hero-title personal-hero-title mt-7" aria-label="Hey, I’m Mahadevan. I build backend systems, developer products, and applied AI.">
            <span aria-hidden="true"><motion.span initial={{y:"110%",rotate:2}} animate={{y:0,rotate:0}} transition={{duration:.9,delay:.04,ease:[.16,1,.3,1]}}>Hey, I’m</motion.span></span>
            <span aria-hidden="true"><motion.span initial={{y:"110%",rotate:2}} animate={{y:0,rotate:0}} transition={{duration:.92,delay:.1,ease:[.16,1,.3,1]}}>Mahadevan.</motion.span></span>
            <span className="hero-role-line" aria-hidden="true"><motion.em initial={{y:"110%",rotate:2}} animate={{y:0,rotate:0}} transition={{duration:.95,delay:.18,ease:[.16,1,.3,1]}}>I build backend systems, developer products, and applied AI.</motion.em></span>
          </motion.h1>
          <p className="lede mt-8 max-w-xl">Software Development Engineer at HackerRank, based in India. I care about clear thinking, dependable software, and learning by building.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button fill" href="#work">Work <ArrowDown size={14} /></a>
            <a className="button" href="https://github.com/mahadevan2005" target="_blank" rel="noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={13} /></a>
            <a className="button" href="https://www.linkedin.com/in/mahadevan-in/" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn <ArrowUpRight size={13} /></a>
          </div>
        </motion.div>
        <motion.div className="hero-visual-column" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .13, ease: [.16,1,.3,1] }}>
          <HeroPortrait />
        </motion.div>
      </div>
      <section id="impact" className="mt-14 scroll-mt-24 border-y border-[var(--line)]">
        <div className="grid gap-3 border-b border-[var(--line)] py-6 sm:grid-cols-[1fr_1.5fr] sm:items-end">
          <p className="eyebrow">What I build</p>
          <p className="max-w-xl text-sm leading-6 text-[var(--ink-soft)]">The three areas where I spend most of my time building, experimenting, and improving.</p>
        </div>
        <ul className="grid sm:grid-cols-3">{focusAreas.map(({ title, description, detail }, index) => <li key={title} className={`group flex min-h-[260px] flex-col py-7 sm:pr-7 ${index ? "border-t border-[var(--line)] sm:border-l sm:border-t-0 sm:pl-7" : ""}`}><span className="folio">0{index + 1}</span><h2 className="display mt-8 text-[clamp(30px,3.2vw,46px)] leading-[1.02] transition-colors group-hover:text-[var(--signal)]">{title}</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--ink-soft)]">{description}</p><p className="mono mt-auto pt-7 text-[10px] uppercase tracking-[.1em] text-[var(--ink-soft)]">{detail}</p></li>)}</ul>
      </section>
    </section>

    <section className="section wrap home-section" id="about"><p className="eyebrow">01 — Perspective</p><p className="display mt-7 max-w-6xl text-[clamp(32px,4.2vw,62px)] leading-[1.12]">I like building backend systems - and <em>breaking them until they work better.</em> APIs, queues, data flows, and failure paths: software that stays reliable under real use and remains easy to reason about.</p></section>

    <section className="section wrap home-section" id="work"><div className="section-head is-reversed"><div><p className="eyebrow">02 — Professional journey</p><h2 className="display home-section-heading">From an idea<br />to <em>impact.</em></h2></div><p>Roles where I owned real systems—from AI-assisted evaluation pipelines to accessibility improvements and high-volume data operations.</p></div>
      <div className="border-t border-[var(--line)]">
        <Link to="/experience" className="card-link grid gap-5 border-b border-[var(--line)] py-7 md:grid-cols-[110px_1.1fr_.8fr_auto] md:items-baseline"><span className="mono text-xs text-[var(--ink-soft)]">2026 — now</span><div><h3 className="display text-[clamp(30px,3.4vw,46px)]">HackerRank</h3><p className="mt-2 text-sm text-[var(--ink-soft)]">Software Development Engineer I</p></div><p className="text-sm leading-6 text-[var(--ink-soft)]">AI evaluation, developer workflows, accessibility and product engineering.</p><span className="display text-3xl text-[var(--signal)]">→</span></Link>
        <Link to="/experience" className="card-link grid gap-5 border-b border-[var(--line)] py-7 md:grid-cols-[110px_1.1fr_.8fr_auto] md:items-baseline"><span className="mono text-xs text-[var(--ink-soft)]">2025 — 26</span><div><h3 className="display text-[clamp(30px,3.4vw,46px)]">IIT Madras & CODE</h3><p className="mt-2 text-sm text-[var(--ink-soft)]">Software Developer Intern</p></div><p className="text-sm leading-6 text-[var(--ink-soft)]">Payments, quality automation, developer tooling, and systems that reduce manual work.</p><span className="display text-3xl text-[var(--signal)]">→</span></Link>
      </div><Link className="button mt-9 fill" to="/experience">Full experience <ArrowUpRight size={14} /></Link>
    </section>

    <section className="section wrap home-section"><div className="section-head"><div><p className="eyebrow">03 — Selected projects</p><h2 className="display home-section-heading">Things I’ve<br /><em>built.</em></h2></div><p>Side projects are my practical lab: a place to examine product decisions, build end-to-end, and share what works.</p></div>
      <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2"><Link to="/projects" className="group bg-[var(--paper-raised)] p-6 sm:p-9"><p className="mono text-[10px] uppercase tracking-[.13em] text-[var(--ink-soft)]">Featured · full-stack</p><h3 className="display mt-9 text-[clamp(34px,4vw,58px)] group-hover:text-[var(--signal)]">Influencer<br /><em>Platform.</em></h3><p className="mt-5 max-w-md text-sm leading-6 text-[var(--ink-soft)]">A sponsor–creator collaboration product with asynchronous workflows, analytics, and engagement automation.</p><span className="mt-9 inline-block text-[var(--signal)]">View project →</span></Link><Link to="/projects" className="group bg-[var(--paper-raised)] p-6 sm:p-9"><p className="mono text-[10px] uppercase tracking-[.13em] text-[var(--ink-soft)]">Featured · AI systems</p><h3 className="display mt-9 text-[clamp(34px,4vw,58px)] group-hover:text-[var(--signal)]">Virtual<br /><em>Teaching AI.</em></h3><p className="mt-5 max-w-md text-sm leading-6 text-[var(--ink-soft)]">A FastAPI-based teaching assistant that handles rich questions, course context, evaluation, and deployment.</p><span className="mt-9 inline-block text-[var(--signal)]">View project →</span></Link></div>
    </section>

    <section className="section wrap home-section toolkit-section"><div className="section-head is-reversed"><div><p className="eyebrow">04 — Toolkit</p><h2 className="display home-section-heading">The tools<br />behind the <em>work.</em></h2></div><p>A deliberately broad toolkit, anchored in backend engineering and thoughtful interface work.</p></div><div className="flex flex-wrap border-y border-[var(--line)] py-5">{skills.map((skill) => <span key={skill} className="display mr-5 py-3 text-2xl text-[var(--ink-soft)] transition hover:text-[var(--signal)]">{skill}</span>)}</div></section>

    <section className="section wrap home-section"><div className="section-head"><div><p className="eyebrow">05 — Further reading</p><h2 className="display home-section-heading">More than<br /><em>the code.</em></h2></div><p>The thinking behind the work, the practice behind the progress, and the person behind the keyboard.</p></div><div className="home-explore">
      {[["01","About","Education, tools, and a little of my story.","/about"],["02","Writing","Notes on AI, systems, and the web.","/blogs"],["03","Practice","Problem solving and coding milestones.","/codolio"],["04","Reflections","On growth, patience, and becoming.","/thoughts"]].map(([n,title,copy,to])=><Link to={to} key={to}><span className="folio">{n}</span><h3>{title}</h3><p>{copy}</p><span className="row-arrow">→</span></Link>)}
    </div></section>

  </>;
}
