import {create} from 'zustand';

export const useAddCardStore = create((set)=>({
    showAddCardModal :false,
    setShowAddCardModal :()=> set((state)=>({showAddCardModal: !state.showAddCardModal}))
}));