import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  // Il numero 12 indica il cost factor (salt rounds), ovvero il numero di iterazioni (2^12) per calcolare l'hash.
  // Valori più alti aumentano la sicurezza ma richiedono più tempo per elaborare.
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  // Classe fornita da Next.js che viene utilizzata per creare risposte HTTP personalizzate nelle route handlers
  // (ad esempio, quando si implementano API route o middleware).

  // NextResponse.json(user) viene usato per restituire al client i dati del nuovo utente in formato JSON
  return NextResponse.json(user);
}
