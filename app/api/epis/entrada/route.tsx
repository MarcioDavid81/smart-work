import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { epiId, quantity } = await req.json();

  if (!epiId || !quantity) {
    return NextResponse.json({ message: "Dados inválidos" }, { status: 400 });
  }

  try {
    // Busca o EPI atual
    const epi = await db.epi.findUnique({ where: { id: Number(epiId) } });

    if (!epi) {
      return NextResponse.json({ message: "EPI não encontrado" }, { status: 404 });
    }

    // Atualiza a quantidade (entrada)
    const updatedEpi = await db.epi.update({
      where: { id: Number(epiId) },
      data: {
        quantity: epi.quantity + Number(quantity),
      },
    });

    return NextResponse.json(updatedEpi, { status: 200 });
  } catch (error) {
    console.error("Erro ao registrar entrada de EPI:", error);
    return NextResponse.json({ message: "Erro interno ao registrar entrada" }, { status: 500 });
  }
}
