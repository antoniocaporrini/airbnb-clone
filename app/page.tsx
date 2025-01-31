import Container from './components/Container';
import ClientOnly from './components/ClientOnly';
import EmptyState from './components/EmptyState';
import getListings, { IListingsParams } from './actions/getListings';
import ListingCard from './components/listings/ListingCard';
import getCurrentUser from './actions/getCurrentUser';

interface HomeProps {
  searchParams: Promise<IListingsParams>; // Tipizza searchParams come Promise
}

// Next.js 15 -> `searchParams` è una Promise, quindi va atteso con `await`
const Home = async ({ searchParams }: HomeProps) => {
  const resolvedSearchParams = await searchParams; // Risolviamo la Promise
  const listings = await getListings(resolvedSearchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24 
            grid 
            grid-cols-1 
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5 
            xl:grid-cols-6 
            2xl:grid-cols-8 gap-8"
        >
          {listings.map((listing) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
