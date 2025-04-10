import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Dashboard() {

    const { userId } = await auth();
    if (!userId) {
      redirect("/");
    }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">   
    <div className="min-h-screen  w-full flex bg-gray-50">
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
