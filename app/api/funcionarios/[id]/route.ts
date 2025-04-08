import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const employee = await db.employee.findUnique({
      where: { id: Number(id) },
    });

    if (!employee) {
      return NextResponse.json({ message: "Funcionário não encontrado" }, { status: 404 });
    }

    return NextResponse.json(employee);
  } catch (error) {
    return NextResponse.json({ message: "Erro ao buscar funcionário" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await req.json();

  try {
    const updated = await db.employee.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: "Erro ao atualizar funcionário" }, { status: 500 });
  }
}
