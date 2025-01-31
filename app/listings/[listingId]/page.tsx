import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getReservations';

interface IParams {
  listingId: string;
}

// Tipizza `params` correttamente come `{ listingId: string }`
const ListingPage = async ({ params }: { params: IParams }) => {
  // Passa un oggetto a getListingById e getReservations
  const listing = await getListingById({ listingId: params.listingId });
  const reservations = await getReservations({ listingId: params.listingId });
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
