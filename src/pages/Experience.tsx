import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { experienceData } from "../data/content";
const metricLabels: Record<string,string> = { RepositoriesSynced: "Repositories synchronized", DeploymentOverhead: "Deployment overhead", SimilarQueryHandling: "Similar-query handling", DevelopersScreened: "Developers screened", AnalysisTime: "Analysis time", SupportTickets: "Support tickets", HelpfulRatings: "Helpful / Good ratings", AccessibilityFixes: "Accessibility fixes", IssuesClosed: "Issues closed", LinesOfCode: "Lines of code", ReviewCycles: "Review cycles", FundTrackingErrors: "Fund-tracking errors", LoginFailures: "Login failures", scale: "Data rows", ManualVerification: "Manual verification", timeSaved: "Time saved", conflicts: "Merge conflicts", processAutomated: "Process automated" };
export default function Experience() {
  return <div className="wrap page-body"><PageIntro number="01" label="2025 — present" title="Professional Experience"><p>Backend systems, AI infrastructure, automation, and product engineering—organized by role, ownership, and measurable outcomes.</p></PageIntro>
    <div className="work-list">{experienceData.map((job, i) => <article className="work-entry" key={job.id} id={`role-${job.id}`}>
      <aside className="work-aside"><span className="folio">0{i + 1}</span><p>{job.duration}</p><span className="small-copy">{job.location}</span>{i === 0 && <span className="status-label">Current role</span>}</aside>
      <div><div className="work-heading"><img src={job.logo} alt="" width="56" height="56" loading="lazy" /><div><p className="eyebrow plain">{job.company}</p><h2>{job.role}</h2></div></div>
      <ul className="contributions">{job.description.map(item => <li key={item}>{item}</li>)}</ul>
      <dl className="work-metrics">{Object.entries(job.metrics).map(([key,value]) => <div key={key}><dt>{metricLabels[key] || key}</dt><dd>{value}</dd></div>)}</dl>
      <div className="tags">{job.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div>
      <a className="text-link" href={job.website} target="_blank" rel="noreferrer">Visit {job.company.split(" (")[0]} ↗</a></div>
    </article>)}</div>
    <div className="next-page"><span className="eyebrow">Beyond the day job</span><Link to="/projects">Explore the projects <span>→</span></Link></div>
  </div>;
}
