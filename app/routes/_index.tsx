import React from 'react';

import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import Header from '~/components/header';
import Hero from '~/components/hero';
import About from '~/components/about';
import Projects from '~/components/projects';

import '../styles/index.css';
import Contact from '~/components/contact';
import { z } from 'zod';
import { json } from 'react-router';
import { Resend } from 'resend';


const contactSchema: z.ZodSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10)
});

export async function action({ request }: ActionFunctionArgs) {
    try {
        const formData: FormData = await request.formData();
        const rawData = Object.fromEntries(formData);

        const result = contactSchema.safeParse(rawData);

        if (!result.success) {
            return json({ errors: result.error.flatten() }, { status: 400 });
        }
        console.log(formData);

        const resend: Resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'arogrondi@gmail.com',
            subject: 'New Contact Form',
            html: `<p>From ${result.data.name} (${result.data.email}):<br>${result.data.message}</p>`
        });

        return json({ success: true });
    } catch (error) {
        return json({ error: 'Failed to send message' }, { status: 500 });
    }
}


export const meta: MetaFunction = () => {
  return [
    { title: "Arkadiusz Grondys Portfolio" },
    { name: "description", content: "Welcome to my portfolio site!" },
  ];
};

export default function Index() {
    const handleNavClick = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div className="wrapper flex flex-col  items-center justify-start">
        <Header handleNavClick={handleNavClick} />
        <div id="hero">
        <Hero handleNavClick={handleNavClick}/>
        </div>
        <div id="about">
            <About/>
        </div>
        <div id="projects">
            <Projects/>
        </div>
        <div id='contact'>
            <Contact/>
        </div>
    </div>
  );
}
