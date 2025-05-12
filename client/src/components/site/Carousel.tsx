import Minecraftbg from '@/assets/minecraftbg.jpg'
import Slitherbg from '@/assets/slitherbg.jpg'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function Carousel() {
    return (
        <div className="w-full h-[500px] flex items-center relative justify-center">
            <div className='w-[50%] h-full opacity-30'>
                <img src={Slitherbg} className='object-cover h-full w-full' alt="" />
            </div>
            <div className='w-[50%] h-full  opacity-30'>
                <img src={Minecraftbg} className='object-cover h-full w-full' alt="" />
            </div>
            <div className='absolute w-full h-full items-center justify-center gap-[20px] flex flex-col'>


                <h1 className='text-4xl bg-linear-to-r from-red-300 bg-clip-text to-red-500 text-transparent font-bold chau tracking-widest  shadow-lg shadow-red-900/10'>WELCOME TO LUCKY MODS</h1>

                <p className='text-2lg bg-linear-to-r from-sky-500 bg-clip-text to-indigo-500 text-transparent font-bold chau tracking-widest  shadow-lg shadow-red-900/10 uppercase '>Explore exciting mods for Slither.io and stay tuned for Minecraft updates!</p>
                <Button className='bg-linear-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 cursor-pointer' size={'xl'}>
                    <Link  to="/mods" className='text-md w-full h-full flex items-center justify-center'>Explore</Link>
                </Button>
            </div>

                
     

        </div>
    )
}
