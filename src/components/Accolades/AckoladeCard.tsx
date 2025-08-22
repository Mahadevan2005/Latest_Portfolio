import { useState } from 'react';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="relative flex flex-col overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-56 border-b rounded-t-3xl">
          <img
            src={ackolade.image}
            alt={ackolade.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 bg-white/60 dark:bg-gray-700/60 px-3 py-1 text-xs font-semibold rounded-tl-md backdrop-blur-sm border border-white/20 dark:border-gray-600 flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {ackolade.date}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <Award className="h-5 w-5 text-amber-500 dark:text-amber-300" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-amber-200">{ackolade.title}</h3>
          </div>
          {ackolade.issuer && <p className="text-sm mb-3 text-gray-600 dark:text-amber-300">Issued by: {ackolade.issuer}</p>}
          <p className="text-gray-700 dark:text-stone-200 mb-4">{ackolade.description}</p>

          <button
            onClick={() => setShowFullImage(true)}
            className="mt-auto w-full py-2 text-sm font-medium flex items-center justify-center gap-2 border border-amber-500 text-gray-900 dark:text-amber-200 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-700 transition-all"
          >
            <ExternalLink className="w-4 h-4" /> View Certificate
          </button>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {showFullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setShowFullImage(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={ackolade.image} alt={ackolade.title} className="w-full h-auto rounded-2xl" />
              <button
                onClick={() => setShowFullImage(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AckoladeCard;
