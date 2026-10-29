import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
const milestones = [
 ["1,590+", "Problems solved", "Across LeetCode, CodeChef, and other platforms."],
 ["1,451", "Peak LeetCode rating", "Best contest rank: 1,772 / 25,000+."],
 ["980+", "Contributions", "Coding practice and open-source contributions."],
 ["30+", "Awards & badges", "Including LeetCode 365 Days and CodeStudio Specialist badges."]
];
export default function Codolio() {
 return <div className="wrap page-body"><PageIntro number="06" label="Problem solving" title="Coding Practice"><p>Building intuition through consistent practice. Algorithms, data structures, and the satisfaction of finding a simpler solution.</p></PageIntro>
 <p className="small-copy mb-5">Milestones recorded in my portfolio. See Codolio for the latest profile activity.</p>
 <div className="stat-grid">{milestones.map(([value,label,description]) => <div key={label}><strong className="display">{value}</strong><h2>{label}</h2><p>{description}</p></div>)}</div>
 <div className="coding-panel"><div><p className="eyebrow">Practice overview</p><h2 className="display">Problem-Solving Profile</h2><p className="body-copy">Strong DSA foundations, algorithmic thinking, and a habit of breaking complex problems into manageable parts. My Codolio profile brings the platforms together.</p><a className="button fill" href="https://codolio.com/profile/Mahadevan" target="_blank" rel="noreferrer">Open Codolio profile ↗</a></div><div className="practice-list"><div><span className="folio">01 / RECOGNITION</span><h3>Flipkart GRiD 7.0</h3><p>National semifinalist among 1.6 lakh+ participants.</p></div><div><span className="folio">02 / LANGUAGE FLUENCY</span><h3>Java & Python</h3><p>Five-star badges on HackerRank in both languages.</p></div><div><span className="folio">03 / OPEN SOURCE</span><h3>Learn. Build. Contribute.</h3><p>Commits, pull requests, and projects that turn practice into useful software.</p><a className="text-link" href="https://github.com/mahadevan2005" target="_blank" rel="noreferrer">GitHub profile ↗</a></div></div></div>
 <div className="next-page"><span className="eyebrow">Recognition along the way</span><Link to="/accolades">Awards & credentials <span>→</span></Link></div></div>;
}
