"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">

            <div className="flex justify-between items-center px-6 md:px-10 py-5">

                {/* LOGO */}
                <Link href="/">

                    <h1 className="text-3xl font-bold text-white cursor-pointer">
                        MathNova
                    </h1>

                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-8 text-lg text-white">

                    <Link href="/" className="hover:text-cyan-400 transition">
                        Home
                    </Link>

                    <Link href="/courses" className="hover:text-cyan-400 transition">
                        Courses
                    </Link>

                    <Link href="/quizzes" className="hover:text-cyan-400 transition">
                        Quizzes
                    </Link>

                    <Link href="/video-lessons" className="hover:text-cyan-400 transition">
                        Video Lessons
                    </Link>

                    <Link href="/contact" className="hover:text-cyan-400 transition">
                        Contact
                    </Link>

                </div>

                {/* HAMBURGER BUTTON */}
                <button
                    className="md:hidden text-white text-4xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

            </div>

            {/* MOBILE MENU */}
            {menuOpen && (

                <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-lg text-white bg-slate-900/95">

                    <Link
                        href="/"
                        className="hover:text-cyan-400 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        href="/courses"
                        className="hover:text-cyan-400 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Courses
                    </Link>

                    <Link
                        href="/quizzes"
                        className="hover:text-cyan-400 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Quizzes
                    </Link>

                    <Link
                        href="/video-lessons"
                        className="hover:text-cyan-400 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Video Lessons
                    </Link>

                    <Link
                        href="/contact"
                        className="hover:text-cyan-400 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>

                </div>

            )}

        </nav>
    );
}