export default function CoursesPage() {

    return (

        <main className="min-h-screen bg-slate-900 text-white px-6 py-16">

            {/* PAGE TITLE */}
            <div className="text-center mb-16">

                <h1 className="text-5xl font-bold mb-4">
                    Algebra Course
                </h1>

                <p className="text-slate-300 text-xl">
                    Understanding quadratic graphs and parabolas
                </p>

            </div>

            {/* COURSE CONTENT */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE */}
                <div>

                    <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                        Graph of y = x²
                    </h2>

                    <p className="text-slate-300 text-lg leading-8 mb-6">
                        The equation y = x² creates a parabola.
                        As x increases or decreases,
                        the value of y always becomes positive.
                    </p>

                    <p className="text-slate-300 text-lg leading-8 mb-6">
                        The graph is symmetric around the y-axis
                        and its lowest point is at the origin (0,0).
                    </p>

                    <div className="bg-cyan-500/20 border border-cyan-500/30 p-6 rounded-2xl">

                        <h3 className="text-2xl font-semibold mb-4">
                            Key Properties
                        </h3>

                        <ul className="space-y-3 text-slate-200">

                            <li>• Shape: Parabola</li>
                            <li>• Vertex: (0,0)</li>
                            <li>• Opens Upward</li>
                            <li>• Symmetric about y-axis</li>

                        </ul>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="bg-white rounded-2xl p-6">

                    <h3 className="text-black text-2xl font-bold mb-6 text-center">
                        Quadratic Graph
                    </h3>

                    <div className="flex justify-center">

                        <div className="w-full">

                            <iframe
                                src="https://www.desmos.com/calculator"
                                width="100%"
                                height="500"
                                className="rounded-xl border-0"
                            ></iframe>

                        </div>

                    </div>

                </div>

            </div>

        </main>

    );
}