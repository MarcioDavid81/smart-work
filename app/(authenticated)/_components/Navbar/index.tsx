'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaClipboardList, FaHardHat } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { GrUserWorker } from 'react-icons/gr';
import Image from 'next/image';
import { IoClose, IoMenu } from 'react-icons/io5';

const routes = [
  {
    path: "/",
    name: "Início",
    icon: <FaHome size={20} />,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <AiOutlineDashboard size={20} />,
  },
  {
    path: "/funcionarios",
    name: "Funcionários",
    icon: <GrUserWorker size={20} />,
  },
  {
    path: "/exames",
    name: "Exames",
    icon: <FaClipboardList size={20} />,
  },
  {
    path: "/epis",
    name: "EPIs",
    icon: <FaHardHat size={20} />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Verificar scroll para efeito de navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'} md:hidden`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Visível em todas as telas */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image src="/logo2.png" alt="Logo" width={200} height={50} />
        </Link>

        {/* Menu para desktop - Esconder em mobile */}
        <div className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                pathname === route.path
                  ? 'text-green-600 font-medium'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <span className="mr-2">{route.icon}</span>
              {route.name}
            </Link>
          ))}
        </div>

        {/* Botão do menu mobile - Mostrar apenas em telas pequenas */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose className="text-3xl text-[#78b49a]" /> : <IoMenu className="text-3xl text-[#78b49a]" /> }
        </button>
      </div>

      {/* Menu mobile - Mostrar apenas quando aberto */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 right-0 transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 py-3 flex flex-col mt-2 border-t border-[#78b49a] space-y-3">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  pathname === route.path
                    ? 'bg-green-50 text-[#78b49a] font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{route.icon}</span>
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}