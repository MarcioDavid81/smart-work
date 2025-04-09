"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHome, FaClipboardList, FaHardHat } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

const Sidebar = () => {
  const isPath = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-zinc-600 text-white flex flex-col justify-between p-6 space-y-6 sticky top-0 min-h-screen transition-all duration-300 ease-in-out`}
    >
      <Image
        src="/control.png"
        alt="Stockly"
        width={30}
        height={30}
        className={`absolute -right-3 top-5 cursor-pointer rounded-full border-2 ${
          isOpen ? "" : "rotate-180"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div>
        <div className="text-2xl font-bold border-b-2 pb-4 border-zinc-500">
          {isOpen ? (
            <Image src="/logo2.png" alt="Logo" width={200} height={50} />
          ) : (
            <Image src="/logo3.png" alt="Logo" width={50} height={50} />
          )}
        </div>
        <nav className="space-y-4 mt-4 flex flex-col border-b-2 border-zinc-500 pb-4">
          {routes.map((route) => (
            <TooltipProvider key={route.path} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <TooltipContent>{route.name}</TooltipContent>
                  <a
                    href={route.path}
                    className={`flex items-center p-2 rounded-lg hover:bg-zinc-700 ${
                      isPath === route.path ? "bg-[#78b49a]" : ""
                    }`}
                  >
                    {route.icon}
                    <span
                      className={`ml-3 duration-300 ${!isOpen && "hidden"}`}
                    >
                      {route.name}
                    </span>
                  </a>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-start justify-items-end pt-4">
        {isOpen ? <UserButton showName /> : <UserButton />}
      </div>
    </div>
  );
};

export default Sidebar;
