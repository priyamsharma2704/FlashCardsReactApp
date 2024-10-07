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
        console.log(data.id);
        setQuestion(data.question);
        setAnswer(data.answer);
        setId(data.id);
        setIsInEditMode(!isInEditMode);
    }

    function handleDelete(index)
    {
        let cardsListCopy = [...cardsList];
        cardsListCopy.splice(index, 1);
        updateCardList(cardsListCopy);
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