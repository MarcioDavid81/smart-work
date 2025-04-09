import { auth } from "@clerk/nextjs/server";
import Sidebar from "../_components/Sidebar";
import { redirect } from "next/navigation";
import CreateExamButton from "./_components/CreateExamButton";
import ExamListTable from "./_components/ExamListTable";

const Exames = async () => {

  const { userId } = await auth();
      if (!userId) {
        redirect("/");
      }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      {/* Conteúdo principal */}
      <main className="flex-1 p-8 text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Exames</h1>
          {/* Botão para criar exame */}
          <CreateExamButton />
        </div>
        {/* Tabela de exames */}
        <ExamListTable />
      </main>
    </div>
  );
};

export default Exames;
