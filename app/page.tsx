"use client";

import Link from "next/link";

import { useState } from "react";


export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white">



      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-6xl font-bold mb-6">
          Welcome to MathNova
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          Learn mathematics with interactive quizzes,
          smart dashboards, and modern learning tools.
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg transition">
          Get Started
        </button>

      </section>

      {/* FEATURE CARDS */}
      <section className="px-10 py-24">

        <h2 className="text-4xl font-bold text-center mb-16">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition">

            <h3 className="text-2xl font-semibold mb-4">
              Interactive Quizzes
            </h3>

            <p className="text-slate-300">
              Practice mathematics using modern quiz systems
              with instant feedback and scoring.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition">

            <h3 className="text-2xl font-semibold mb-4">
              Smart Dashboard
            </h3>

            <p className="text-slate-300">
              Track progress, performance, and learning history
              through a modern analytics dashboard.
            </p>

          </div>

          {/* CARD 3 */}
          <Link href="/video-lessons">

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition">

              <h3 className="text-2xl font-semibold mb-4">
                Video Lessons
              </h3>

              <p className="text-slate-300">
                Learn concepts visually with organized lesson
                videos and structured learning paths.
              </p>

            </div>
          </Link>

        </div>

      </section>

    </main>
  );
}