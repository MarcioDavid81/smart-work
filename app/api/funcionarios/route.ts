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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const colaborador = await db.employee.create({
      data: {
        name: body.name,
        adress: body.adress,
        city: body.city,
        email: body.email,
        phone: body.phone,
        birthDate: new Date(body.birthDate),
        admission: new Date(body.admission),
        cpf: body.cpf,
        rg: body.rg,
        employer: body.employer,
        department: body.department,
        function: body.function,
        status: body.status,
      },
    });

    return NextResponse.json(colaborador, { status: 201 });
  } catch (error) {
    console.error('Erro ao cadastrar colaborador:', error);
    return NextResponse.json({ message: 'Erro ao cadastrar' }, { status: 500 });
  }
}
