import React, { useState } from 'react';
import { motion } from "motion/react";
import { Navigation, useActionData, useNavigation } from '@remix-run/react';
import { Form } from '@remix-run/react';
import { action } from '~/routes/_index';

export default function Contact() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        message: string;
    }>({
        name: '',
        email: '',
        message: ''
    });

    const [localErrors, setLocalErrors] = useState<{
        name: string;
        email: string;
        message: string;
    }>({
        name: '',
        email: '',
        message: ''
    });

    const actionData = useActionData<typeof action>();
    const navigation: Navigation = useNavigation();

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (value.trim().length < 2) {
                    return 'Name must be at least 2 characters long';
                }
                break;
            case 'email':
                const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value }: {name: string, value: string} = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        const errorMessage: string = validateField(name, value);
        setLocalErrors(prevErrors => ({
            ...prevErrors,
            [name]: errorMessage
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        const nameError: string = validateField('name', formData.name);
        const emailError: string = validateField('email', formData.email);
        const messageError: string = validateField('message', formData.message);

        setLocalErrors({
            name: nameError,
            email: emailError,
            message: messageError
        });

        if (nameError || emailError || messageError) {
            e.preventDefault();
        }
    };

    const errors: {name: string, email: string, message: string} = {
        name: localErrors.name || actionData?.errors?.fieldErrors?.name?.[0],
        email: localErrors.email || actionData?.errors?.fieldErrors?.email?.[0],
        message: localErrors.message || actionData?.errors?.fieldErrors?.message?.[0]
    };

    React.useEffect((): void => {
        if (actionData?.success) {
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setLocalErrors({
                name: '',
                email: '',
                message: ''
            });
        }
    }, [actionData]);

    const isSubmitting: boolean = navigation.state === 'submitting';

    return (
        <div
            className="contact flex flex-col md:flex-row w-full h-auto md:h-screen overflow-hidden px-4 md:px-14 py-10 md:py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
            <div
                className="container flex-1 md:flex-2 flex flex-col justify-center prose px-4 md:pl-20 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, translateX: -50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="lora mb-4 text-2xl md:text-3xl font-bold leading-none tracking-tight text-neutral-100">
                        Contact Me
                    </h2>
                    <p className="courier-prime-regular text-zinc-300 mb-6 md:mb-8 text-sm md:text-base">
                        Have a project in mind or just want to say hello? Drop me a message!
                    </p>

                    <Form method='post' onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-xs md:text-sm font-medium text-neutral-300 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-neutral-200 text-sm md:text-base focus:outline-none focus:ring-1 
                                    ${errors.name
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-neutral-700 focus:ring-neutral-500'
                                }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-xs md:text-sm font-medium text-neutral-300 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-neutral-200 text-sm md:text-base focus:outline-none focus:ring-1 
                                    ${errors.email
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-neutral-700 focus:ring-neutral-500'
                                }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-xs md:text-sm font-medium text-neutral-300 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-neutral-200 text-sm md:text-base focus:outline-none focus:ring-1 
                                    ${errors.message
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-neutral-700 focus:ring-neutral-500'
                                }`}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-neutral-700 to-neutral-900 hover:text-white focus:ring-1 focus:outline-none focus:ring-neutral-700 border border-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span
                                        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-900 rounded-md flex items-center text-xs md:text-sm">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </span>
                                ) : (
                                    <span
                                        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-900 rounded-md group-hover:bg-transparent text-xs md:text-sm">
                                    Send Message
                                </span>
                                )}
                            </button>
                        </div>

                        {actionData?.success && (
                            <p className="text-green-500 text-xs md:text-sm mt-4 text-center md:text-left">
                                Message sent successfully!
                            </p>
                        )}
                        {actionData?.error && (
                            <p className="text-red-500 text-xs md:text-sm mt-4 text-center md:text-left">
                                {actionData.error}
                            </p>
                        )}
                    </Form>
                </motion.div>
            </div>

            <div
                className="container flex-1 md:flex-3 relative mt-8 md:mt-0 hidden md:flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, translateX: 100 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex justify-center items-center w-full h-full'
                >
                    <img className='w-80' src='assets/contact-icon.png' alt='Contact'/>
                </motion.div>
            </div>
        </div>
    );
}
