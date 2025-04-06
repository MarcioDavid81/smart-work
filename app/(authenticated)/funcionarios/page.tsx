"use client";

import { Button } from "@/components/ui/button";
import Sidebar from "../_components/Sidebar";
import CreateEmployeeButton from "./_components/createEmployee";
import EmployeesListTable from "./_components/employeesListTable";

const Funcionarios = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      {/* Conteúdo principal */}
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
  );
};

export default Funcionarios;
