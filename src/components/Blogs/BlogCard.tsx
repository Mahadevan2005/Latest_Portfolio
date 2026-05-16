import { motion } from "framer-motion";
import { ExternalLink, Clock, Calendar, ArrowUpRight } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  url: string;
  date: string;
  readTime: string;
  primaryCategory: string;
  tags: string[];
  isLatest?: boolean;
}

interface BlogCardProps {
  blog: BlogPost;
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden
        border border-gray-200/80 dark:border-gray-700/50
        bg-white dark:bg-gray-900/70
        shadow-md hover:shadow-2xl dark:hover:shadow-primary/10
        transition-all duration-300"
    >
      {/* Thumbnail */}
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden"
        style={{ aspectRatio: "16 / 9" }}
        aria-label={`Read "${blog.title}" on Medium`}
      >
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Latest badge */}
        {blog.isLatest && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-full
            bg-amber-400 text-gray-900 shadow-sm tracking-wide animate-breathe">
            Latest
          </span>
        )}

        {/* Read time chip */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1
          rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
          <Clock className="h-3 w-3" />
          {blog.readTime}
        </div>

        {/* Corner arrow — appears on hover */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100
          transition-opacity duration-300">
          <div className="flex items-center gap-1 text-white/90 text-xs font-semibold">
            <ArrowUpRight className="h-4 w-4" />
            Open on Medium
          </div>
        </div>
      </a>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {blog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-2"
        >
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white
            leading-snug group-hover:text-primary dark:group-hover:text-primary
            transition-colors duration-200">
            {blog.title}
          </h3>
        </a>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
          line-clamp-2 flex-1 mb-5">
          {blog.excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4
          border-t border-gray-100 dark:border-gray-700/50">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Calendar className="h-3.5 w-3.5" />
            <span>{blog.date}</span>
          </div>

          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium
              text-gray-400 dark:text-gray-500
              hover:text-gray-700 dark:hover:text-gray-300
              transition-colors"
          >
            Read on Medium
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Animated bottom gradient border on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full
        bg-gradient-to-r from-primary via-secondary to-accent
        transition-all duration-500 ease-in-out" />
    </motion.article>
  );
};

export default BlogCard;
