import { RotateCcw, Search, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/Projects/ProjectCard";
import TechnologyPicker from "../components/TechnologyPicker";
import { projectsData } from "../data/content";

const tagCounts = projectsData
  .flatMap(project => project.tags)
  .reduce<Record<string, number>>((counts, tag) => {
    counts[tag] = (counts[tag] ?? 0) + 1;
    return counts;
  }, {});

const tags = Object.keys(tagCounts).sort((a, b) => a.localeCompare(b));
const popularTags = Object.entries(tagCounts)
  .filter(([, count]) => count > 1)
  .sort(([a, aCount], [b, bCount]) => bCount - aCount || a.localeCompare(b))
  .slice(0, 6)
  .map(([name]) => name);

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const tag = params.get("tech") ?? "";
  const normalizedQuery = query.trim().toLowerCase();
  const hasFilters = Boolean(query || tag);

  const update = (key: "q" | "tech", value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = projectsData.filter(project => {
    const matchesTag = !tag || project.tags.includes(tag);
    const searchableText = [project.title, project.description, ...project.tags].join(" ").toLowerCase();
    return matchesTag && (!normalizedQuery || searchableText.includes(normalizedQuery));
  });

  const resultText = `${filtered.length} ${filtered.length === 1 ? "project" : "projects"}`;

  return <div className="wrap page-body">
    <PageIntro number="02" label="Selected work" title="Projects">
      <p>End-to-end applications across AI, product engineering, data, and the web. Each one a chance to solve a problem and learn something new.</p>
    </PageIntro>

    <section className="project-filters" aria-labelledby="project-filter-title">
      <div className="project-filter-heading">
        <div>
          <p className="eyebrow" id="project-filter-title">Explore the archive</p>
          <p>Search by project, idea, or tool—or narrow the collection by technology.</p>
        </div>
        <span className="project-result-count" role="status" aria-live="polite">{resultText}</span>
      </div>

      <div className="project-filter-controls">
        <label className="project-search">
          <span className="control-label">Search projects</span>
          <span className="control-shell">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Try “AI”, “Flask”, or “email”…"
              value={query}
              onChange={event => update("q", event.target.value)}
            />
            {query && <button type="button" onClick={() => update("q", "")} aria-label="Clear project search"><X size={17} /></button>}
          </span>
        </label>

        <TechnologyPicker value={tag} technologies={tags} counts={tagCounts} total={projectsData.length} onChange={value => update("tech", value)} />
      </div>

      <div className="quick-filters">
        <span className="folio">Popular</span>
        <button className={!tag ? "active" : ""} type="button" onClick={() => update("tech", "")} aria-pressed={!tag}>All</button>
        {popularTags.map(technology => <button className={tag === technology ? "active" : ""} type="button" key={technology} onClick={() => update("tech", tag === technology ? "" : technology)} aria-pressed={tag === technology}>{technology}</button>)}
        {hasFilters && <button className="reset-project-filters" type="button" onClick={() => setParams({}, { replace: true })}><RotateCcw size={13} /> Reset</button>}
      </div>
    </section>

    {hasFilters && <div className="active-filter-summary">
      <p>Showing <strong>{resultText}</strong>{query && <> matching “{query}”</>}{tag && <> using <span className="tag">{tag}</span></>}.</p>
    </div>}

    <section className="project-archive" aria-label="Project archive">
      <p className="eyebrow project-archive-label">Projects</p>
      <div className="project-grid">{filtered.map(project => <ProjectCard key={project.id} project={project} index={projectsData.indexOf(project)} />)}</div>
    </section>

    {!filtered.length && <div className="empty-state">
      <span className="empty-search-icon"><Search size={24} /></span>
      <h2>No matching projects.</h2>
      <p>Try a broader search or choose a different technology.</p>
      <button className="button fill" onClick={() => setParams({}, { replace: true })}>Clear all filters</button>
    </div>}
  </div>;
}
