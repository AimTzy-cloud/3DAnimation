'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import project1 from '../assets/Screenshot (197).png';
import project2 from '../assets/Screenshot (198).png';
import project3 from '../assets/Screenshot (199).png';
import project4 from '../assets/Screenshot (200).png';
import project5 from '../assets/Screenshot (201).png';
import project6 from '../assets/Screenshot (202).png'

const projects = [
    {
        title: 'Modern UI/UX',
        desc: 'Ini adalah website portfolio saya yang dibikin menggunakan framework React',
        devStack: 'React, Next.js',
        link: '#',
        git: '#',
        src: project1
    },
    {
        title: 'Modern UI/UX',
        desc: 'Ini adalah website portfolio saya yang dibikin menggunakan framework React',
        devStack: 'React, Next.js',
        link: '#',
        git: '#',
        src: project2
    },
    {
        title: 'Modern UI/UX',
        desc: 'Ini adalah website portfolio saya yang dibikin menggunakan framework React',
        devStack: 'React, Next.js',
        link: '#',
        git: '#',
        src: project3
    },
    {
        title: 'Modern UI/UX',
        desc: 'Ini adalah website portfolio saya yang dibikin menggunakan framework React',
        devStack: 'React, Next.js',
        link: '#',
        git: '#',
        src: project4
    },
    {
        title: 'Modern UI/UX',
        desc: 'Ini adalah website portfolio saya yang dibikin menggunakan framework React',
        devStack: 'React, Next.js',
        link: '#',
        git: '#',
        src: project5
    },
    {
        title: 'Modern UI/UX',
        desc: 'Ini adalah website portfolio saya yang dibikin menggunakan framework React',
        devStack: 'React, Next.js',
        link: '#',
        git: '#',
        src: project6
    }
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>Project <span className='text-orange-400'>Me</span></h1>
            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex ==flex-col ${index % 2 === 1 ? "md:flex-col-reverse gap-12" : "flex-col md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded  border-gray-700" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
