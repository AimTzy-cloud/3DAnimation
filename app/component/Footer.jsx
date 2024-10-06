import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='px-6 max-w-[1000px] mt-12 text-white/70 py-8 container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>AimTzy</h1>
        <div className='flex space-x-6 mt-4'>
            <a href="#" className='hover:text-gray-300'><FaLinkedin size={24} /></a>
            <a href="#" className='hover:text-gray-300'><FaInstagram size={24} /></a>
            <a href="#" className='hover:text-gray-300'><FaGithub size={24} /></a>
        </div>
    </div>
  )
}
