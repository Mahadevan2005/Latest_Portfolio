import { ArrowDown } from 'lucide-react'; 
import { motion } from 'framer-motion'; 
const Hero = () => { 
  return ( 
    <section className="min-h-[calc(100vh-5rem)] flex items-center py-16 relative overflow-hidden"> 
      <div className="container-custom"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} > 
            <h1 className="mb-4"> <span className="text-primary">Mahadevan</span> </h1> 
              <h2 className="mb-6 font-normal text-xl sm:text-2xl text-muted-foreground"> Turning Ideas into Code | Problem Solver | Web Dev | DSA & ML Enthusiast | Tech Tinkerer </h2> {/* <p className="mb-8 text-lg max-w-2xl"> I'm a passionate software engineer specializing in building beautiful, functional, and user-friendly applications that solve real-world problems. </p> */} 
                <div className="flex flex-col sm:flex-row gap-4"> <a href="#about" className="btn btn-primary"> Learn More </a> <a href="#contact" className="btn btn-outline"> Get in Touch </a> </div> 
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative lg:h-[500px] flex items-center justify-center" > {/* This should be replaced with your hero image */} 
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center"> 
              <div className="text-center p-8"> 
                <p className="text-lg font-medium mb-4">Your Profile Image Here</p> 
                <p className="text-sm text-muted-foreground">Replace this with your profile image or custom hero graphic</p> 
              </div> 
            </div> 
          </motion.div> 
        </div> 
      </div> 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"> 
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} > <a href="#about" className="text-muted-foreground hover:text-primary transition-colors"> 
          <ArrowDown className="h-8 w-8" /> </a> 
        </motion.div> 
      </div> 
    </section> 
  ); 
}; 

export default Hero;