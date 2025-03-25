import '../styles/hero.css';
import { motion } from "motion/react"

export default function Hero({handleNavClick}: {handleNavClick: (id: string) => (e: React.MouseEvent) => void}) {
    return (
        <div className="hero flex flex-col md:flex-row w-full overflow-hidden px-4 md:px-14">
            <motion.div
                className='container flex-1 md:flex-2 flex flex-col justify-center prose px-4 md:pl-20 text-center md:text-left'
                initial={{ opacity: 0, translateX: -50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='lora mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none tracking-tight'>
                    Arkadiusz Grondys Portfolio
                </h1>
                <p className='courier-prime-regular text-zinc-300 text-sm md:text-base'>
                    Frontend developer with 2+ years of experience building web/mobile apps using Angular, React, .NET, and AWS. Skilled in scalable e-commerce platforms, CMS integrations, and cross-platform solutions. Erasmus+ intern with international project exposure. Passionate about clean code, cloud tech, and emerging tools. Always learning.
                </p>
                <div className='flex justify-center md:justify-start'>
                    <a
                        href="#about"
                        onClick={handleNavClick('about')}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-neutral-800 to-neutral-950 hover:text-white focus:ring-1 focus:outline-none focus:ring-neutral-700 border border-neutral-700">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-950 rounded-md group-hover:bg-transparent">
                            See more
                        </span>
                    </a>
                </div>
            </motion.div>

            <div className='container flex-1 md:flex-3 relative hidden md:block'>
                <img src='assets/image1.png' alt='hero'
                     className='transform-image-perspective absolute -right-36 top-44 w-100 h-100'/>
                <img src='assets/image2.png' alt='hero'
                     className='transform-image-perspective absolute -right-16 bottom-24 w-100 h-100'/>
                <img src='assets/image3.png' alt='hero'
                     className='transform-image-perspective absolute -right-64 -bottom-24 w-100 h-100'/>
                <img src='assets/image4.png' alt='hero'
                     className='transform-image-perspective absolute -left-24 -bottom-12 w-100 h-100'/>
            </div>
        </div>
    )
}
