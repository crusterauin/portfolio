'use client';

import { useState } from "react";
import Android from "@/components/AndroidCard";
import Web from "@/components/WebCard";
import GraphicDesign from "@/components/GraphicCard";

export default function Works() {
    const [category, setCategory] = useState("Mobile Apps");

    return (
        <main className="min-h-full relative">
            <section className="flex flex-col items-center">
                <div className="w-full max-w-5xl flex flex-row justify-center items-center gap-7 my-7">
                    <h1 className="text-black text-sm font-regular font-['Plus Jakarta Sans']" onClick={() => setCategory("Mobile Apps")}>Mobile Apps</h1>
                    <h1 className="text-black text-sm font-regular font-['Plus Jakarta Sans']" onClick={() => setCategory("Web Apps")}>Web Apps</h1>
                    <h1 className="text-black text-sm font-regular font-['Plus Jakarta Sans']" onClick={() => setCategory("Graphic Design")}>Graphic Design</h1>
                </div>
                <div className="w-full max-w-5xl flex flex-col items-center">
                    {category === 'Mobile Apps' && <Android />}
                    {category === 'Web Apps' && <Web />}
                    {category === 'Graphic Design' && <GraphicDesign />}
                </div>
            </section>
        </main>

    );
}