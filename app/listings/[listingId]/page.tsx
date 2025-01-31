import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getReservations';

interface IParams {
  listingId: string;
}

// Next.js 15 -> params è una Promise, quindi va atteso con `await`
const ListingPage = async ({ params }: { params: Promise<IParams> }) => {
  const resolvedParams = await params; // Risolviamo la Promise
  const listingId = resolvedParams.listingId;

  if (!listingId) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  // Passa un oggetto con listingId alle funzioni
  const listing = await getListingById({ listingId });
  const reservations = await getReservations({ listingId });
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
