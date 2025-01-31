import { Listing, Reservation, User } from '@prisma/client';

// Creare tipi "Safe" è un'ottima pratica per trasformare i tipi generati dal backend (come quelli di Prisma) in versioni più compatibili con i contesti in cui saranno usati, come frontend o API.
export type SafeListing = Omit<Listing, 'createdAt'> & {
  createdAt: string;
};

// Omit è un utility type di TypeScript. Viene usato per creare un nuovo tipo basato su uno esistente, escludendo alcune proprietà specificate.
// Qui, si parte dal tipo Reservation e si rimuovono le proprietà:
// Dopo aver escluso quelle proprietà con Omit, le stesse vengono ridefinite con nuovi tipi.
// In questo caso vengono ridefinite come stringhe, in quanto inizialmente sono Date.
export type SafeReservation = Omit<
  Reservation,
  'createdAt' | 'startDate' | 'endDate' | 'listing'
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
