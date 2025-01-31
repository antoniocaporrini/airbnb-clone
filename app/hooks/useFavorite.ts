// Funzionalità e Logica
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';

// Il nostro caro utente
import { SafeUser } from '../types';

// Il componente che useremo se l'utente non è loggato
import useLoginModal from './useLoginModal';

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoritedIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation(); // Previene che andiamo alla pagina del listing

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh(); // Refresha l'UI non la pagina. (provoca un soft refresh, preservando lo stato dell'app).
        toast.success('Success');
      } catch (error) {
        toast.error('Error');
      }
    },
    [listingId, currentUser, hasFavorited, loginModal, router]
  );
  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
