import Image from "next/image";

export default function Footer() {
    return (
        <footer className="absolute w-full bottom-0 bg-zinc-700 flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row items-center justify-center gap-2 p-4">
                <h1 className="text-center text-white text-xs font-light font-['Plus Jakarta Sans']">&#169;2024 by Faturrohman Fairuz Zaki. Created with</h1>
                <div className="flex items-center justify-center gap-2">
                    <Image src="/next.svg" alt="Next.js Logo" width={72} height={16} className="w-12" />
                </div>
            </div>
        </footer>
    );
}