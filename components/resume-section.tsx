"use client";

import { useState } from "react";

const RESUME_PDF = "/resume.pdf"; // Place your resume PDF in the public/ folder

export const ResumeSection = () => {
    const [showFull, setShowFull] = useState(false);

    return (
        <section id="resume" className="py-20 flex flex-col items-center">
            <h1 className="heading mb-8">
                My <span className="text-purple">Resume</span>
            </h1>
            <div className="w-full max-w-2xl bg-black-100 rounded-xl p-6 shadow-lg flex flex-col items-center">
                <p className="mb-6 text-white-200 text-center">
                    Here you can view or download my full resume. Click below to see it directly on the page!
                </p>
                <button
                    className="mb-6 rounded-lg bg-purple px-6 py-2 text-white font-bold hover:bg-purple-700 transition"
                    onClick={() => setShowFull((v) => !v)}
                >
                    {showFull ? "Hide Resume" : "Show Full Resume"}
                </button>
                {showFull && (
                    <iframe
                        src={RESUME_PDF}
                        title="Resume PDF"
                        className="w-full h-[70vh] rounded-lg border border-white/10 bg-white"
                        style={{ minHeight: 500 }}
                    />
                )}
                <a
                    href={RESUME_PDF}
                    download
                    className="mt-4 text-purple underline hover:text-purple-700"
                >
                    Download PDF
                </a>
            </div>
        </section>
    );
};
