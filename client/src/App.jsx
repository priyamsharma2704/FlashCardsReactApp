import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import "./style.css";

import AddCard from "./Components/AddCard.jsx";
import CardList from './Components/CardList.jsx';

function App() 
{
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
