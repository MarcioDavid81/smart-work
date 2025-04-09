import { auth } from "@clerk/nextjs/server";
import CreateEmployeeButton from "./_components/createEmployee";
import EmployeesListTable from "./_components/employeesListTable";
import { redirect } from "next/navigation";

const Funcionarios = async () => {

  const { userId } = await auth();
      if (!userId) {
        redirect("/");
      }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
    <div className="min-h-screen flex bg-gray-50">
      <main className="flex-1 py-4 px-8 text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Funcionários</h1>
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
