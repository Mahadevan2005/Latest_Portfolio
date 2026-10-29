import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MotionExperience from "../MotionExperience";
const titles: Record<string,string> = {"/":"Software engineer","/experience":"Experience","/projects":"Projects","/accolades":"Credentials","/blogs":"Writing","/thoughts":"Reflections","/codolio":"Coding practice","/about":"About","/contact":"Contact"};
export default function Layout({children}: {children: React.ReactNode}) {
 const location=useLocation(); const first=useRef(true);
 useEffect(()=>{
   if (!location.pathname.startsWith("/thoughts/")) document.title=(titles[location.pathname] || "Page not found")+" · Mahadevan Manikandan";
   const canonical=document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
   if(canonical) canonical.href="https://mahadevan-dev.vercel.app"+location.pathname;
   if(location.hash) { requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView()); }
   else { window.scrollTo({top:0,behavior:"instant"}); }
   if(!first.current) document.getElementById("main-content")?.focus({preventScroll:true});
   first.current=false;
 },[location.pathname,location.hash]);
 return <div className="site-shell flex min-h-screen flex-col"><a href="#main-content" className="skip-link">Skip to content</a><MotionExperience/><Navbar/><motion.main key={location.pathname} id="main-content" tabIndex={-1} className="flex-grow outline-none" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.52,ease:[.16,1,.3,1]}}>{children}</motion.main><Footer/></div>;
}
