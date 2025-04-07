import Sidebar from "../_components/Sidebar";
import CreateEpiButton from "./_components/CreateEpiButton";
import EpisListTable from "./_components/EpiListTable";


const Epis = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      {/* Conteúdo principal */}
      <main className="flex-1 py-4 px-8 text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">EPI's</h1>
          {/* Botão para criar epi */}
          <CreateEpiButton />
        </div>
        {/* Tabela de epis */}
        <EpisListTable />
      </main>
    </div>
  );
};

export default Epis;
