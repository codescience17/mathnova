"use client";

import { useState } from "react";

export default function QuizPage() {

    const questions = [
        {
            question: "What is x if 2x + 4 = 10 ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
        {
            question: "Solve: 5x = 25",
            options: ["10", "5", "25", "15"],
            answer: "5",
        },
        {
            question: "What is x if x - 7 = 2 ?",
            options: ["5", "7", "9", "2"],
            answer: "9",
        },
        {
            question: "What is 2² × 2³ ?",
            options: ["32", "16", "64", "8"],
            answer: "32",
        },
        {
            question: "What shape does the graph y = x² form?",
            options: ["Straight Line", "Circle", "Parabola", "Triangle"],
            answer: "Parabola",
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0);

    const [showScore, setShowScore] = useState(false);

    function handleAnswer(selectedOption: string) {

        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    return (

        <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">

            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl w-full max-w-2xl border border-white/10">

                {showScore ? (

                    <div className="text-center">

                        <h1 className="text-5xl font-bold mb-6">
                            Quiz Finished 🎉
                        </h1>

                        <p className="text-2xl">
                            Your Score: {score} / {questions.length}
                        </p>

                    </div>

                ) : (

                    <div>

                        <h2 className="text-xl text-cyan-400 mb-4">
                            Question {currentQuestion + 1}
                        </h2>

                        <h1 className="text-3xl font-bold mb-8">
                            {questions[currentQuestion].question}
                        </h1>

                        <div className="flex flex-col gap-4">

                            {questions[currentQuestion].options.map((option) => (

                                <button
                                    key={option}
                                    onClick={() => handleAnswer(option)}
                                    className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-4 rounded-xl text-lg"
                                >
                                    {option}
                                </button>

                            ))}

                        </div>

                    </div>

                )}

            </div>

        </main>
    );
}