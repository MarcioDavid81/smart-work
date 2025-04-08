"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ExitModalProps {
  epi: any;
  onClose: () => void;
}

export function ExitEpiModal({ epi, onClose }: ExitModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registrar Saída de EPI</DialogTitle>
        </DialogHeader>
        {/* Formulário de saída aqui */}
        <p>Registrar saída de: {epi.name}</p>
      </DialogContent>
    </Dialog>
  );
}
