import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

export async function DELETE(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  // Estrai reservationId dall'URL
  const url = new URL(request.url);
  const reservationId = url.pathname.split('/').pop(); // Prende l'ultimo segmento dell'URL

  if (!reservationId || typeof reservationId !== 'string') {
    throw new Error('Invalid ID');
  }

  // Assicura che solo chi ha effettuato la prenotazione o il proprietario dell'annuncio possa cancellarla
  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  });

  return NextResponse.json(reservation);
}
