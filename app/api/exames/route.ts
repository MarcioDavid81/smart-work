import { db } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET () {
    try {
        const exames = await db.medicalExam.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                employee: {
                    select: {
                        name: true,
                    },
                },
            }
        })
        return NextResponse.json(exames)
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar exames' }, { status: 500 })
    }
}

export async function POST (request: Request) {
    const { date, type, result, expiration, employeeId } = await request.json()

    try {
        const exame = await db.medicalExam.create({
            data: {
                date,
                type,
                result,
                expiration,
                employeeId,
            },
        })
        return NextResponse.json(exame)
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao criar exame' }, { status: 500 })
    }
}