export const experienceData = [
  {
    id: 1,
    company: "HackerRank",
    role: "Software Development Engineer I",
    logo: "/experience/hackerrank_logo.png",
    duration: "June 2026 - Present",
    description: [
      "Built a workflow orchestration system that synchronizes 250+ repositories with HRW through internal HackerRank APIs, using idempotent state management, crash recovery, and batch processing to reduce deployment overhead by 85%.",
      "Implemented an RLHF-inspired feedback pipeline that converts Pylon corrections into bounded LLM drafts, with reviewer-gated versioning, deduplication, and pgvector indexing; improved handling of similar queries by 95%.",
      "Architected a Kubernetes scheduler for HackerRank's AI support agent, using asyncio and per-job locking to coordinate knowledge-base, article, and ticket refreshes with retries, cleanup pipelines, and graceful shutdown."
    ],
    website: "https://www.hackerrank.com/",
    skills: [
      "Workflow Orchestration",
      "Distributed Systems",
      "Kubernetes",
      "Python",
      "Asyncio",
      "LLMs",
      "pgvector",
      "Internal APIs",
      "Reliability Engineering"
    ],
    metrics: {
      RepositoriesSynced: "250+",
      DeploymentOverhead: "↓ 85%",
      SimilarQueryHandling: "↑ 95%"
    },
    location: "Bengaluru, Karnataka, India"
  },
  {
    id: 2,
    company: "HackerRank",
    role: "Software Development Engineer - Intern",
    logo: "/experience/hackerrank_logo.png",
    duration: "Jan 2026 - June 2026",
    description: [
      "Engineered a multi-agent AI support system with Agno AgentOS, MCP, pgvector, and OpenAI models to automate ticket triage across 4+ systems, achieving 70% Helpful/Good ratings across 300+ support tickets.",
      "Resolved 25+ WCAG accessibility violations across HackerRank workflows, improving compliance and usability for keyboard and screen-reader users.",
      "Architected a candidate evaluation pipeline with Celery, Redis, and multi-LLM scoring (GPT-4, Gemini, Claude), integrating GitHub and pull-request analysis to screen 3,000+ developers across 10+ rubrics and reduce analysis time by 75%."
    ],
    website: "https://www.hackerrank.com/",
    skills: [
      "Agno AgentOS",
      "MCP",
      "pgvector",
      "OpenAI",
      "Celery",
      "Redis",
      "Multi-LLM Evaluation",
      "GitHub Integration",
      "WCAG Accessibility"
    ],
    metrics: {
      DevelopersScreened: "3,000+",
      AnalysisTime: "↓ 75%",
      SupportTickets: "300+",
      HelpfulRatings: "70%"
    },
    location: "Bengaluru, Karnataka, India"
  },
  {
    id: 3,
    company: "Skyflo.ai",
    role: "Open Source Developer",
    logo: "/experience/skyflo_ai_logo.jpg",
    duration: "Dec 2025 - Dec 2025",
    description: [
      "Added a Tokens Per Second metric to the token-usage display, making generation speed visible for every LLM response.",
      "Implemented server-side timing with FastAPI and Server-Sent Events, reducing client-side skew and improving metric accuracy by 99%.",
      "Closed two issues (#72 and #75) in a single pull request, contributing 250+ lines across the frontend and backend through 15+ review cycles."
    ],
    website: "https://skyflo.ai/",
    skills: ["React.js", "FastAPI", "TypeScript", "API Development", "Server-Sent Events (SSE)", "Code Reviews"],
    metrics: { IssuesClosed: "#72, #75", LinesOfCode: "250+", ReviewCycles: "15+" },
    location: "Remote - Chennai, Tamil Nadu, India"
  },
  {
    id: 4,
    company: "IIT Madras (BS in Data Science Programme)",
    role: "Software Developer Intern",
    logo: "/experience/iitm_bs_logo.png",
    duration: "Sept 2025 - Dec 2025",
    description: [
      "Built a Django payments-reconciliation system that automated high-volume transaction validation and reduced fund-tracking errors by 50%.",
      "Improved application performance with AJAX-based asynchronous loading and Google OAuth 2.0 authentication, reducing login failures by 35%.",
      "Automated quality-control workflows to validate 60,000+ data rows with custom Python scripts, reducing manual verification time by 70%."
    ],
    website: "https://study.iitm.ac.in/ds/",
    skills: ["Django", "Python", "Flask", "API Development", "Database Design", "OAuth Integration"],
    metrics: { FundTrackingErrors: "↓ 50%", LoginFailures: "↓ 35%", scale: "60K+", ManualVerification: "↓ 70%" },
    location: "Chennai, Tamil Nadu, India"
  },
  {
    id: 5,
    company: "Centre for Outreach and Digital Education (CODE)",
    role: "Junior Developer Intern",
    logo: "/experience/code_logo.jpeg",
    duration: "Feb 2025 - Apr 2025",
    description: [
      "Designed and built an NPTEL automation tool with Python and Flask to compile lecture PDFs into structured e-books.",
      "Reduced document-processing time from three hours to five minutes, saving 90% of the original workflow time.",
      "Managed feature branches and reviewed pull requests with Git, reducing merge conflicts by 40% and improving collaboration across the team.",
      "Improved code reliability through structured reviews and consistent delivery standards, reducing post-deployment issues and rework."
    ],
    website: "https://code.iitm.ac.in/",
    skills: ["Python", "Flask", "Git", "Automation", "Code Review"],
    metrics: { timeSaved: "90%", conflicts: "-40%", processAutomated: "100%" },
    location: "Chennai, Tamil Nadu, India",
  },
];


export const projectsData = [
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
];


export const ackoladesData = [
  {
    id: 1,
    title: "IITM BS Degree Admission Letter",
    description: "Secured admission to IIT Madras B.Sc. Data Science and Applications program after intensive preparation, demonstrating strong analytical and problem-solving skills during the entrance examination.",
    image: "/accolades/qualifier_cert.png",
    date: "July 2023",
    issuer: "IIT Madras"
  },
  {
    id: 2,
    title: "HackerRank SWE Certificate",
    description: "Certified in solving DSA problems and SQL queries, showcasing algorithmic proficiency and practical coding skills essential for software engineering roles.",
    image: "/accolades/hackerrank_swe.png",
    date: "December 2024",
    issuer: "HackerRank"
  },
  {
    id: 3,
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    description: "Completed the certification with a score of 98% and got to learn about Artificical Intelligence, Machine Learning and understand how OCI can power intelligent solutions.",
    image: "/accolades/oracle cert.png",
    date: "September 2025",
    issuer: "Oracle"
  },
  {
    id: 4,
    title: "Flipkart GRiD 7.0 Semi-finalist",
    description: "Selected as one of the National Semi-Finalists in Flipkart GRiD 7.0, a highly competitive tech challenge with 1.6+ lakh participants across India. Demonstrated strong problem-solving skills in Data Structures, Algorithms, along with the ability to apply logical reasoning and coding expertise to real-world challenges.",
    image: "/accolades/flipkart_grid_cert.png",
    date: "August 2025",
    issuer: "Flipkart"
  },
  {
    id: 5,
    title: "AWS Cloud Practitioner Certification",
    description: "Completed gamified AWS Cloud Practitioner learning, mastering EC2, S3, IAM, RDS, scalability, elasticity, high availability, and shared responsibility model through hands-on exercises.",
    image: "/accolades/aws_cloud_quest.png",
    date: "July 2025",
    issuer: "Amazon Web Services"
  },
  {
    id: 6,
    title: "AWS Cloud Essentials Certification",
    description: "Learned cloud computing fundamentals and AWS global infrastructure, gaining skills in EC2, S3, RDS, scalability, reliability, and secure cloud solution implementation.",
    image: "/accolades/aws_cloud_essen.png",
    date: "June 2025",
    issuer: "Amazon Web Services"
  },
  {
    id: 7,
    title: "CISCO Certification - Networking Basics",
    description: "Completed core networking certification covering topologies, protocols, IP addressing, subnetting, OSI/TCP-IP models, and routing and switching fundamentals.",
    image: "/accolades/cisco_cert.png",
    date: "June 2025",
    issuer: "CISCO Networking Academy"
  },
  {
    id: 8,
    title: "Object Oriented Programming",
    description: "Gained a strong understanding of OOP concepts including encapsulation, inheritance, polymorphism, and abstraction through hands-on problem-solving and real-world implementation using Java. Developed modular and maintainable code by applying object-oriented design principles.",
    image: "/accolades/tuf_oops_cert.png",
    date: "October 2025",
    issuer: "takeUforward"
  },
  {
    id: 9,
    title: "McKinsey Forward Program",
    description: "Enhanced problem-solving, structured thinking, and communication skills through the McKinsey Forward Program, applying strategic and empathetic approaches to deliver impactful solutions.",
    image: "/accolades/mckinsey_cert.png",
    date: "July 2025",
    issuer: "McKinsey & Company"
  },
  {
    id: 10,
    title: "AWS Generative AI Certification",
    description: "Gained foundational knowledge of generative AI, model types, use cases, ethical considerations, and AWS AI workflows, understanding the practical potential of generative models.",
    image: "/accolades/aws_genai.png",
    date: "June 2025",
    issuer: "Amazon Web Services"
  },
  {
    id: 11,
    title: "Postman API Fundamentals",
    description: "Completed hands-on API certification using Postman, learning HTTP methods, status codes, authentication, request structures, and effective API interaction and testing.",
    image: "/accolades/postman_cert.png",
    date: "June 2025",
    issuer: "Postman"
  },
  {
    id: 12,
    title: "Diploma in Programming - IIT Madras",
    description: "Completed IITM Diploma in Programming, mastering modern application development. Topped courses, scored perfect marks in projects, and built strong foundation in programming and software engineering.",
    image: "/accolades/diploma_cert.png",
    date: "December 2024",
    issuer: "IIT Madras"
  },
  {
    id: 13,
    title: "Advanced Certificate (ML & DS) - IIT Madras",
    description: "Achieved IITM Advanced Certificate in Machine Learning and Data Science, mastering ML concepts, techniques. Topped courses, scored perfect marks in projects, and built strong foundation in ML and Data Science.",
    image: "/accolades/advanced_cert.png",
    date: "January 2025",
    issuer: "IIT Madras"
  },
  {
    id: 14,
    title: "Junior Developer Internship - CODE IIT Madras",
    description: "Contributed to EBook Creation System for NPTEL, collaborating with IITM developers, enhancing technical skills, code reviews, and teamwork in a fast-paced, innovation-driven environment.",
    image: "/accolades/code_cert.png",
    date: "April 2025",
    issuer: "CODE IIT Madras"
  },
  {
    id: 15,
    title: "Best Project Award - Modern App Development",
    description: "Received Best Project Award for IESCP V1 project, connecting influencers with sponsors. Strengthened full-stack development, database management, and user-centric application design skills.",
    image: "/accolades/app_dev_badge.png",
    date: "October 2024",
    issuer: "IIT Madras"
  },
  {
    id: 16,
    title: "UI/UX Design Internship - THISUX",
    description: "Gained hands-on experience designing user-centric interfaces, improving accessibility, creating seamless web and mobile experiences, and mastering prototyping, design systems, and usability testing.",
    image: "/accolades/uiux_cert.jpg",
    date: "October 2024",
    issuer: "THISUX"
  },
  {
    id: 17,
    title: "Applied Vibe Coding Workshop by (Prof. S. Anand)",
    description: "Gained hands-on experience utilizing cutting-edge AI agentic models (GitHub Copilot, Codex, Replit, Jules AI, Claude) to build applications, mastering techniques that significantly accelerate development and testing workflows.",
    image: "/accolades/vibe_coding.png",
    date: "November 2025",
    issuer: "CODE IIT Madras"
  },
  {
    id: 18,
    title: "IITM BS Degree - Foundation Certificate",
    description: "Completed foundation level of IITM BS Degree, building strong knowledge in Data Science core concepts and learning from top Indian professors.",
    image: "/accolades/foundation_cert.png",
    date: "December 2023",
    issuer: "IIT Madras"
  },
  {
    id: 19,
    title: "IITM BS Degree - Honors",
    description: "Earned top-rank badges for excellence in multiple courses and completing all assignments, reflecting dedication, consistency, and academic excellence.",
    image: "/accolades/iit_badges.png",
    date: "January 2025",
    issuer: "IIT Madras"
  },
  {
    id: 20,
    title: "NPTEL Design Thinking - Elite Silver Medal",
    description: "Completed NPTEL Design Thinking course, learning problem-solving frameworks and solution-generation techniques, achieving top 5% ranking with Elite Silver Medal.",
    image: "/accolades/dt_cert.png",
    date: "March 2023",
    issuer: "NPTEL"
  },
  {
    id: 21,
    title: "HackerRank Java Certificate",
    description: "Certified in Java programming by solving logical problems, demonstrating practical coding skills and problem-solving proficiency.",
    image: "/accolades/hackerrank_java.png",
    date: "December 2024",
    issuer: "HackerRank"
  },
  {
    id: 22,
    title: "TCS Virtual Experience Program",
    description: "Completed TCS virtual experience program, learning client engagement, requirement analysis, and effective problem-solving in a professional setting.",
    image: "/accolades/tcs_exp.png",
    date: "April 2023",
    issuer: "TCS"
  },
  {
    id: 23,
    title: "NPTEL Introduction to Research",
    description: "Completed NPTEL research course, learning formal research methodology, overcoming misconceptions, and gaining strong analytical and problem-solving research skills.",
    image: "/accolades/itr_cert.png",
    date: "April 2023",
    issuer: "NPTEL"
  },
  {
    id: 24,
    title: "HackerRank SQL Certificate",
    description: "Certified in SQL query writing and optimization, showcasing proficiency in database management and practical problem-solving skills.",
    image: "/accolades/hackerrank_sql.png",
    date: "February 2024",
    issuer: "HackerRank"
  },
  {
    id: 25,
    title: "NPTEL+ SQL Workshop",
    description: "Completed two-day SQL workshop on cricket data analysis using PostgreSQL, learning dataset extraction, data analysis, and hands-on database manipulation.",
    image: "/accolades/sql_workshop.png",
    date: "February 2024",
    issuer: "NPTEL+"
  },
  {
    id: 26,
    title: "Paradox Margazhi - Python Coding Challenge",
    description: "Participated in Python coding competition, solving 4 of 5 problems, enhancing coding proficiency and collaborating with peers in a competitive environment.",
    image: "/accolades/python_margazhi.png",
    date: "December 2023",
    issuer: "IIT Madras"
  }
];



export const blogPosts = [
  {
    id: "prompt-caching",
    title: "Prompt Caching - One of the Most Important Optimizations in Modern AI",
    excerpt:
      "Have you ever noticed something strange while using AI tools like ChatGPT or Claude? Sometimes the AI responds almost instantly, even when the conversation is huge. Modern AI systems use a powerful optimization called Prompt Caching — and it's one of the key reasons AI products today can actually scale.",
    thumbnail:
      "https://cdn-images-1.medium.com/max/1024/1*CAqJTtQ5dKeov3FgPqqfQA.png",
    url: "https://medium.com/@mahadevan122005/prompt-caching-one-of-the-most-important-optimizations-in-modern-ai-9ac51cfa2886",
    date: "May 16, 2026",
    readTime: "3 min read",
    primaryCategory: "AI & ML",
    tags: ["Artificial Intelligence", "System Design", "Software Engineering"],
    isLatest: true,
  },
  {
    id: "dns-systems",
    title: "DNS → The Silent System That Powers Every Website You Visit",
    excerpt:
      "Every time you type a URL into your browser, a fascinating chain of events happens in milliseconds. DNS is like a translator between humans and machines — converting domain names into the IP addresses that computers actually use to find each other on the internet.",
    thumbnail:
      "https://cdn-images-1.medium.com/max/1024/1*aQwRNjfHfMK4Af0Qh85uqQ.png",
    url: "https://medium.com/@mahadevan122005/dns-the-silent-system-that-powers-every-website-you-visit-76c93073fa8b",
    date: "May 3, 2026",
    readTime: "2 min read",
    primaryCategory: "Networking",
    tags: ["Networking", "Web Development", "System Design"],
  },
];


export const educationData = [
  {
    id: 1,
    degree: "B.E Computer Science and Engineering",
    institution: "Prince Shri Venkateshwara Padmavathy Engineering College",
    location: "Chennai, TamilNadu, India",
    duration: "2022 - 2026",
    description:
      "Pursuing Bachelor's in Computer Science and Engineering, with a strong focus on becoming a thoughtful and skilled software developer.",
    achievements: [
      "CGPA - 9.48/10 (Rank 1 in the Department)",
      "General Proficiency Award – 2 Consecutive Years, awarded for overall academic and extracurricular excellence.",
      "Completed LEAP Program – gained hands-on experience in IIT-style product-driven projects and real-world problem solving in multidisciplinary teams.",
      "Winner & Participant in Inter-College Speech Competitions – developed communication and presentation skills.",
      "Idea Approved by YUKTI Hackathon Committee – selected among top projects for innovation and feasibility.",
      "Relevant Courses: Data Structures & Algorithms, AI & ML, Operating Systems, Computer Networks, Database Management Systems, Software Testing",
    ],
  },
  {
    id: 2,
    degree: "B.S Data Science and Applications",
    institution: "Indian Institute of Technology Madras",
    location: "Chennai, TamilNadu, India",
    duration: "2023 - 2026",
    description:
      "Studying Data Science, curious about programming, how data reveals patterns, and how it can be used to solve problems in many areas.",
    achievements: [
      "CGPA - 8.29/10",
      "Best Capstone Project Award – recognized for excellence in app development.",
      "Completed Foundation Level – established strong basics in mathematics and statistics for data science.",
      "Completed Diploma in Programming Level – gained hands-on experience in app development (Vue.js, Flask, SQL), Java programming, Linux (bash), and database management.",
      "Top 5% Ranking – achieved in DBMS, Statistics, System Commands, and Modern App Development (MAD-1) courses.",
      "Relevant Courses: Statistics, Mathematics, Python, Linux, Java, Modern App Development, DSA, DBMS, ML Foundations, ML Techniques, Tools in Data Science",
    ],
  },
];


export const thoughts = [
  {
    id: "becoming",
    category: "growth",
    text: "Becoming Over Achieving!",
    date: "Apr 4, 2026",
    color: "bg-emerald-300",
  },
  {
    id: "miracles",
    category: "miracles",
    text: "Miracles Do Happen - Trust the Timing!",
    date: "Nov 29, 2025",
    color: "bg-indigo-300",
  },
  {
    id: "learning",
    category: "learning",
    text: "Learning Never Stops - Beyond Academics!",
    date: "Oct 6, 2025",
    color: "bg-yellow-300",
  },
];


export const thoughtDetails = {
  learning: {
    title: "Learning Never Stops - Beyond Academics!",
    text: `
        <p>This is the first time I’m writing something like this, and I wanted to begin with something that has truly helped me grow to where I am today - while I continue learning, improving, and evolving.</p>
        <br>
        <p>Learning isn’t limited to books, lectures, or grades. Real growth comes from <strong>observing, experimenting, and reflecting</strong> on your experiences.</p>
        <br>
        <p>For me, personal growth means developing control over <strong>myself - my thoughts, actions, and reactions</strong> rather than letting external circumstances dictate them. It’s about learning how to navigate life, not just memorizing facts. True learning also shows when you can absorb positivity and share it with others. <em>(I still work on this, which is why I’m writing these thoughts.)</em></p>
        <br>
        <p>As my mother always says, don’t be concerned with the age or background of the person you learn from - if it can help you grow, embrace it. Focus on the lesson, not the source.</p>
        <br>
        <p>Finally, one of the most humbling lessons I’ve realized is that <strong>the more you learn, the more you understand how much there is still to learn</strong>. Each experience and observation opens new questions and opportunities to grow. Learning never truly stops, it’s a lifelong journey, and embracing that mindset turns every day into a chance to improve.</p>
        <br>
        <p>Here’s to embracing every lesson along the way,<br>Mahadevan M</p>
    `,
    date: "Oct 06, 2025",
    color: "bg-yellow-300",
    read_time: "3 min read",
  },

  miracles: {
    title: "Miracles Do Happen - Trust the Timing!",
    text: `
        <p>Life has an interesting way of teaching us lessons. Sometimes it does so gently, and sometimes it tests us to the point where we begin questioning everything - our efforts, our dreams, and even ourselves. My journey over the past few months has been exactly that: a long stretch of hope, disappointment, patience, and silent faith.</p>
        <br>
        <p>I went through a phase where rejections became a routine. Every application I sent out carried a spark of hope, yet many replies came back with the same familiar line: <em>“We regret to inform you…”</em> At first, I told myself that rejection was normal. But as they kept coming, one after another, they quietly started affecting me.</p>
        <br>
        <p>There were days when opening my inbox felt like picking up emotional weight. A small part of me wondered if I was not good enough, or if all the learning, projects, sleepless nights, and efforts were truly worth anything. </p>
        <br>
        <img src="/thoughts/miracle_thoughts_img1.png" alt="Rejection Email's" class="mx-auto my-4 rounded shadow-lg" />
        <br>
        <p>During this phase, only three people truly knew what I was going through. They saw the versions of me that others didn’t - the frustration, the silence, the self-doubt. And yet, they supported me without question. Their belief in me, especially when my own belief was shaking, kept me grounded. Their presence made the journey bearable.</p>
        <br>
        <p>But here’s the part I’m grateful for: even on the difficult days, something inside me refused to stop. I kept learning. I kept improving. I kept building. And most importantly, I kept believing - not blindly, but with the quiet conviction that <strong>growth always meets effort at some point.</strong></p>
        <br>
        <p>People often assume miracles are sudden. But sometimes, miracles are the result of all the unnoticed work you’ve been doing in the dark. Every rejection was shaping me, correcting me, preparing me. I didn’t realize it then, but looking back, every “no” was pushing me toward the right “yes.”</p>
        <br>
        <p>And then, it happened.</p>
        <br>
        <p>After months of waiting, applying, failing, and restarting, I got an opportunity that still feels unreal when I think about it - an internship at <strong>HackerRank</strong>. A place I admired. A platform I used to practice. A company I once thought was far beyond my reach.</p>
        <br>
        <br>
        <img src="/thoughts/miracle_thoughts_img2.png" alt="Selection Email" class="mx-auto my-4 rounded shadow-lg" />
        <br>
        <p>When I received the email, I didn’t celebrate immediately. I just sat there for a moment, silent, letting everything sink in. All the rejections. All the doubts. All the nights spent learning something new just to feel a little better about myself. In that moment, it finally made sense.</p>
        <br>
        <p><strong>Miracles do happen - just not when we expect them.</strong> They happen when life has made sure you’re prepared. They happen when you’ve grown enough to deserve them. They happen when you’ve learned the lessons needed to receive them with gratitude rather than arrogance.</p>
        <br>
        <p>This experience taught me one powerful lesson: rejection is not a wall; it’s a mirror. It reflects what you need to work on, what you need to improve, and sometimes, it simply tells you that the timing isn’t right yet. But never does it tell you to stop trying.</p>
        <br>
        <p>Stay patient. Stay consistent. And most importantly, stay kind to yourself during the journey. Not every day will feel productive, and not every effort will be rewarded immediately. But everything you’re doing is taking you one step closer to the moment when your life will shift in ways you never imagined.</p>
        <br>
        <p>Because miracles do happen. And often, they happen right after you’ve convinced yourself they won’t.</p>
        <br>
        <p>With gratitude,<br>Mahadevan M</p>
    `,
    date: "Nov 29, 2025",
    color: "bg-indigo-300",
    read_time: "5 min read",
  },
  becoming: {
    title: "Becoming Over Achieving!",
    text: `
        <p>For a long time, I thought life was about achieving things - good grades, strong projects, and opportunities I once felt were out of reach.</p>

        <p class="mt-4">And for a while, that belief worked. It kept me moving.</p>

        <p class="mt-4">But somewhere along the way, I noticed something subtle.</p>

        <p class="mt-4">Every time I reached a milestone, the feeling didn’t last as long as I expected. The excitement faded, and I found myself chasing the next thing again. It felt like progress, but also like a loop.</p>

        <p class="mt-4">That’s when it started to change for me.</p>

        <p class="mt-4">Interestingly, it was during these past few months that this shift became clear to me.</p>

        <img src="/thoughts/becoming.png" alt="Focused work moment" class="mx-auto my-6 rounded-xl shadow-md" />

        <p class="mt-4">I realized that what truly stayed wasn’t the achievement - it was <strong>who I was becoming in the process.</strong></p>

        <p class="mt-4">
        The quiet moments of showing up consistently.<br>
        The effort you put in, even when no one notices.<br>
        The small decisions that shape you over time.
        </p>

        <p class="mt-4">That’s what changed me.</p>

        <p class="mt-4">The experience shaped my perspective.<br>
        The uncertainty taught me to trust myself a little more each time.</p>

        <p class="mt-4">None of these show up on a resume. But they quietly change how you think, how you act, and how you handle life.</p>

        <p class="mt-4"><strong>Achievements are visible. Becoming is not.</strong><br>
        But becoming is what makes achievements meaningful.</p>

        <p class="mt-4">Today, I still set goals. I still work towards them.</p>

        <p class="mt-4">But I no longer measure growth only by what I achieve.<br>
        I measure it by who I am becoming along the way.</p>

        <p class="mt-6 font-semibold">Because in the end, achievements come and go.</p>

        <p class="font-bold mt-2 text-lg">But the person you become stays.</p>

        <p class="mt-6">- Mahadevan M</p>
    `,
    date: "Apr 4, 2026",
    color: "bg-emerald-300",
    read_time: "2 min read",
  },
};
