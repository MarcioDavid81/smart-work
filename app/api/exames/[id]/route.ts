import { db } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

   export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
     const { id } = params;
   
     try {
       const epi = await db.medicalExam.findUnique({
         where: { id: Number(id) },
       });
   
       if (!epi) {
         return NextResponse.json({ message: "Exame não encontrado" }, { status: 404 });
       }
   
       return NextResponse.json(epi);
     } catch (error) {
       return NextResponse.json({ message: "Erro ao buscar exame" }, { status: 500 });
     }
   }

   export async function PUT (req: NextRequest, { params }: { params: { id: string } }) {
     const { id } = params;
     const body = await req.json();
   
     try {
       const updated = await db.medicalExam.update({
         where: { id: Number(id) },
         data: {
           ...body,
           expiration: new Date(body.expiration),
         }
       });
   
       return NextResponse.json(updated);
     } catch (error) {
       return NextResponse.json({ message: "Erro ao atualizar exame" }, { status: 500 });
     }
   }

   export async function DELETE (req: NextRequest, { params }: { params: { id: string } }) {
        const { id } = params;
    
        try {
        await db.medicalExam.delete({
            where: { id: Number(id) },
        });
    
        return NextResponse.json({ message: "Exame deletado com sucesso" });
        } catch (error) {
        return NextResponse.json({ message: "Erro ao deletar exame" }, { status: 500 });
        }
   }