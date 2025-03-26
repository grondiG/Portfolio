import '../styles/about.css';
import { motion } from "motion/react"

export default function About() {
    const skills: Array<{name: string, level: number}> = [
        { name: 'JavaScript', level: 95 },
        { name: 'Angular', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'CSS/SCSS', level: 80 },
        { name: 'UI/UX Design', level: 70 }
    ];

    return (
        <div id="about" className="about flex flex-col md:flex-row w-full overflow-hidden px-4 md:px-14 py-10 md:py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
            <div className="container flex-1 md:flex-2 flex flex-col justify-center prose px-4 md:pl-20 text-center md:text-left">
                <h2 className="lora mb-4 text-2xl md:text-3xl font-bold leading-none tracking-tight text-neutral-100">About Me</h2>
                <p className="courier-prime-regular text-zinc-300 text-sm md:text-base">
                    Full-stack developer with a passion for creating elegant, user-friendly web experiences.
                    Specialized in Angular/React and modern JavaScript frameworks with an eye for design and attention to detail.
                </p>
                <div className="mt-6 md:mt-8 w-full max-w-md mx-auto md:mx-0">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-200 mb-3">My Skills</h3>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item mb-3">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs md:text-sm font-medium text-neutral-300">{skill.name}</span>
                                        <span className="text-xs md:text-sm font-medium text-neutral-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-1.5 md:h-2">
                                        <div
                                            className="skill-progress rounded-full h-1.5 md:h-2 bg-gradient-to-r from-neutral-500 to-neutral-300"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
                    <button
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-neutral-700 to-neutral-900 hover:text-white focus:ring-1 focus:outline-none focus:ring-neutral-700 border border-neutral-700">
                        <a href="/assets/Arkadiusz-Grondys.pdf" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-900 rounded-md group-hover:bg-transparent">
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>

            <div className="container flex-1 md:flex-3 relative mt-10 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, translateX: 100 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                >
                    <div className="experience-timeline mx-auto md:ml-12">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4 className="lora text-neutral-200 text-lg md:text-xl">Fullstack Developer</h4>
                                <p className="text-zinc-400 text-xs md:text-sm">2024 - Present</p>
                                <p className="text-zinc-300 text-xs md:text-sm mt-2">Creating projects as a freelancer, at the end of high school studies. Looking for a new job.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4 className="lora text-neutral-200 text-lg md:text-xl">Frontend Developer</h4>
                                <p className="text-zinc-400 text-xs md:text-sm">2022 - 2024</p>
                                <p className="text-zinc-300 text-xs md:text-sm mt-2">First job and developing cutting-edge web applications with Javascript frameworks and Node.js</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4 className="lora text-neutral-200 text-lg md:text-xl">Learning about programming</h4>
                                <p className="text-zinc-400 text-xs md:text-sm">2020-2022</p>
                                <p className="text-zinc-300 text-xs md:text-sm mt-2">
                                    Self-taught frontend developer, creating basic projects</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="code-snippets hidden md:block">
                    <div className="code-block code-block-1">
                        <img src='assets/react-logo.png' alt='React' className='w-full h-full'/>
                    </div>
                    <div className="code-block code-block-2">
                        <img src='assets/angular-logo.png' alt='Angular' className='w-full h-full'/>
                    </div>
                    <div className="code-block code-block-3 p-4">
                        <img src='assets/js-logo.png' alt='Javascript' className='w-full h-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
