"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { FaSpinner } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { EditEmployeeModal } from "./editEmployeeModal";

interface Employee {
  id: number;
  name: string;
  phone: string;
  department: string;
  employer: string;
  status: string;
}

export default function EmployeesListTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;

  async function fetchEmployees() {
    try {
      const res = await fetch("/api/funcionarios");
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchEmployees();
  }, []);

  function handleOpenEditModal(employee: Employee) {
    setSelectedEmployee(employee);
    setIsEditModalOpen(true);
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false);
    setSelectedEmployee(null);
  }

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Funcionários Cadastrados</h2>
        <Input
          type="text"
          placeholder="Buscar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">
          <FaSpinner className="animate-spin mx-auto mb-2" size={24} />
          <p className="text-lg">Carregando...</p>
        </div>
      ) : (
        <>
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left border-b">Nome</th>
                <th className="p-2 text-left border-b">Telefone</th>
                <th className="p-2 text-left border-b">Setor</th>
                <th className="p-2 text-left border-b">Empregador</th>
                <th className="p-2 text-left border-b">Status</th>
                <th className="p-2 text-left border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {paginatedEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50">
                  <td className="p-2 border-b">{emp.name}</td>
                  <td className="p-2 border-b">{emp.phone}</td>
                  <td className="p-2 border-b">{emp.department}</td>
                  <td className="p-2 border-b">{emp.employer}</td>
                  <td className="p-2 border-b">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        emp.status === "Ativo"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-2 border-b">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => handleOpenEditModal(emp)}
                            className="hover:opacity-80 transition"
                          >
                            <Pencil size={20} className="text-[#78b49a]" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Editar</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          

          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentPage === page
                    ? "bg-[#78b49a] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <EditEmployeeModal
            isOpen={isEditModalOpen}
            onClose={handleCloseEditModal}
            employee={selectedEmployee}
            onUpdate={fetchEmployees}
          />          
        </>
      )}
    </div>
  );
}
