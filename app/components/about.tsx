import '../styles/about.css';

import { motion } from "motion/react"

export default function About() {
    const skills = [
        { name: 'JavaScript', level: 95 },
        { name: 'Angular', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'CSS/SCSS', level: 80 },
        { name: 'UI/UX Design', level: 70 }
    ];

    return (
        <div id="about" className="about flex w-full overflow-hidden px-14 py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
            <div className="container flex-2 flex flex-col justify-center prose pl-20">
                <h2 className="lora mb-4 text-3xl font-bold leading-none tracking-tight text-neutral-100 md:text-4xl">About Me</h2>
                <p className="courier-prime-regular text-zinc-300">
                    Full-stack developer with a passion for creating elegant, user-friendly web experiences.
                    Specialized in React and modern JavaScript frameworks with an eye for design and attention to detail.
                </p>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-neutral-200 mb-3">My Skills</h3>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item mb-3">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                                        <span className="text-sm font-medium text-neutral-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div
                                            className="skill-progress rounded-full h-2 bg-gradient-to-r from-neutral-500 to-neutral-300"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="mt-8">
                    <button
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-neutral-700 to-neutral-900 hover:text-white focus:ring-1 focus:outline-none focus:ring-neutral-700 border border-neutral-700">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-900 rounded-md group-hover:bg-transparent">
              Download Resume
            </span>
                    </button>
                </div>
            </div>
            <div className="container flex-3 relative">
                <motion.div
                    initial={{ opacity: 0, translateX: 100 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                >
                    <div className="experience-timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4 className="lora text-neutral-200">Senior Developer</h4>
                                <p className="text-zinc-400 text-sm">2021 - Present</p>
                                <p className="text-zinc-300 text-sm mt-2">Developing cutting-edge web applications with
                                    React and Node.js</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4 className="lora text-neutral-200">Frontend Developer</h4>
                                <p className="text-zinc-400 text-sm">2018 - 2021</p>
                                <p className="text-zinc-300 text-sm mt-2">Created responsive interfaces and improved UX
                                    for client projects</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4 className="lora text-neutral-200">UI/UX Designer</h4>
                                <p className="text-zinc-400 text-sm">2016 - 2018</p>
                                <p className="text-zinc-300 text-sm mt-2">Designed intuitive user interfaces for web and
                                    mobile applications</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="code-snippets">
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
