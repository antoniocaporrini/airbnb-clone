import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getReservations';

interface IParams {
  listingId?: string;
}

// significa che ci aspettiamo un oggetto con una proprietà chiamata params, la cui struttura è definita dall'interfaccia IParams.
const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params); // getListingById utilizza il valore di params.listingId per recuperare i dati relativi a un determinato annuncio (listing).
  const reservations = await getReservations(params); // in questo caso params è solo listingId
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
