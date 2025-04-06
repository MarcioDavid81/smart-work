import Sidebar from "../_components/Sidebar";
import CreateEmployeeButton from "./_components/createEmployee";

const Funcionarios = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      {/* Conteúdo principal */}
      <main className="flex-1 p-8 text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Funcionários</h1>
          <CreateEmployeeButton />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p>Bem-vindo ao sistema de gestão Smart Work.</p>
          <p className="text-sm text-gray-500 mt-2">
            Selecione uma funcionalidade na barra lateral para começar.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Funcionarios;
