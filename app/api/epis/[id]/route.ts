import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const epi = await db.epi.findUnique({
      where: { id: Number(id) },
    });

    if (!epi) {
      return NextResponse.json({ message: "Epi não encontrado" }, { status: 404 });
    }

    return NextResponse.json(epi);
  } catch (error) {
    return NextResponse.json({ message: "Erro ao buscar epi" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await req.json();
  
    try {
      const updated = await db.epi.update({
        where: { id: Number(id) },
        data: {
          ...body,
          expiration: new Date(body.expiration),
        },
      });
  
      return NextResponse.json(updated);
    } catch (error) {
      console.error("Erro ao atualizar EPI:", error);
      return NextResponse.json({ message: "Erro ao atualizar epi" }, { status: 500 });
    }
  }
  
