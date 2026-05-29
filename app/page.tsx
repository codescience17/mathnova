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
          Welcome to Math-Nova
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
      {/* QUICK STATS */}
      <section className="px-6 md:px-12 py-16">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Your Learning Progress
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-cyan-500/20 border border-cyan-500/20 p-8 rounded-2xl">

              <h3 className="text-5xl font-bold mb-4">
                12
              </h3>

              <p className="text-slate-300 text-lg">
                Lessons Completed
              </p>

            </div>

            <div className="bg-purple-500/20 border border-purple-500/20 p-8 rounded-2xl">

              <h3 className="text-5xl font-bold mb-4">
                4
              </h3>

              <p className="text-slate-300 text-lg">
                Active Courses
              </p>

            </div>

            <div className="bg-green-500/20 border border-green-500/20 p-8 rounded-2xl">

              <h3 className="text-5xl font-bold mb-4">
                85%
              </h3>

              <p className="text-slate-300 text-lg">
                Average Quiz Score
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* CONTINUE LEARNING */}
      <section className="px-6 md:px-12 py-16">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">
            Continue Learning
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/10 border border-white/10 rounded-2xl p-8 hover:scale-105 transition">

              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Algebra Basics
              </h3>

              <p className="text-slate-300 text-lg mb-6">
                Continue learning equations, variables,
                and graph fundamentals.
              </p>

              <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">

                Resume Course

              </button>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl p-8 hover:scale-105 transition">

              <h3 className="text-3xl font-bold mb-4 text-purple-400">
                Geometry Fundamentals
              </h3>

              <p className="text-slate-300 text-lg mb-6">
                Explore angles, triangles,
                circles, and geometry rules.
              </p>

              <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition">

                Continue Learning

              </button>

            </div>

          </div>

        </div>

      </section>
      {/* RECENT LESSONS */}
      <section className="px-6 md:px-12 py-16">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">
            Recent Lessons
          </h2>

          <div className="space-y-5">

            <div className="bg-white/10 border border-white/10 p-6 rounded-2xl">

              📘 Quadratic Equations

            </div>

            <div className="bg-white/10 border border-white/10 p-6 rounded-2xl">

              📐 Geometry Basics

            </div>

            <div className="bg-white/10 border border-white/10 p-6 rounded-2xl">

              📊 Understanding Graphs

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}