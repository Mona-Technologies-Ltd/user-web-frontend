import { create } from 'zustand';

const useModalStore = create((set) => ({
  showModal: false, // Initial state
  openModal: () => set({ showModal: true }), // Action to open the modal
  closeModal: () => set({ showModal: false }), // Action to close the modal
}));

export default useModalStore;
