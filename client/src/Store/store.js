import {create} from 'zustand';

export const useAddCardStore = create((set)=>({
    showAddCardModal :false,
    setShowAddCardModal :()=> set((state)=>({showAddCardModal: !state.showAddCardModal}))
}));

export const useModalStore = create((set) =>({
    question: "",
    answer: "",
    setQuestion: (ques)=> set((state)=>({question: ques})),
    setAnswer: (ans) =>set((state)=>({answer: ans}))
}));

export const useCardListStore = create((set)=>({
    cardsList: [],
    setCardList: (item)=>set((state)=>({cardsList: [...state.cardsList, item]}))
}))