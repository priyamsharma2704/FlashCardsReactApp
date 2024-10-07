import {create} from 'zustand';

export const useAddCardStore = create((set)=>({
    showAddCardModal :false,
    setShowAddCardModal :(flag)=> set((state)=>({showAddCardModal: flag}))
}));

export const useModalStore = create((set) =>({
    question: "",
    answer: "",
    id:0,
    setQuestion: (ques)=> set((state)=>({question: ques})),
    setAnswer: (ans) =>set((state)=>({answer: ans})),
    setId: (numId) =>set((state) =>({id: numId}))
}));

export const useCardListStore = create((set)=>({
    cardsList: [],
    setCardList: (item)=>set((state)=>({cardsList: [...state.cardsList, item]})),
    updateCardList:(item)=>set((state)=>({cardsList: item}))
}));
