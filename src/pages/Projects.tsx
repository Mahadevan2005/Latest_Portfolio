import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard, { ProjectProps } from '../components/Projects/ProjectCard';
import { motion } from 'framer-motion';

// Replace with your actual project data
const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "Influencer Engagement and Sponsorship Coordination Platform - V2",
    description: "An upgraded Influencer–Sponsor Connect Platform with Vue.js frontend, Redis & Celery for async tasks, Axios APIs, report export for insights, plus daily/monthly engagement emails for improved collaboration between sponsors and influencers.",
    images: ["/projects/iescp_v2/thumbnail.jpg", "/projects/iescp_v2/home.png", "/projects/iescp_v2/footer.png", "/projects/iescp_v2/admin_stats.png", "/projects/iescp_v2/admin_dash.png"],
    tags: ["Python", "Vue.js", "Flask", "Axios", "RESTful API's", "SQLite", "Chart.js", "Celery", "Redis", "MailHog"],
    sourceUrl: "https://github.com/Mahadevan2005/Influencer_Engagement_and_Sponsorship_Coordination_Platform_Version_2",
    // liveUrl: "https://example.com",
    demoUrl: "https://drive.google.com/file/d/1_hJWbBw1qLwg8wWTK2ShPUE24-hbA261/view"
  },
  {
    id: 2,
    title: "Tools in Data Science Virtual TA",
    description: "A FastAPI-based Virtual Teaching Assistant for IIT Madras’ Data Science course, providing automated query resolution with text/image input, custom scrapers, structured JSON, modular logic, contextual links, performance evaluation via Promptfoo, and Vercel deployment.",
    images: ["/projects/tds_ta/Virtual_TA_Logo.png"],
    tags: ["Python", "FastAPI", "Pydantic", "JSON", "Promptfoo", "Git", "Vercel"],
    sourceUrl: "https://github.com/Mahadevan2005/TDS-Virtual_Teaching-Assistant",
  },
  {
    id: 3,
    title: "YouTube App Clone",
    description: "A frontend-only YouTube clone built with HTML & CSS, designed for structured video placement using CSS Grid and Flexbox for headers and sidebars. It also includes responsive layouts with media queries, ensuring smooth adaptation across devices.Best experienced on laptops for full layout responsiveness.",
    images: ["/projects/yt_clone/yt-logo.jpg"],
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Media Queries"],
    sourceUrl: "https://github.com/Mahadevan2005/Youtube-Clone",
    liveUrl: "https://mahadevan2005.github.io/Youtube-Clone/"
  },
  {
    id: 4,
    title: "Influencer Engagement and Sponsorship Coordination Platform - V1",
    description: "A web platform developed to connect sponsors and influencers for effective product marketing, featuring campaign CRUD, role-based authentication, admin dashboard, and data visualization with Matplotlib. (Best Project Award at IIT Madras.)",
    images: ["/projects/iescp_v1/thumbnail.jpg", "/projects/iescp_v1/iescp_home.png", "/projects/iescp_v1/spon_dash.png", "/projects/iescp_v1/admin_dash.png"],
    tags: ["HTML5", "CSS3", "Flask", "SQLAlchemy", "Jinja2", "SQLite", "Matplotlib"],
    sourceUrl: "https://github.com/Mahadevan2005/Influencer-Engagement-and-Sponsorship-Coordination-Platform-Version_1",
    demoUrl: "https://drive.google.com/file/d/1z_kcOFAl7IJ_DXpZd8JPZdIa6fxc0ZJI/view"
  },
  {
    id: 5,
    title: "MailPilot - AI Email Assitant",
    description: "MailPilot is a smart email assistant that works as both a web app and a Chrome extension, powered by Spring Boot and Google Gemini API. It helps you draft, summarize, rewrite, and organize emails directly from your browser or a dedicated web dashboard.",
    images: ["/projects/mailpilot/MailPilot.png"],
    tags: ["React.js", "SpringBoot", "Gemini API", "Material UI", "REST API's", "Docker"],
    sourceUrl: "https://github.com/Mahadevan2005/AI_Email_Assistant",
    liveUrl: "https://ai-email-assistant-tau.vercel.app/",
    demoUrl: "https://drive.google.com/file/d/1ca6-bRpfpQjxIedjWZec6mUDAj2MrF6k/view?usp=sharing"
  },
  {
    id: 6,
    title: "Quiz Master",
    description: "QuizMaster is a responsive React and Material UI quiz app that fetches questions from an API, features a 30-minute countdown timer, real-time progress tracking, and detailed visual reports, delivering an engaging, fast, and cross-device learning experience.",
    images: ["/projects/quiz_app/quiz-home.png", "/projects/quiz_app/quiz-login.png", "/projects/quiz_app/quiz-page.png", "/projects/quiz_app/quiz-report.png"],
    tags: ["React.js", "Material UI", "Git", "Vercel"],
    sourceUrl: "https://github.com/Mahadevan2005/Quiz_Application",
    liveUrl: "https://global-quiz-application.vercel.app/",
  },
  {
    id: 7,
    title: "Text to Speech App",
    description: "Developed a browser-based text-to-speech application using the Web Speech API, offering 24+ voice options in 10+ languages. Designed to enhance user accessibility and deliver a smoother auditory interaction experience.",
    images: ["/projects/tts/thumbnail.jpg", "/projects/tts/tts-home.png"],
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Web Speech API"],
    sourceUrl: "https://github.com/Mahadevan2005/Text-To-Speech-App",
    liveUrl: "https://tts-translation-app-two.vercel.app/"
  },
  {
    id: 8,
    title: "AI Merchandise Maker",
    description: "This project simulates an automated merch generation pipeline. It utilizes Python and OpenAI APIs to generate product titles, descriptions, and images. JavaScript handles mockup visualization with HTML Canvas, while Java simulates publishing endpoints. The project showcases multi-language integration, and AI-powered content generation, offering a simulation of real-world product automation workflows.",
    images: ["/projects/aimerch/merch.png"],
    tags: ["Python", "JavaScript", "Java", "OpenAI API", "Git"],
    sourceUrl: "https://github.com/Mahadevan2005/AI_Merch_Maker_Lite",
    demoUrl: "https://drive.google.com/file/d/1v7yRMiIXKfL_uqxS9EMdFClDbOslgLgO/view?usp=sharing"
  },
  {
    id: 9,
    title: "CGPA Genie",
    description: "An intuitive web application designed to calculate the level wise CGPA for the IITM BS Degree program. Users can choose the input grades for the completed courses, and compute level wise CGPA based on predefined course credits, ensuring accurate and efficient grade tracking with a clean UI.",
    images: ["/projects/cgpa-calc/home.png"],
    tags: ["HTML5", "Tailwind CSS", "Flask", "Jinja2"],
    sourceUrl: "https://github.com/Mahadevan2005/IITM-CGPA-CALCULATOR_V2",
  },
  {
    id: 10,
    title: "UI - Design Case Study on GPay",
    description: "Analyzed existing GPay features and designed a new money-saving feature using Figma, enhancing user experience and promoting efficient financial management.",
    images: ["/projects/gpay/gpay.png"],
    tags: ["Figma", "Product Design"],
    liveUrl: "https://www.figma.com/proto/Px9Hnv39Kcs4a6QVPZ6ZvF/Gpay---Saving-circle-feature?node-id=0-1&t=UCIewlncKHzjU5Ci-1",
  },
  {
    id: 11,
    title: "Rock Paper Scissors Game",
    description: "A simple and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript with an 'Auto Play' feature.",
    images: ["/projects/rps/rps-home.png"],
    tags: ["HTML5", "CSS3", "JavaScript"],
    sourceUrl: "https://github.com/Mahadevan2005/Rock-Paper-Scissor-Game",
    liveUrl: "https://mahadevan2005.github.io/Rock-Paper-Scissor-Game/",
  },
  {
    id: 12,
    title: "Personalized Shopping Recommendation System",
    description: "This project demonstrates a lightweight personalized recommendation engine using Python. It evolves recommendations for a shopping app based on user interactions (clicks/likes).",
    images: ["/projects/psr/img.png"],
    tags: ["Python", "Pandas", "Matplotlib"],
    sourceUrl: "https://github.com/Mahadevan2005/Personalized-Shopping-Recommendation",
  },
];

// Tech stack filter options
const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  return (
    <div className="min-h-screen py-12 sm:py-16 bg-gradient-to-b from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Projects" 
            subtitle="A collection of my recent work and personal projects."
          />
          
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium mr-2">Filter by:</span>
              <button
                onClick={() => setFilter(null)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  !filter 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/70'
                }`}
              >
                All
              </button>
              
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    filter === tag 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted hover:bg-muted/70'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No projects found with the selected filter.</p>
            <button
              onClick={() => setFilter(null)}
              className="btn btn-primary mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;