import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

const CreateEmployeeButton = () => {

  return (
    <>
      <Link href="/funcionarios/novo">
        <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-100 border-gray-300 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2">
          <PlusIcon className="h-4 w-4" aria-hidden="true" />
          Adicionar Funcionário
        </Button>
      </Link>
    </>
  );
};

export default CreateEmployeeButton;
