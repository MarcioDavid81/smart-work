"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHome, FaClipboardList, FaHardHat } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { UserButton } from "@clerk/nextjs";

const routes = [
    {
        path: "/",
        name: "Início",
        icon: <FaHome size={20} />
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <AiOutlineDashboard size={20} />
    },
    {
        path: "/funcionarios",
        name: "Funcionários",
        icon: <GrUserWorker size={20} />
    },
    {
        path: "/exames",
        name: "Exames",
        icon: <FaClipboardList size={20} />
    },
    {
        path: "/epis",
        name: "EPIs",
        icon: <FaHardHat size={20} />
    }
]

const Sidebar = () => {

    const isPath = usePathname();

    return ( 
        <aside className="w-64 bg-zinc-600 text-white flex flex-col p-6 space-y-6 sticky top-0 min-h-screen">
            <div className="text-2xl font-bold">
                <Image src="/logo.png" alt="Logo" width={200} height={50}/>
            </div>
            <nav className="space-y-4">
              {routes.map((route) => (
                <a key={route.path} href={route.path} className={`flex items-center p-2 rounded-lg hover:bg-zinc-700 ${isPath === route.path ? 'bg-[#78b49a]' : ''}`}>
                    {route.icon}
                    <span className="ml-3">{route.name}</span>
                </a>
              ))}
            </nav>  
            <div>
                <UserButton showName />    
            </div>          
          </aside>
     );
}
 
export default Sidebar;