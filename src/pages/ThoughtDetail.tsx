import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Share2 } from "lucide-react";

const thoughts = {
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
};

const ThoughtDetail = () => {
  const { id } = useParams();
  const thought = thoughts[id as keyof typeof thoughts];
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Could not copy the link.");
    }
  };

  if (!thought) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Thought not found
      </div>
    );
  }

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center ${thought.color} px-6 py-20`}
    >
      <div className="max-w-3xl w-full text-black">
        <h1 className="mb-3 text-5xl font-bold">{thought.title}</h1>
        <p className="text-sm font-semibold mb-5 mt-5">
          {thought.date} • {thought.read_time}
        </p>

        <div
          className="max-w-3xl w-full text-black prose prose-sm sm:prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: thought.text }}
        ></div>

        {/* Share Section */}
        <div className="flex justify-end items-center mt-10 border-t pt-5">
          <div className="relative">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Share2 size={20} />
              <span className="text-base font-medium">Share</span>
            </button>
            {copied && (
              <span className="absolute -top-8 right-0 bg-black text-white text-xs px-1 py-1 rounded-md shadow-md">
                Link Copied ✓
              </span>
            )}
          </div>
        </div>
      </div>

      <Link
        to="/thoughts"
        className="mt-10 text-black underline font-semibold hover:text-black/70 transition"
      >
        ← Back to Thoughts
      </Link>
    </section>
  );
};

export default ThoughtDetail;
