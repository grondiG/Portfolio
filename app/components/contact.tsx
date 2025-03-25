import React, { useState } from 'react';
import { motion } from "motion/react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'name':
                if (value.trim().length < 2) {
                    return 'Name must be at least 2 characters long';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    return 'Please enter a valid email address';
                }
                break;
            case 'message':
                if (value.trim().length < 10) {
                    return 'Message must be at least 10 characters long';
                }
                break;
            default:
                return '';
        }
        return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        const errorMessage = validateField(name, value);
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: errorMessage
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const nameError = validateField('name', formData.name);
        const emailError = validateField('email', formData.email);
        const messageError = validateField('message', formData.message);

        setErrors({
            name: nameError,
            email: emailError,
            message: messageError
        });

        if (nameError || emailError || messageError) {
            return;
        }

        // TODO: Implement actual form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact flex w-full h-screen overflow-hidden px-14 py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
            <div className="container flex-2 flex flex-col justify-center prose pl-20">
                <motion.div
                    initial={{ opacity: 0, translateX: -50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="lora mb-4 text-3xl font-bold leading-none tracking-tight text-neutral-100 md:text-4xl">
                        Contact Me
                    </h2>
                    <p className="courier-prime-regular text-zinc-300 mb-8">
                        Have a project in mind or just want to say hello? Drop me a message!
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-lg">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-neutral-300 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-neutral-200 focus:outline-none focus:ring-1 
                                    ${errors.name
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-neutral-700 focus:ring-neutral-500'
                                }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-neutral-300 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-neutral-200 focus:outline-none focus:ring-1 
                                    ${errors.email
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-neutral-700 focus:ring-neutral-500'
                                }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-neutral-300 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-neutral-200 focus:outline-none focus:ring-1 
                                    ${errors.message
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-neutral-700 focus:ring-neutral-500'
                                }`}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-neutral-700 to-neutral-900 hover:text-white focus:ring-1 focus:outline-none focus:ring-neutral-700 border border-neutral-700"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-900 rounded-md group-hover:bg-transparent">
                                Send Message
                            </span>
                        </button>
                    </form>
                </motion.div>
            </div>

            <div className="container flex-3 relative hidden md:block">
                <motion.div
                    initial={{ opacity: 0, translateX: 100 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex justify-center items-center w-full h-full'
                >
                    <img className='w-80' src='/assets/contact-icon.png' alt='Contact' />
                </motion.div>
            </div>
        </div>
    );
}
