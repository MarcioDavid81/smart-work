import { auth } from "@clerk/nextjs/server";
import CreateEmployeeButton from "./_components/createEmployee";
import EmployeesListTable from "./_components/employeesListTable";
import { redirect } from "next/navigation";
import { Title } from "../_components/Title";
import { db } from "@/lib/prisma";

const Funcionarios = async () => {

  const { userId } = await auth();
      if (!userId) {
        redirect("/");
      }


  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
    <div className="min-h-screen flex bg-gray-50">
      <main className="flex-1 py-4 px-4 text-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <Title>Funcionários</Title>
          {/* Botão para criar funcionário */}
          <CreateEmployeeButton />
        </div>
        {/* Tabela de funcionários */}
        <EmployeesListTable />
      </main>
    </div>
    </div>
  );
};

export default Funcionarios;
