import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

export async function DELETE(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  // Estrai listingId dall'URL
  const url = new URL(request.url);
  const listingId = url.pathname.split('/').pop(); // Prendi l'ultimo segmento dell'URL

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id, // Assicura che solo il proprietario possa eliminare
    },
  });

  return NextResponse.json(listing);
}
