import {useState} from 'react';
import EditImg from '../assets/pen-to-square-regular.svg';
import DeleteImg from '../assets/trash-can-regular.svg';
import CardModal from './CardModal';
import { useModalStore, useCardListStore } from '../Store/store';
function Card({data, index})
{
    const [showAnswer, setShowAnswer] = useState(false);
    const [isInEditMode, setIsInEditMode] = useState(false);

    const {cardsList, updateCardList} = useCardListStore();
    const {setQuestion, setAnswer, setId} = useModalStore();

    function handleShowAnswer()
    {
        setShowAnswer(!showAnswer);
    }

    function handleEdit()
    {
        setQuestion(data.question);
        setAnswer(data.answer);
        setId(data._id);
        setIsInEditMode(!isInEditMode);
    }

    function handleDelete(index)
    {
        deleteCard();
    }

    async function deleteCard()
    {
        console.log(data._id);
        let cardsListCopy = [...cardsList];
        cardsListCopy.splice(index, 1);
        updateCardList(cardsListCopy);

        try{
            console.log("try")
            const resp = await fetch(`http://localhost:5000/deleteCard/${data._id}`, {
                method: 'DELETE'
            });
            console.log("dele");
            const resp2 = await resp.json();
            console.log("card deleted successfully", resp2);
        }
        catch(err)
        {
            console.log("failed to delete the card", err);
        }
    }

    function closeModal()
    {
        setIsInEditMode(false);
    }

    return(
        <>
            <div className='card'>
                    <p className='ques'>Question: {data.question}</p>
                    <p className="ans">Answer: {showAnswer && <span>{data.answer}</span>}</p>
                    <button className="show-hide-btn" onClick={handleShowAnswer}>Show/Hide</button>
                    <div className="btns-con">
                        <img className='edit' src={EditImg} onClick={handleEdit}></img>
                        <img className='delete' src={DeleteImg} onClick={()=>handleDelete(index)}/>
                    </div>
            </div>
            {isInEditMode && <CardModal index={index} cardId={data.id} closeModal={closeModal}></CardModal>}
        </>
    )
}

export default Card;