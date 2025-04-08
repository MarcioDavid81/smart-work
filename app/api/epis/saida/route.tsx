// /app/api/epis/saida/route.ts
import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { epiId, employeeId, quantity } = await req.json();

    if (!epiId || !employeeId || !quantity) {
      return NextResponse.json({ message: "Dados inválidos" }, { status: 400 });
    }

    const epi = await db.epi.findUnique({
      where: { id: epiId },
    });

    if (!epi) {
      return NextResponse.json({ message: "EPI não encontrado" }, { status: 404 });
    }

    if (epi.quantity < quantity) {
      return NextResponse.json({ message: "Quantidade insuficiente em estoque" }, { status: 400 });
    }

    // Atualiza o estoque
    await db.epi.update({
      where: { id: epiId },
      data: {
        quantity: {
          decrement: quantity,
        },
      },
    });

    // Registra a saída no histórico
    await db.epiExit.create({
      data: {
        epiId,
        employeeId,
        quantity,
      },
    });

    return NextResponse.json({ message: "Saída registrada com sucesso" }, { status: 200 });

  } catch (error) {
    console.error("Erro ao registrar saída:", error);
    return NextResponse.json({ message: "Erro interno do servidor" }, { status: 500 });
  }
}


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const employeeId = searchParams.get("employeeId");
  const epiId = searchParams.get("epiId");

  try {
    const filters: any = {};

    if (employeeId) filters.employeeId = Number(employeeId);
    if (epiId) filters.epiId = Number(epiId);

    const exits = await db.epiExit.findMany({
      where: filters,
      include: {
        epi: true,
        employee: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    return NextResponse.json(exits);
  } catch (error) {
    console.error("Erro ao buscar saídas de EPIs:", error);
    return NextResponse.json({ message: "Erro ao buscar saídas de EPIs" }, { status: 500 });
  }
}
