

export default function Navbar() {
    return (
        <nav className="flex w-full justify-between h-full items-center  md:px-[20px]">

            <p className="text-sm uppercase bg-linear-to-r from-yellow-400  bg-clip-text to-yellow-600 text-transparent font-bold anton tracking-widest  shadow-lg shadow-red-900/10 md:text-xl">Lucky Mods</p>
            <div className="flex text-[12px] md:text-sm  items-center gap-4 ">

                <a href="https://discord.gg/JpSWMuU9" className="bg-linear-to-r from-sky-500 hover:from-sky-600   hover:to-indigo-600 to-indigo-500   py-2 px-3 rounded-lg" >Join discord</a>
                <a href="https://www.youtube.com/@Lucky_62388" className="bg-linear-to-r from-red-500 to-red-700 py-2 px-3 rounded-lg">Youtube channel</a>
            </div>
        </nav>
    )
}
