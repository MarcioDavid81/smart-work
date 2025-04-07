import { NextResponse } from 'next/server'
import { db } from '@/lib/prisma'

export async function GET() {
  try {
    const epis = await db.epi.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(epis)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar EPIs' }, { status: 500 })
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, description, certification, supplier, expiration, quantity } = body;

    if (!name || !description || !certification || !supplier || !expiration || quantity === undefined) {
      return NextResponse.json({ error: "Dados obrigatórios faltando" }, { status: 400 });
    }

    const epi = await db.epi.create({
      data: {
        name,
        description,
        certification,
        supplier,
        expiration: new Date(expiration),
        quantity: Number(quantity),
      },
    });

    return NextResponse.json(epi, { status: 201 });
  } catch (error) {
    console.error("Erro ao cadastrar EPI:", error);
    return NextResponse.json({ error: "Erro ao cadastrar EPI" }, { status: 500 });
  }
}
