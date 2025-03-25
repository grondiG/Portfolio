import { useEffect, useState } from 'react';
import '../styles/header.css';

export default function Header({handleNavClick}: {handleNavClick: (id: string) => (e: React.MouseEvent) => void}) {
    const [underline, setUnderline] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const timer: NodeJS.Timeout = setInterval((): void => {
            setUnderline((prevState: boolean) => !prevState);
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-black w-full h-15 fixed top-0 z-10">
            <div className="container flex mx-auto p-4 items-center justify-between">
                <div>
                    <h1 className="text-white text-2xl courier-prime-regular cursor-pointer">
                        <a href="#hero" onClick={(e) => {
                            handleNavClick('hero')(e);
                            closeMobileMenu();
                        }}>
                            portfolio{underline && "_"}
                        </a>
                    </h1>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:block flex-1 items-center justify-end'>
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

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center">
                        <ul className='courier-prime-regular flex flex-col gap-8 text-center'>
                            <li className='text-white text-2xl'>
                                <a
                                    href="#about"
                                    onClick={(e) => {
                                        handleNavClick('about')(e);
                                        closeMobileMenu();
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li className='text-white text-2xl'>
                                <a
                                    href="#projects"
                                    onClick={(e) => {
                                        handleNavClick('projects')(e);
                                        closeMobileMenu();
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li className='text-white text-2xl'>
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        handleNavClick('contact')(e);
                                        closeMobileMenu();
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
