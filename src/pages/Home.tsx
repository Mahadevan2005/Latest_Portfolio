import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const buildAreas = [
  ["01", "Backend systems", "APIs, queues, schedulers, and data flows built to recover cleanly and scale with use."],
  ["02", "Applied AI", "Agents, retrieval, evaluation, and feedback loops designed for real product workflows."],
  ["03", "Product engineering", "End-to-end products where the system design and user experience strengthen each other."],
];

const tools = ["Java", "Python", "TypeScript", "Spring Boot", "Django", "React", "PostgreSQL", "Redis", "Kubernetes", "AWS"];

function GridLines() {
  return <div className="tour-grid" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>;
}

function QueueSystem() {
  return <div className="system-demo queue-demo" aria-label="A request failing, retrying, recovering, and committing successfully">
    <div className="demo-top"><span>request_trace.json</span><span className="demo-live"><i /> observing</span></div>
    <div className="trace-canvas">
      <svg className="trace-map" viewBox="0 0 720 300" aria-hidden="true">
        <path className="trace-line" d="M90 120H248H406H624" />
        <path className="trace-retry-line" d="M470 120C515 120 516 235 408 235H310C235 235 230 174 248 120" />
        <circle className="trace-packet packet-primary" r="6"><animateMotion dur="5.6s" repeatCount="indefinite" path="M90 120H248H406H624" /></circle>
        <circle className="trace-packet packet-retry" r="5"><animateMotion begin="2.2s" dur="3.4s" repeatCount="indefinite" path="M470 120C515 120 516 235 408 235H310C235 235 230 174 248 120" /></circle>
      </svg>
      <svg className="mobile-flow-map mobile-trace-map" viewBox="0 0 360 390" aria-hidden="true">
        <path className="mobile-flow-line" d="M68 96H292C318 96 318 172 292 172H68C42 172 42 248 68 248H292" />
        <path className="mobile-retry-line" d="M68 248C20 248 20 172 68 172H180" />
        <circle className="mobile-flow-packet" r="6"><animateMotion dur="6s" repeatCount="indefinite" path="M68 96H292C318 96 318 172 292 172H68C42 172 42 248 68 248H292" /></circle>
        <circle className="mobile-retry-packet" r="5"><animateMotion begin="2.8s" dur="3.2s" repeatCount="indefinite" path="M68 248C20 248 20 172 68 172H180" /></circle>
      </svg>
      <div className="trace-node trace-api"><span>01</span><i>API</i><small>202 accepted</small></div>
      <div className="trace-node trace-queue"><span>02</span><i>QUEUE</i><small>job_84f2</small></div>
      <div className="trace-node trace-worker"><span>03</span><i>WORKER</i><small>attempt 02</small><b>!</b></div>
      <div className="trace-node trace-store"><span>04</span><i>STORE</i><small>committed</small><b>✓</b></div>
      <div className="recovery-stamp"><span>self-healed</span><strong>428ms</strong></div>
    </div>
    <div className="trace-log" aria-hidden="true">
      <span><i className="log-ok" />request accepted</span>
      <span><i className="log-fail" />worker timeout</span>
      <span><i className="log-warn" />retry scheduled</span>
      <span><i className="log-ok" />commit complete</span>
    </div>
  </div>;
}

function AiSystem() {
  return <div className="system-demo ai-demo" aria-label="An AI response moving through retrieval, generation, evaluation, and human review">
    <div className="demo-top"><span>evaluation_pipeline.py</span><span className="gate-state"><i /> release gated</span></div>
    <div className="ai-pipeline">
      <svg className="ai-pipeline-map" viewBox="0 0 720 210" aria-hidden="true">
        <path d="M96 102H622" />
        <circle r="6"><animateMotion dur="6s" repeatCount="indefinite" path="M96 102H622" /></circle>
        <circle r="4"><animateMotion begin="-3s" dur="6s" repeatCount="indefinite" path="M96 102H622" /></circle>
      </svg>
      <svg className="mobile-flow-map mobile-ai-map" viewBox="0 0 360 360" aria-hidden="true">
        <path className="mobile-flow-line" d="M68 98H292C318 98 318 174 292 174H68C42 174 42 248 68 248H292" />
        <circle className="mobile-flow-packet" r="6"><animateMotion dur="6s" repeatCount="indefinite" path="M68 98H292C318 98 318 174 292 174H68C42 174 42 248 68 248H292" /></circle>
      </svg>
      <div className="pipeline-node pipe-context"><span>01</span><strong>Retrieve</strong><small>8 sources</small></div>
      <div className="pipeline-node pipe-model"><span>02</span><strong>Generate</strong><small>grounded</small></div>
      <div className="pipeline-node pipe-evaluate"><span>03</span><strong>Evaluate</strong><small>4 checks</small></div>
      <div className="pipeline-node pipe-review"><span>04</span><strong>Review</strong><small>approved</small></div>
    </div>
    <div className="evaluation-panel">
      <div className="evaluation-score"><small>release score</small><strong>94</strong><span>/ 100</span></div>
      <div className="evaluation-bars">
        <div><span>Groundedness</span><i><b style={{ width: "96%" }} /></i><em>0.96</em></div>
        <div><span>Relevance</span><i><b style={{ width: "94%" }} /></i><em>0.94</em></div>
        <div><span>Safety</span><i><b style={{ width: "99%" }} /></i><em>0.99</em></div>
      </div>
      <div className="release-stamp"><i>✓</i><span>gate passed</span><small>ready to ship</small></div>
    </div>
  </div>;
}

function WorkConsole() {
  return <div className="work-console" aria-label="A terminal summarising current engineering work">
    <div className="console-bar"><i /><i /><i /><span>mahadevan@systems ~</span></div>
    <div className="console-body">
      <p><b>$</b> current-role --verbose</p>
      <p className="console-answer">Software Development Engineer I<br />HackerRank · Bengaluru</p>
      <p><b>$</b> focus --list</p>
      <ul><li>workflow orchestration</li><li>AI support infrastructure</li><li>reliable developer products</li></ul>
      <p><b>$</b> status</p>
      <p className="console-status"><i /> building, learning, improving</p>
    </div>
  </div>;
}

export default function Home() {
  return <div className="portfolio-tour">
    <section className="tour-hero">
      <GridLines />
      <div className="tour-wrap hero-layout">
        <motion.div className="tour-hero-copy" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.16, 1, .3, 1] }}>
          <p className="tour-kicker">Software engineer · Bengaluru, India</p>
          <h1>Hey, I’m<br /><em>Mahadevan.</em></h1>
          <p className="hero-statement">I build backend systems,<br />developer products, and applied AI.</p>
          <div className="tour-actions">
            <a className="tour-button dark" href="#perspective">Explore my work <ArrowDown size={16} /></a>
            <a className="tour-icon-link" href="https://github.com/mahadevan2005" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
            <a className="tour-icon-link" href="https://www.linkedin.com/in/mahadevan-in/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          </div>
        </motion.div>
        <motion.div className="tour-portrait-stage" initial={{ opacity: 0, x: 42, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: .9, delay: .15, ease: [.16, 1, .3, 1] }}>
          <div className="portrait-bubble">I like building systems and breaking them until they work better.</div>
          <figure className="tour-portrait"><img src="/mahadevan-profile.jpg" alt="Mahadevan Manikandan" width="1600" height="1600" /></figure>
          <div className="portrait-tag"><i /><span>Currently at</span><strong>HackerRank</strong></div>
        </motion.div>
      </div>
      <div className="tour-hero-foot tour-wrap"><span>Scroll to follow the system</span><span>01 / 06</span></div>
    </section>

    <section className="tour-perspective" id="perspective">
      <GridLines />
      <div className="tour-wrap perspective-layout">
        <div><p className="tour-kicker">01 · Perspective</p><h2>Build it.<br />Stress it.<br /><em>Make it hold.</em></h2></div>
        <div className="perspective-copy"><p>I like building backend systems and <strong>breaking them until they work better.</strong> APIs, queues, data flows, and failure paths: software that stays reliable under real use and remains easy to reason about.</p><Link className="tour-text-link" to="/about">More about me <ArrowUpRight size={16} /></Link></div>
      </div>
      <div className="tour-wrap build-strip">
        {buildAreas.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>

    <section className="tour-project project-navy" id="work">
      <GridLines />
      <div className="tour-wrap project-layout">
        <div className="project-copy"><p className="tour-kicker">02 · Reliable systems</p><h2>When things fail,<br /><em>the system knows<br />what to do.</em></h2><p>My favourite work lives in the paths people rarely see: idempotency, retries, orchestration, state, and recovery.</p><div className="project-facts"><span>250+ repositories synced</span><span>85% less deployment overhead</span></div><Link className="tour-button light" to="/experience">See the work <ArrowUpRight size={16} /></Link></div>
        <QueueSystem />
      </div>
    </section>

    <section className="tour-project project-lilac">
      <GridLines />
      <div className="tour-wrap project-layout reverse">
        <div className="project-copy"><p className="tour-kicker">03 · Applied AI</p><h2>AI that is<br /><em>measured, not<br />just impressive.</em></h2><p>I build AI workflows around retrieval, evaluation, reviewer feedback, and clear boundaries, so a useful demo can become a dependable product.</p><div className="project-facts"><span>multi-agent support workflows</span><span>evaluation before release</span></div><Link className="tour-button dark" to="/projects">Explore AI projects <ArrowUpRight size={16} /></Link></div>
        <AiSystem />
      </div>
    </section>

    <section className="tour-journey">
      <GridLines />
      <div className="tour-wrap journey-layout">
        <div className="journey-copy"><p className="tour-kicker">04 · Right now</p><h2>Shipping systems<br /><em>for developers.</em></h2><p>At HackerRank, I work across workflow orchestration, AI infrastructure, internal platforms, and developer-facing products.</p><Link className="tour-text-link" to="/experience">Read the full journey <ArrowUpRight size={16} /></Link></div>
        <WorkConsole />
      </div>
    </section>

    <section className="tour-toolkit">
      <div className="tour-wrap toolkit-head"><div><p className="tour-kicker">05 · Toolkit</p><h2>Tools change.<br /><em>Thinking scales.</em></h2></div><p>I choose technology around the system: the constraints, the failure modes, and what will still be understandable six months later.</p></div>
      <div className="tool-marquee" aria-label="Technologies I use"><div>{[...tools, ...tools].map((tool, index) => <span key={`${tool}-${index}`}>{tool}<i>✦</i></span>)}</div></div>
      <div className="tour-wrap selected-projects">
        <p className="tour-kicker">Selected builds</p>
        <Link to="/projects"><span>01</span><strong>Influencer Platform V2</strong><small>Flask · Vue · Celery · Redis</small><b>↗</b></Link>
        <Link to="/projects"><span>02</span><strong>Virtual Teaching Assistant</strong><small>FastAPI · Evaluation · Deployment</small><b>↗</b></Link>
        <Link to="/projects"><span>03</span><strong>MailPilot</strong><small>Spring Boot · React · Gemini</small><b>↗</b></Link>
      </div>
    </section>

    <section className="tour-closing">
      <GridLines />
      <div className="tour-wrap closing-layout"><div><p className="tour-kicker">06 · Let’s build</p><h2>Have a hard<br />problem in mind?</h2></div><div><p>I’m always interested in reliable systems, useful AI, and products that make technical work feel simpler.</p><Link className="tour-button dark" to="/contact">Start a conversation <ArrowUpRight size={16} /></Link></div></div>
    </section>
  </div>;
}
