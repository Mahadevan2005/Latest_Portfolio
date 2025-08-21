const skillsLogos = [
  // 🟢 Programming Languages
  { name: "Java", src: "/skills/java.svg" },
  { name: "Python", src: "/skills/python.svg" },
  { name: "TypeScript", src: "/skills/typescript.svg" },
  { name: "JavaScript", src: "/skills/js.svg" },
  { name: "Bash", src: "/skills/bash.svg" },

  // 🎨 Frontend
  { name: "HTML", src: "/skills/html.svg" },
  { name: "CSS", src: "/skills/css.svg" },
  { name: "Tailwind", src: "/skills/tailwind.svg" },
  { name: "React", src: "/skills/react.svg" },
  { name: "Vue.js", src: "/skills/vue.svg" },

  // ⚙️ Backend / Frameworks
  { name: "Django", src: "/skills/django.svg" },
  { name: "FastAPI", src: "/skills/fastapi.svg" },
  { name: "SpringBoot", src: "/skills/springboot.svg" },

  // 🗄 Databases & Caching
  { name: "MySQL", src: "/skills/mysql.svg" },
  { name: "PostgreSQL", src: "/skills/postgresql.svg" },
  { name: "Redis", src: "/skills/redis.svg" },

  // ☁️ Cloud / DevOps
  { name: "AWS", src: "/skills/aws.svg" },
  { name: "Linux", src: "/skills/linux.svg" },
  { name: "Git", src: "/skills/git.svg" },

  // 🛠 Tools
  { name: "Postman", src: "/skills/postman.svg" },
  { name: "Salesforce", src: "/skills/salesforce.svg" },

  // 🎨 Design
  { name: "Figma", src: "/skills/figma.svg" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden"
    >
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-blue-400">
          Tech Skills & Tools
        </h2>
        <p className="text-center text-gray-600 dark:text-cyan-300 mb-8 max-w-2xl mx-auto text-lg">
          These are the core technologies and tools I work with to build
          scalable, performant, and visually appealing applications.
        </p>

        {/* Scoped marquee wrapper */}
        <div className="skills-marquee relative w-full overflow-hidden py-8">
          <div
            className="flex gap-6 items-center animate-marquee"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            {[...skillsLogos, ...skillsLogos].map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center animate-slow">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain flex-shrink-0 transform transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl"
                />
                <span className="mt-2 text-sm md:text-base text-gray-600 dark:text-yellow-100 font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        /* ✅ Scoped gradient overlay ONLY to skills marquee */
        .skills-marquee::before,
        .skills-marquee::after {
          content: "";
          position: absolute;
          top: 0;
          width: 6%;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }
        .skills-marquee::before {
          left: 0;
          background: linear-gradient(to right, white 0%, transparent 100%);
        }
        .skills-marquee::after {
          right: 0;
          background: linear-gradient(to left, white 0%, transparent 100%);
        }
        .dark .skills-marquee::before {
          background: linear-gradient(to right, #111827 0%, transparent 100%);
        }
        .dark .skills-marquee::after {
          background: linear-gradient(to left, #111827 0%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
