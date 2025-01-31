import prisma from '@/app/libs/prismadb';
import { SafeUser } from '../types';

// "I" sta per Interface
interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};

    // Se cerchiamo per id, troveremo la listing tramite id
    if (listingId) {
      query.listingId = listingId;
    }

    // Se cerchiamo per id utente, troveremo tutto ciò che ha lo user in termini di trips/reservations
    if (userId) {
      query.userId = userId;
    }

    // Se cerchiamo per autore invece, troveremo tutte le reservations che gli altri utenti hanno fatto ai nostri listing
    if (authorId) {
      query.listing = { userId: authorId };
    }

    // utilizza il metodo findMany di Prisma per cercare più record nella tabella
    // il risultato sarà un array di oggetti che corrispondono ai criteri specificati.
    // Questo codice cerca tutte le reservations che corrispondono ai criteri definiti in query. Per ogni reservation, include anche i dettagli del relativo listing. Infine, ordina i risultati in ordine decrescente di creazione.
    const reservations = await prisma.reservation.findMany({
      // Esempio: Se query è { userId: '123' }, Prisma cercherà tutte le reservations associate a quell'utente.
      where: query,
      include: {
        // La proprietà include permette di includere informazioni aggiuntive da altre tabelle (relazioni definite nel modello Prisma).
        listing: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
