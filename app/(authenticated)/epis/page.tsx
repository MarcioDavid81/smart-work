import Link from "next/link";
import Sidebar from "../_components/Sidebar";
import CreateEpiButton from "./_components/CreateEpiButton";
import EpisListTable from "./_components/EpiListTable";
import { Button } from "@/components/ui/button";
import { IoExit } from "react-icons/io5";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/Navbar";


const Epis = async () => {

  const { userId } = await auth();
      if (!userId) {
        redirect("/");
      }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      {/* Conteúdo principal */}
      <main className="flex-1 py-4 px-8 text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">EPI's</h1>
          <div className="flex items-center gap-4">
            {/* Botão para retornar para a lista de funcionários */}
            <Link href="/epis/saidas">
              <Button
                variant="default"
                className="bg-[#78b49a] text-white hover:bg-[#78b49a]/80 border-gray-300 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2"
              >
                <IoExit className="h-4 w-4" aria-hidden="true" />
                Saídas
              </Button>
            </Link>
            {/* Botão para criar epi */}
            <CreateEpiButton />
          </div>
        </div>
        {/* Tabela de epis */}
        <EpisListTable />
      </main>
    </div>
    </div>
  );
};

export default Epis;
