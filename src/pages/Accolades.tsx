import SectionHeading from '../components/SectionHeading';
import AckoladeCard, { AckoladeProps } from '../components/Accolades/AckoladeCard';
import { motion } from 'framer-motion';

// Replace with your actual ackolades data
const ackoladesData: AckoladeProps[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    description: "Professional certification validating expertise in designing distributed systems on AWS.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "September 2023",
    issuer: "Amazon Web Services"
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    description: "Advanced certification demonstrating ability to build scalable applications on Google Cloud Platform.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "July 2023",
    issuer: "Google Cloud"
  },
  {
    id: 3,
    title: "React Advanced Certification",
    description: "Comprehensive certification covering advanced React concepts and best practices.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "May 2023",
    issuer: "Frontend Masters"
  },
  {
    id: 4,
    title: "Hackathon Winner",
    description: "First place in a 48-hour hackathon for developing an innovative solution for remote education.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 2023",
    issuer: "TechCrunch Disrupt"
  },
  {
    id: 5,
    title: "Microsoft Certified: Azure Developer Associate",
    description: "Certification validating skills in developing solutions for Microsoft Azure.",
    image: "https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "January 2023",
    issuer: "Microsoft"
  },
  {
    id: 6,
    title: "Distinguished Speaker Award",
    description: "Recognition for outstanding presentation at the Annual Web Development Conference.",
    image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "November 2022",
    issuer: "WebDev Summit"
  }
];

const Accolades = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Accolades & Achievements" 
            subtitle="A collection of my certifications, awards, and accomplishments"
          />
        </motion.div>
        
        {/* Ackolades Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ackoladesData.map((ackolade, index) => (
            <AckoladeCard key={ackolade.id} ackolade={ackolade} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Accolades;