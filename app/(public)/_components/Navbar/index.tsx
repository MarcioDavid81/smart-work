import Logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export const Navbar = async () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="sticky top-0 bg-white shadow-md px-6 py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="Smart Work Logo" width={100} height={40} className="rounded-full" />
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoClose className="text-3xl text-blue-700" /> : <IoMenu className="text-3xl text-blue-700" /> }
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
          <div className="md:hidden mt-4 space-y-2">
            <a href="#inicio" className="block text-gray-700 hover:text-[#78b49a]" onClick={() => setIsOpen(false)}>Início</a>
            <a href="#sobre" className="block text-gray-700 hover:text-[#78b49a]" onClick={() => setIsOpen(false)}>Sobre</a>
            <a href="#contato" className="block text-gray-700 hover:text-[#78b49a]" onClick={() => setIsOpen(false)}>Contato</a>
            <a href="/login" className="block bg-[#78b49a] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#78b49a]/80 transition text-center" onClick={() => setIsOpen(false)}>Entrar</a>
          </div>
        )}
      </nav>
    );
  };