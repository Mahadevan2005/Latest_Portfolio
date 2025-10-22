import SectionHeading from '../components/SectionHeading';
import AckoladeCard, { AckoladeProps } from '../components/Accolades/AckoladeCard';
import { motion } from 'framer-motion';

// Replace with your actual ackolades data
const ackoladesData: AckoladeProps[] = [
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
    title: "Junior Developer Internship - CODE IIT Madras",
    description: "Contributed to EBook Creation System for NPTEL, collaborating with IITM developers, enhancing technical skills, code reviews, and teamwork in a fast-paced, innovation-driven environment.",
    image: "/accolades/code_cert.png",
    date: "April 2025",
    issuer: "CODE IIT Madras"
  },
  {
    id: 14,
    title: "Best Project Award - Modern App Development",
    description: "Received Best Project Award for IESCP V1 project, connecting influencers with sponsors. Strengthened full-stack development, database management, and user-centric application design skills.",
    image: "/accolades/app_dev_badge.png",
    date: "October 2024",
    issuer: "IIT Madras"
  },
  {
    id: 15,
    title: "UI/UX Design Internship - THISUX",
    description: "Gained hands-on experience designing user-centric interfaces, improving accessibility, creating seamless web and mobile experiences, and mastering prototyping, design systems, and usability testing.",
    image: "/accolades/uiux_cert.jpg",
    date: "October 2024",
    issuer: "THISUX"
  },
  {
    id: 16,
    title: "IITM BS Degree - Foundation Certificate",
    description: "Completed foundation level of IITM BS Degree, building strong knowledge in Data Science core concepts and learning from top Indian professors.",
    image: "/accolades/foundation_cert.png",
    date: "December 2023",
    issuer: "IIT Madras"
  },
  {
    id: 17,
    title: "IITM BS Degree - Honors",
    description: "Earned top-rank badges for excellence in multiple courses and completing all assignments, reflecting dedication, consistency, and academic excellence.",
    image: "/accolades/iit_badges.png",
    date: "January 2025",
    issuer: "IIT Madras"
  },
  {
    id: 18,
    title: "NPTEL Design Thinking - Elite Silver Medal",
    description: "Completed NPTEL Design Thinking course, learning problem-solving frameworks and solution-generation techniques, achieving top 5% ranking with Elite Silver Medal.",
    image: "/accolades/dt_cert.png",
    date: "March 2023",
    issuer: "NPTEL"
  },
  {
    id: 19,
    title: "HackerRank Java Certificate",
    description: "Certified in Java programming by solving logical problems, demonstrating practical coding skills and problem-solving proficiency.",
    image: "/accolades/hackerrank_java.png",
    date: "December 2024",
    issuer: "HackerRank"
  },
  {
    id: 20,
    title: "TCS Virtual Experience Program",
    description: "Completed TCS virtual experience program, learning client engagement, requirement analysis, and effective problem-solving in a professional setting.",
    image: "/accolades/tcs_exp.png",
    date: "April 2023",
    issuer: "TCS"
  },
  {
    id: 21,
    title: "NPTEL Introduction to Research",
    description: "Completed NPTEL research course, learning formal research methodology, overcoming misconceptions, and gaining strong analytical and problem-solving research skills.",
    image: "/accolades/itr_cert.png",
    date: "April 2023",
    issuer: "NPTEL"
  },
  {
    id: 22,
    title: "HackerRank SQL Certificate",
    description: "Certified in SQL query writing and optimization, showcasing proficiency in database management and practical problem-solving skills.",
    image: "/accolades/hackerrank_sql.png",
    date: "February 2024",
    issuer: "HackerRank"
  },
  {
    id: 23,
    title: "NPTEL+ SQL Workshop",
    description: "Completed two-day SQL workshop on cricket data analysis using PostgreSQL, learning dataset extraction, data analysis, and hands-on database manipulation.",
    image: "/accolades/sql_workshop.png",
    date: "February 2024",
    issuer: "NPTEL+"
  },
  {
    id: 24,
    title: "Paradox Margazhi - Python Coding Challenge",
    description: "Participated in Python coding competition, solving 4 of 5 problems, enhancing coding proficiency and collaborating with peers in a competitive environment.",
    image: "/accolades/python_margazhi.png",
    date: "December 2023",
    issuer: "IIT Madras"
  }
];


const Accolades = () => {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading 
            title="Accolades" 
            subtitle="A curated collection of my certifications, awards, and accomplishments" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {ackoladesData.map((ackolade, index) => (
            <AckoladeCard key={ackolade.id} ackolade={ackolade} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Accolades;