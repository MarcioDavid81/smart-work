import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CreateExamButton from "./_components/CreateExamButton";
import ExamListTable from "./_components/ExamListTable";
import { Title } from "../_components/Title";

const Exames = async () => {

  const { userId } = await auth();
      if (!userId) {
        redirect("/");
      }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
    <div className="min-h-screen flex bg-gray-50">
      {/* Conteúdo principal */}
      <main className="flex-1 p-8 text-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <Title>Exames</Title>
          {/* Botão para criar exame */}
          <CreateExamButton />
        </div>
        {/* Tabela de exames */}
        <ExamListTable />
      </main>
    </div>
    </div>
  );
};

export default Exames;
