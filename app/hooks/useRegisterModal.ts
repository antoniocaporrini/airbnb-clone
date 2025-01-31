import { create } from 'zustand';

// Abbiamo creato un hook che contiene lo store del modal della registrazione

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// set fa parte di Zustand, e grazie ad esso "setta" lo state
const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
