'use client';
import Image from "next/image";
import cursor from '../assets/icon1.png';
import lightning from '../assets/icon2.png';
import { motion } from "framer-motion";
import profileEpic from '../assets/profilepic.png'

export const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#281942_35%,#8F5C55_60%,#DBAF6E_80%)]">
        <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1941)]"></div>
        
        <div className="relative">
            <div className="text-8xl font-bold text-center">
                <h1 className="text-[#98B4CE]">Hi, I&apos;am</h1>
                <h1 className="text-[#E48A57]">AimTzy</h1>
            </div>

            <motion.div
                className="hidden md:block absolute left-[220px] top-[200px]"
                drag
            >
                <Image 
                src={cursor}
                height='150'
                width='150'
                alt="cursos"
                className=""
                draggable='false'
                />

            </motion.div>

            <motion.div
                className="hidden md:block absolute right-[220px] top-[20px]"
                drag
            >
                <Image 
                src={lightning}
                height='100'
                width='100'
                alt="message"
                className=""
                draggable='false'
                />

            </motion.div>
        

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
            Web developer full-stack mengembangkan seluruh lapisan aplikasi web, dari front-end hingga back-end dan database.
        </p>

        <Image 
        src={profileEpic}
        alt="profile picture"
        className="h-auto w-auto mx-auto"
        />
        </div>
    </div>
  )
}
