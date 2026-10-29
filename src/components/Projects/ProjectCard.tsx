import { useState } from "react";
import ImageViewer from "../ImageViewer";
export interface ProjectProps { id: number; title: string; description: string; images: string[]; tags: string[]; sourceUrl?: string; liveUrl?: string; demoUrl?: string; }

function projectDiscipline(project: ProjectProps) {
 if (project.tags.includes("Product Design") || project.tags.includes("Figma")) return "Product design · UX case study";
 if (["OpenAI API", "Gemini API", "Promptfoo"].some(tag => project.tags.includes(tag))) return "AI systems · Applied intelligence";
 if (["Flask", "SpringBoot", "FastAPI"].some(tag => project.tags.includes(tag))) return "Full-stack product · Web application";
 return "Frontend engineering · Interactive product";
}

export default function ProjectCard({project,index}: {project:ProjectProps;index:number}) {
 const [slide,setSlide] = useState(0); const [open,setOpen] = useState(false);
 return <article className="project-card" id={`project-${project.id}`}>
 <div className="project-index mono"><i aria-hidden="true" />{String(index+1).padStart(2,"0")}</div>
 <div className="project-copy"><div className="project-kicker"><span className="folio">{projectDiscipline(project)}</span>{project.id===4 && <span className="award-label">IIT Madras · Best Project</span>}</div><h2>{project.title.replace("Assitant","Assistant")}</h2><div className="tags">{project.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div><p className="body-copy">{project.description}</p><div className="project-links">{project.sourceUrl && <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Source code for ${project.title}`}>Source code ↗</a>}{project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Live project: ${project.title}`}>Live project ↗</a>}{project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Demo of ${project.title}`}>Watch demo ↗</a>}</div></div>
 <div className="project-image"><button className="image-zoom" onClick={()=>setOpen(true)} aria-label={`Enlarge screenshot of ${project.title}`}><img src={project.images[slide]} alt={`${project.title}, screenshot ${slide+1}`} loading="lazy" /></button>{project.images.length>1 && <div className="gallery-controls"><button onClick={()=>setSlide((slide+project.images.length-1)%project.images.length)} aria-label={`Previous screenshot of ${project.title}`}>←</button><span aria-live="polite">{slide+1} / {project.images.length}</span><button onClick={()=>setSlide((slide+1)%project.images.length)} aria-label={`Next screenshot of ${project.title}`}>→</button></div>}</div>
 {open && <ImageViewer src={project.images[slide]} title={project.title} onClose={()=>setOpen(false)} />}</article>;
}
