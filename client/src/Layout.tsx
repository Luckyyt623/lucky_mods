import { ReactNode } from 'react';
import Navbar from './components/site/Navbar';
import Footer from './components/site/Footer';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className=' h-screen flex justify-center   w-full'>
            <div className='scroller h-full  w-[1800px] overflow-y-auto flex flex-col'>

                <header className='bg-black h-[80px] w-full'>

                    <Navbar />
                </header>
                <main className='flex-grow'>

                    {children}
                </main>

        
                <footer>

                    <Footer />
                </footer>
                
            </div>
        </div>

    )
}
