import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Accolades = lazy(() => import("./pages/Accolades"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Thoughts = lazy(() => import("./pages/Thoughts"));
const ThoughtDetail = lazy(() => import("./pages/ThoughtDetail"));
const Codolio = lazy(() => import("./pages/Codolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
export default function App() {
 return <ThemeProvider><MotionConfig reducedMotion="user"><Layout><Suspense fallback={<div className="wrap page-body py-20" role="status">Opening page…</div>}><Routes>
  <Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/experience" element={<Experience/>}/><Route path="/accolades" element={<Accolades/>}/><Route path="/blogs" element={<Blogs/>}/><Route path="/thoughts" element={<Thoughts/>}/><Route path="/thoughts/:id" element={<ThoughtDetail/>}/><Route path="/codolio" element={<Codolio/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
 </Routes></Suspense></Layout></MotionConfig></ThemeProvider>;
}
