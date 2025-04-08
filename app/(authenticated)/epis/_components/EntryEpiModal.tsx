'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface AddEpiEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  epi: {
    id: number;
    name: string;
  };
  onEntryAdded: () => void;
}

export function EntryEpiModal({ isOpen, onClose, epi, onEntryAdded }: AddEpiEntryModalProps) {
  const [entryQuantity, setEntryQuantity] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [supplier, setSupplier] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const handleSave = async () => {
    if (!entryQuantity || isNaN(Number(entryQuantity))) {
      toast.error("Informe uma quantidade válida.");
      return;
    }
  
    const response = await fetch("/api/epis/entrada", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        epiId: epi.id,
        quantity: Number(entryQuantity),
      }),
    });
  
    if (response.ok) {
      toast.success("Entrada registrada com sucesso!");
      onEntryAdded();
      onClose();
      setEntryQuantity(0); // Limpa o campo
    } else {
      toast.error("Erro ao registrar entrada de EPI.");
    }
  };
  

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registrar entrada de {epi.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Quantidade"
            value={entryQuantity}
            onChange={(e) => setEntryQuantity(Number(e.target.value))}
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            placeholder="Fornecedor (opcional)"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
          <Input
            placeholder="Observações"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button onClick={handleSave} className="bg-blue-600 text-white">
            Salvar entrada
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
