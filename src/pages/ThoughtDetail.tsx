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

  miracles: {
    title: "Miracles Do Happen - Trust the Timing!",
    text: `
        <p>Life has an interesting way of teaching us lessons. Sometimes it does so gently, and sometimes it tests us to the point where we begin questioning everything — our efforts, our dreams, and even ourselves. My journey over the past few months has been exactly that: a long stretch of hope, disappointment, patience, and silent faith.</p>
        <br>
        <p>I went through a phase where rejections became a routine. Every application I sent out carried a spark of hope, yet many replies came back with the same familiar line: <em>“We regret to inform you…”</em> At first, I told myself that rejection was normal. But as they kept coming, one after another, they quietly started affecting me.</p>
        <br>
        <p>There were days when opening my inbox felt like picking up emotional weight. A small part of me wondered if I was not good enough, or if all the learning, projects, sleepless nights, and efforts were truly worth anything. </p>
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
        <p>When I received the email, I didn’t celebrate immediately. I just sat there for a moment, silent, letting everything sink in. All the rejections. All the doubts. All the nights spent learning something new just to feel a little better about myself. In that moment, it finally made sense.</p>
        <br>
        <p><strong>Miracles do happen - just not when we expect them.</strong> They happen when life has made sure you’re prepared. They happen when you’ve grown enough to deserve them. They happen when you’ve learned the lessons needed to receive them with gratitude rather than arrogance.</p>
        <br>
        <p>This experience taught me one powerful lesson: rejection is not a wall; it’s a mirror. It reflects what you need to work on, what you need to improve, and sometimes, it simply tells you that the timing isn’t right yet. But never does it tell you to stop trying.</p>
        <br>
        <p>If you’re reading this and going through a difficult phase — whether in your career, studies, or personal life — I want you to know this: your breakthrough is growing in the background. Just because you can’t see progress doesn’t mean it’s not happening.</p>
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
