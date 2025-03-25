import '../styles/projects.css';
import { motion } from "motion/react";

export default function Projects() {
    const projects: Array<{title: string, description: string, technologies: Array<string>, imageUrl: string, demoUrl: string, githubUrl?: string}> = [
        {
            title: 'Expo Aluminium',
            description: 'A fast, SEO-friendly e-commerce web store built with Gatsby.js, AWS, and Node.js. Includes an admin panel for product/order management and secure Stripe payments.',
            technologies: ['React', 'Node.js', 'Gatsby', 'AWS', 'DynamoDB'],
            imageUrl: 'assets/image1.png',
            demoUrl: 'https://expo-aluminium.pl',
        },
        {
            title: 'Restaurant Menu App',
            description: 'A dynamic restaurant menu app built with Angular and NgRx for centralized state management. Features secure user authentication, multi-language support, and a lightweight Node.js backend for seamless menu updates and data handling.',
            technologies: ['Angular', 'RxJS', 'NgRx', 'Node.js'],
            imageUrl: 'assets/menuapp.png',
            demoUrl: 'https://github.com/grondiG/menus',
            githubUrl: 'https://github.com/grondiG/menus-api'
        },
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio showcasing projects and skills with modern design and animations.',
            technologies: ['React', 'Remix', 'Motion', 'CSS3', 'Tailwind CSS'],
            imageUrl: 'assets/portfolio.png',
            demoUrl: 'https://example.com/portfolio',
            githubUrl: 'https://github.com/grondiG/Portfolio'
        }
    ];

    return (
        <div className="projects flex w-full overflow-hidden px-4 md:px-14 py-10 md:py-20 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="lora mb-4 md:mb-8 text-2xl md:text-3xl font-bold leading-none tracking-tight text-neutral-100 text-center">
                        My Projects
                    </h2>
                    <p className="courier-prime-regular text-zinc-300 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
                        Here are some of my recent projects showcasing my skills in frontend and backend development.
                        Each project represents my commitment to clean code, user experience, and innovative solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="project-card"
                        >
                            <div className="project-image-container">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                className="project-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="lora text-lg md:text-xl font-semibold text-neutral-200 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-300 text-xs md:text-sm mb-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="tech-badge text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-8 md:mt-12"
                >
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-neutral-700 to-neutral-900 hover:text-white focus:ring-1 focus:outline-none focus:ring-neutral-700 border border-neutral-700">
                        <a
                            href="https://github.com/grondiG"
                            target="_blank"
                            rel="noreferrer"
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-900 rounded-md group-hover:bg-transparent"
                        >
                            View All Projects
                        </a>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
