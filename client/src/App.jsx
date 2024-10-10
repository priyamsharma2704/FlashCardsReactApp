import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import "./style.css";
import { useCardListStore } from './Store/store.js';
import AddCard from "./Components/AddCard.jsx";
import CardList from './Components/CardList.jsx';

function App() 
{
const { updateCardList} = useCardListStore();
    async function getCards()
    {
        try{
            const resp = await fetch("http://localhost:5000/getFlashCards");
            const data = await resp.json();
            updateCardList(data);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>
    {
        getCards();
    },[]);
    return (
        <>
            <div className='container'>
                <AddCard></AddCard>
                <CardList></CardList>
            </div>
        </>
    )
}

export default App
