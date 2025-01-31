import { create } from 'zustand';

// Abbiamo creato un hook che contiene lo store del modal della registrazione

interface SearchModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// set fa parte di Zustand, e grazie ad esso "setta" lo state
const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSearchModal;
