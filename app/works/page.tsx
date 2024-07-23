export default function Works() {
    return (
        <main className="min-h-full relative">
            <section className="flex flex-col items-center">
                <div className="w-full max-w-5xl flex flex-row justify-center items-center gap-7 my-7">
                    <h1 className="text-black text-sm font-regular font-['Plus Jakarta Sans']">Mobile Apps</h1>
                    <h1 className="text-black text-sm font-regular font-['Plus Jakarta Sans']">Web Apps</h1>
                    <h1 className="text-black text-sm font-regular font-['Plus Jakarta Sans']">Graphic Design</h1>
                </div>
                <div className="w-72 h-fit flex flex-col items-center gap-5 mb-10">
                    <div className="w-full h-32 flex flex-row">
                        <div className="w-1/3 bg-white border relative">
                            <div className="w-full absolute bottom-0 p-2">
                                <h1 className="text-black text-xs font-regular font-['Plus Jakarta Sans']">MyAnimeList Clone</h1>
                                <h1 className="text-black text-xs font-thin font-['Plus Jakarta Sans']">Android</h1>
                            </div>
                        </div>
                        <div className="w-2/3 bg-gray-700"></div>
                    </div>
                    <div className="w-full h-32 flex flex-row ">
                        <div className="w-1/3 bg-white border relative">
                            <div className="w-full absolute bottom-0 p-2">
                                <h1 className="text-black text-xs font-regular font-['Plus Jakarta Sans']">GO Wonogiri</h1>
                                <h1 className="text-black text-xs font-thin font-['Plus Jakarta Sans']">iOS</h1>
                            </div></div>
                        <div className="w-2/3 bg-gray-700"></div>
                    </div>
                    <div className="w-full h-32 flex flex-row ">
                        <div className="w-1/3 bg-white border relative">
                            <div className="w-full absolute bottom-0 p-2">
                                <h1 className="text-black text-xs font-regular font-['Plus Jakarta Sans']">Expense Tracker</h1>
                                <h1 className="text-black text-xs font-thin font-['Plus Jakarta Sans']">Flutter</h1>
                            </div></div>
                        <div className="w-2/3 bg-gray-700"></div>
                    </div>
                </div>
            </section>
        </main>

    );
}