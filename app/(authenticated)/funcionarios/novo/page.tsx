import React from "react";
import Sidebar from "../../_components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function NewEmployeePage() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      {/* Conteúdo principal */}
      <main className="flex-1 p-8 text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Novo Funcionário</h1>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p>Preencha o formulário para criar um novo funcionário.</p>
          <ScrollArea className="text-sm text-gray-500 mt-2 border border-gray-300 rounded-lg p-4 h-[430px] overflow-y-auto">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Nome do Funcionário"
            />
            <label htmlFor="name">Enderço</label>
            <input
              type="text"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Endereço do Funcionário"
            />
            <label htmlFor="name">Cidade</label>
            <input
              type="text"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Cidade doFuncionário"
            />
            <label htmlFor="name">Email</label>
            <input
              type="mail"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Email do Funcionário"
            />
            <label htmlFor="name">Telefone</label>
            <input
              type="phone"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Telefone do Funcionário"
            />
            <label htmlFor="name">Data de Nascimento</label>
            <input
              type="date"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Nascimento do Funcionário"
            />
            <label htmlFor="name">Admissão</label>
            <input
              type="date"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Admissão do Funcionário"
            />
            <label htmlFor="name">CPF</label>
            <input
              type="text"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="CPF do Funcionário"
            />
            <label htmlFor="name">RG</label>
            <input
              type="text"
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="RG do Funcionário"
            />
            <label htmlFor="name">Empregador</label>
            <select
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="empregador1">Empregador 1</option>
              <option value="empregador2">Empregador 2</option>
              <option value="empregador3">Empregador 3</option>
            </select>
            <label htmlFor="name">Departamento</label>
            <select
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="departamento1">Departamento 1</option>
              <option value="departamento2">Departamento 2</option>
                <option value="departamento3">Departamento 3</option>
            </select>
            <label htmlFor="name">Função</label>
            <select
              id=""
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="funcao1">Função 1</option>
              <option value="funcao2">Função 2</option>
              <option value="funcao3">Função 3</option>
            </select>
          </ScrollArea>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              Salvar
            </button>
            <button className="bg-gray-300 text-gray-800 rounded-lg px-4 py-2 hover:bg-gray-400 ml-2">
              Cancelar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
