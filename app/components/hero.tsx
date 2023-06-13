export default function Hero() {
    return (
        <div className="bg-gray-300">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                        <span className="text-black-700">Chord Finder</span>
                    </h1>
                    <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg"></p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-700 bg-black-700 transition duration-150 ease-in-out hover:bg-black-600 lg:text-xl lg:font-bold  rounded text-black px-4 sm:px-10 border border-black-700 py-2 sm:py-4 text-sm">Sign up</button>
                    <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-700 bg-transparent transition duration-150 ease-in-out hover:border-black-600 lg:text-xl lg:font-bold  hover:text-black-600 rounded border border-black-700 text-black-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Search</button>
                </div>
            </div>
        </div>
    )
}