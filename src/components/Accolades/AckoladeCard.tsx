import { useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AckoladeProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  issuer?: string;
}

interface AckoladeCardProps {
  ackolade: AckoladeProps;
  index: number;
}

const AckoladeCard = ({ ackolade, index }: AckoladeCardProps) => {
  const [showFullImage, setShowFullImage] = useState(false);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="card overflow-hidden h-full flex flex-col hover:shadow-md transition-all duration-300"
      >
        <div className="relative overflow-hidden h-48 sm:h-56 border-b">
          <img 
            src={ackolade.image} 
            alt={ackolade.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-card/90 px-3 py-1 text-xs font-medium rounded-tl-md backdrop-blur-sm border-l border-t flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {ackolade.date}
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex-grow">
            <div className="flex items-start gap-3 mb-3">
              <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <h3 className="text-xl font-medium">{ackolade.title}</h3>
            </div>
            
            {ackolade.issuer && (
              <p className="text-sm text-muted-foreground mb-3">
                Issued by: {ackolade.issuer}
              </p>
            )}
            
            <p className="text-muted-foreground mb-4">{ackolade.description}</p>
          </div>
          
          <button
            onClick={() => setShowFullImage(true)}
            className="btn btn-outline w-full text-sm flex items-center justify-center gap-1"
            aria-label={`View full certificate for ${ackolade.title}`}
          >
            <ExternalLink className="h-4 w-4" />
            View Full Image
          </button>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {showFullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowFullImage(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-auto bg-card rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={ackolade.image} 
                alt={ackolade.title}
                className="w-full h-auto"
              />
              <button
                onClick={() => setShowFullImage(false)}
                className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AckoladeCard;