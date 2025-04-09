import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "../_components/Sidebar";
import Navbar from "../_components/Navbar";

export default async function Dashboard() {

    const { userId } = await auth();
    if (!userId) {
      redirect("/");
    }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">   
      {/* Navbar */}
      <Navbar />
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      {/* Conteúdo principal */}
      <main className="flex-1 p-8 text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p>Bem-vindo ao sistema de gestão Smart Work.</p>
          <p className="text-sm text-gray-500 mt-2">Selecione uma funcionalidade na barra lateral para começar.</p>
        </div>
      </main>
    </div>
    </div>
  );
}
