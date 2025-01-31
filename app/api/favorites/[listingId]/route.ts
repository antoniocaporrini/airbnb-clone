import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  // Estrai il listingId dall'URL
  const url = new URL(request.url);
  const listingId = url.pathname.split('/').pop(); // Prendi l'ultimo segmento dell'URL

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoritedIds = [...(currentUser.favoritedIds || [])];
  favoritedIds.push(listingId);

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoritedIds },
  });

  return NextResponse.json(user);
}

export async function DELETE(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  // Estrai il listingId dall'URL
  const url = new URL(request.url);
  const listingId = url.pathname.split('/').pop();

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoritedIds = [...(currentUser.favoritedIds || [])];
  favoritedIds = favoritedIds.filter((id) => id !== listingId);

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoritedIds },
  });

  return NextResponse.json(user);
}
