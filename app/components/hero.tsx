import '../styles/hero.css';
import { motion } from "motion/react"


export default function Hero({handleNavClick}: {handleNavClick: (id: string) => (e: React.MouseEvent) => void}) {

    return (
        <div className="hero flex w-full overflow-hidden px-14">
            <motion.div
                className='container flex-2 flex flex-col justify-center prose pl-20'
                initial={{ opacity: 0, translateX: -50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
            >
                    <h1 className='lora mb-4 text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl'>Arkadiusz
                        Grondys Portfolio</h1>
                    <p className='courier-prime-regular text-zinc-300'>Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                        elit. Vestibulum sollicitudin enim quis condimentum viverra. Sed eu quam risus. </p>
                    <div>
                        <a
                            href="#about"
                            onClick={handleNavClick('about')}
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-neutral-800 to-neutral-950 hover:text-white focus:ring-1 focus:outline-none focus:ring-neutral-700 border border-neutral-700">
    <span
        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-950 rounded-md group-hover:bg-transparent">
      See more
    </span>
                        </a>
                    </div>
            </motion.div>
                <div className='container flex-3 relative'>
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
