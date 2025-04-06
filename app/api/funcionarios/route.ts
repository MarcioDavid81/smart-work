import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';

export async function GET() {
  try {
    const colaboradores = await db.employee.findMany({
      orderBy: { name: 'asc' }, // opcional: ordena por nome
    });

    return NextResponse.json(colaboradores);
  } catch (error) {
    console.error('Erro ao buscar colaboradores:', error);
    return NextResponse.json(
      { message: 'Erro ao buscar colaboradores' },
      { status: 500 }
    );
  }
}
