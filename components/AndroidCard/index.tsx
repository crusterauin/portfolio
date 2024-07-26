export default function Android() {
    return (
        <div className="w-72 sm:w-120 lg:w-[50rem] h-fit flex flex-col items-center gap-5 mb-10">
            <div className="w-full h-32 sm:h-56 lg:h-96 flex flex-row">
                <div className="w-1/3 bg-white border relative">
                    <div className="w-full absolute bottom-0 p-2">
                        <h1 className="text-black text-xs sm:text-sm lg:text-lg font-regular font-['Plus Jakarta Sans']">My Anime List</h1>
                        <h1 className="text-black text-xs sm:text-sm lg:text-lg font-thin font-['Plus Jakarta Sans']">Android</h1>
                    </div>
                </div>
                <div className="w-2/3 bg-gray-700"></div>
            </div>
        </div>
    )
}