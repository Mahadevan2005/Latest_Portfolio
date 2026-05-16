import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMedium } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import BlogCard, { BlogPost } from "../components/Blogs/BlogCard";

const blogPosts: BlogPost[] = [
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

const ALL = "All";
const categories = [ALL, "AI & ML", "System Design", "Networking", "Web Dev"];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === ALL) return blogPosts;
    return blogPosts.filter(
      (b) =>
        b.primaryCategory === activeCategory ||
        b.tags.some((t) =>
          t.toLowerCase().includes(activeCategory.toLowerCase())
        )
    );
  }, [activeCategory]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-cyan-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 px-4">

      {/* Grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h2 className="mb-2">
              <span className="inline-block">Blogs</span>
              <div className="w-20 h-1 bg-primary mt-2" />
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Exploring systems, AI, and software craft.
            </p>
          </div>

          <motion.a
            href="https://medium.com/@mahadevan122005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 rounded-full
              bg-gray-100 dark:bg-gray-800/80
              text-gray-600 dark:text-gray-300
              border border-gray-200 dark:border-gray-700
              text-sm font-medium flex-shrink-0
              hover:bg-gray-200 dark:hover:bg-gray-700/80
              hover:text-gray-800 dark:hover:text-gray-100
              transition-all duration-200"
          >
            <FaMedium className="h-4 w-4" />
            Follow on Medium
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </motion.a>
        </motion.div>

        {/* ── Category filter ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-2.5 mb-10"
          role="tablist"
          aria-label="Filter by category"
        >
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${
                    active
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ── Blog grid ───────────────────────────────── */}
        <AnimatePresence mode="wait">
          {filteredBlogs.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8"
            >
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-24 text-center gap-3"
            >
              <span className="text-4xl">✍️</span>
              <p className="text-lg font-semibold text-foreground">
                Nothing here yet
              </p>
              <p className="text-sm text-muted-foreground max-w-xs">
                No articles in this category — but more are on the way!
              </p>
              <button
                onClick={() => setActiveCategory(ALL)}
                className="mt-2 text-sm text-primary font-semibold hover:underline"
              >
                View all articles
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom CTA ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 flex flex-col items-center text-center gap-4"
        >
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-muted-foreground text-sm">
            More articles are brewing, follow along so you don't miss them.
          </p>
          <motion.a
            href="https://medium.com/@mahadevan122005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
              border border-gray-200 dark:border-gray-700
              text-sm font-medium text-gray-500 dark:text-gray-400
              hover:border-gray-400 dark:hover:border-gray-500
              hover:text-gray-800 dark:hover:text-gray-200
              transition-all duration-200"
          >
            <FaMedium className="h-4 w-4" />
            Read all stories on Medium
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
