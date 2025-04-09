import Logo from "@/public/logo2.png";
import LogoMid from "@/public/logo3.png";  
import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
    return (
      <nav className="sticky top-0 bg-white shadow-md px-6 py-4">
        <div className="container flex items-center justify-between">
          {isMobile ? (
            <Image src={LogoMid} alt="Logo" width={50} height={40} className="h-10" />
          ) : (
            <Image src={Logo} alt="Logo" width={200} height={100} className="h-10" />
          )}
        
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoClose className="text-3xl text-[#78b49a]" /> : <IoMenu className="text-3xl text-[#78b49a]" /> }
            </button>
          </div>
          <div className="hidden md:flex space-x-4 items-center ">
            <a href="#inicio" className="text-gray-700 hover:text-[#78b49a]">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-[#78b49a]">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-[#78b49a]">Contato</a>
            <a href="/login" className="bg-[#78b49a] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#78b49a]/80 transition">Entrar</a>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center md:hidden mt-4 space-y-2">
            <a href="#inicio" className="block text-gray-700 hover:text-[#78b49a]" onClick={() => setIsOpen(false)}>Início</a>
            <a href="#sobre" className="block text-gray-700 hover:text-[#78b49a]" onClick={() => setIsOpen(false)}>Sobre</a>
            <a href="#contato" className="block text-gray-700 hover:text-[#78b49a]" onClick={() => setIsOpen(false)}>Contato</a>
            <a href="/login" className="block bg-[#78b49a] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#78b49a]/80 transition text-center" onClick={() => setIsOpen(false)}>Entrar</a>
          </div>
        )}
      </nav>
    );
  };