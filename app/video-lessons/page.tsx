"use client";

import { useState } from "react";

export default function VideoLessonsPage() {

    const courses = {

        Algebra: [
            {
                title: "Introduction to Algebra",
                videoId: "NybHckSEQBI",
                description:
                    "Learn the basics of algebra and mathematical expressions.",
            },

            {
                title: "Linear Equations",
                videoId: "grnP3mduZkM",
                description:
                    "Understand how to solve linear equations step by step.",
            },

            {
                title: "Quadratic Equations",
                videoId: "qeByhTF8WEw",
                description:
                    "Learn how quadratic equations form parabolas.",
            },
        ],

        Geometry: [
            {
                title: "Introduction to Geometry",
                videoId: "302eJ3TzJQU",
                description:
                    "Learn the fundamentals of geometry and shapes.",
            },

            {
                title: "Triangles and Angles",
                videoId: "WqhlG4kZkB0",
                description:
                    "Understand triangle properties and angle rules.",
            },

            {
                title: "Circles",
                videoId: "VQmgm0Mhu7A",
                description:
                    "Explore circles, radius, diameter, and circumference.",
            },
        ],

        Trigonometry: [
            {
                title: "Introduction to Trigonometry",
                videoId: "PUB0TaZ7bhA",
                description:
                    "Learn sine, cosine, and tangent fundamentals.",
            },

            {
                title: "Unit Circle",
                videoId: "qzPQ8c2tf_E",
                description:
                    "Understand the trigonometric unit circle.",
            },
        ],

        Calculus: [
            {
                title: "Limits",
                videoId: "YNstP0ESndU",
                description:
                    "Learn the concept of limits in calculus.",
            },

            {
                title: "Derivatives",
                videoId: "WUvTyaaNkzM",
                description:
                    "Understand how derivatives measure change.",
            },
        ],
    };

    const categories = Object.keys(courses);

    const [selectedCategory, setSelectedCategory] = useState("Algebra");

    const [selectedLesson, setSelectedLesson] = useState(0);

    const currentLessons =
        courses[selectedCategory as keyof typeof courses];

    return (

        <main className="md:min-h-screen bg-slate-900 text-white">

            <div className="flex flex-col md:grid md:grid-cols-[250px_320px_1fr]">

                {/* CATEGORY SIDEBAR */}
                <aside className="border-r border-white/10 bg-black/20 p-6 md:min-h-screen">

                    <h1 className="text-3xl font-bold mb-8">
                        Categories
                    </h1>

                    <div className="flex md:flex-col gap-4 overflow-x-auto">

                        {categories.map((category) => (

                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setSelectedLesson(0);
                                }}
                                className={`text-left p-4 rounded-xl transition

                  ${selectedCategory === category
                                        ? "bg-cyan-500 text-white"
                                        : "bg-white/5 hover:bg-white/10"
                                    }
                `}
                            >

                                {category}

                            </button>

                        ))}

                    </div>

                </aside>

                {/* LESSON SIDEBAR */}
                <aside className="border-r border-white/10 bg-black/10 p-6 md:min-h-screen">

                    <h1 className="text-3xl font-bold mb-8">
                        Lessons
                    </h1>

                    <div className="flex md:flex-col gap-4 overflow-x-auto">

                        {currentLessons.map((lesson, index) => (

                            <button
                                key={index}
                                onClick={() => setSelectedLesson(index)}
                                className={`text-left p-5 rounded-xl transition

                  ${selectedLesson === index
                                        ? "bg-cyan-500 text-white"
                                        : "bg-white/5 hover:bg-white/10"
                                    }
                `}
                            >

                                {lesson.title}

                            </button>

                        ))}

                    </div>

                </aside>

                {/* MAIN CONTENT */}
                <section className="p-4 md:p-12">

                    <h1 className="text-4xl font-bold mb-8">
                        {currentLessons[selectedLesson].title}
                    </h1>

                    {/* VIDEO PLAYER */}
                    <div className="bg-black rounded-2xl overflow-hidden shadow-2xl mb-10 aspect-video">

                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${currentLessons[selectedLesson].videoId}`}
                            title="YouTube video player"
                            allowFullScreen
                        ></iframe>

                    </div>

                    {/* DESCRIPTION */}
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-8">

                        <h2 className="text-2xl font-bold mb-6 text-cyan-400">
                            Lesson Overview
                        </h2>

                        <p className="text-slate-300 text-lg leading-8">
                            {currentLessons[selectedLesson].description}
                        </p>

                    </div>

                </section>

            </div>

        </main>
    );
}