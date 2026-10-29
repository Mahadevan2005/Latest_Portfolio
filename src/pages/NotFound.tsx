import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
export default function NotFound() { return <div className="wrap page-body"><PageIntro number="404" label="Page unavailable" title="Page Not Found"><p>This page doesn’t exist. There’s plenty of work, writing, and curious experimentation back home.</p></PageIntro><Link className="button fill" to="/">Back to the portfolio →</Link></div>; }
