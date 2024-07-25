export default function Web() {
    return (
        <div className="w-72 h-fit flex flex-col items-center gap-5 mb-10">
            <div className="w-full h-32 flex flex-row">
                <div className="w-1/3 bg-white border relative">
                    <div className="w-full absolute bottom-0 p-2">
                        <h1 className="text-black text-xs font-regular font-['Plus Jakarta Sans']">DjasMerah</h1>
                        <h1 className="text-black text-xs font-thin font-['Plus Jakarta Sans']">Laravel</h1>
                    </div>
                </div>
                <div className="w-2/3 bg-gray-700"></div>
            </div>
        </div>
    )
}