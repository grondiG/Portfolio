import { useEffect, useState } from 'react';
import '../styles/header.css';

export default function Header({handleNavClick}: {handleNavClick: (id: string) => (e: React.MouseEvent) => void}) {
    const [underline, setUnderline] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setUnderline(prevState => !prevState);
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <header className="bg-black w-full h-15 fixed top-0 z-10">
            <div className="container flex mx-auto p-4">
                <div className="flex-1">
                    <h1 className="text-white text-2xl courier-prime-regular cursor-pointer">
                        <a href="#hero" onClick={handleNavClick('hero')}>portfolio{underline && "_"}</a>
                        </h1>
                </div>
                <div className='flex flex-1 items-center justify-end'>
                    <ul className='courier-prime-regular flex gap-5 hover:cursor-pointer'>
                        <li className='text-white menu-item'>
                            <a href="#about" onClick={handleNavClick('about')}>about</a>
                        </li>
                        <li className='text-white menu-item'>
                            <a href="#projects" onClick={handleNavClick('projects')}>projects</a>
                        </li>
                        <li className='text-white menu-item'>
                            <a href="#contact" onClick={handleNavClick('contact')}>contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
