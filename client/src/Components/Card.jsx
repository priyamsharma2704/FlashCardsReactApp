import {useState} from 'react';
import EditImg from '../assets/pen-to-square-regular.svg';
import DeleteImg from '../assets/trash-can-regular.svg';
import CardModal from './CardModal';
import { useModalStore } from '../Store/store';
function Card({data, index})
{
    const [showAnswer, setShowAnswer] = useState(false);

    const [isInEditMode, setIsInEditMode] = useState(false);
    const {setQuestion, setAnswer, setId} = useModalStore();

    function handleShowAnswer()
    {
        console.log("show/hide")
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

    function handleDelete()
    {
        console.log("del")
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
                        <img className='delete' src={DeleteImg} onClick={handleDelete}/>
                    </div>
            </div>
            {isInEditMode && <CardModal index={index} cardId={data.id} closeModal={closeModal}></CardModal>}
        </>
    )
}

export default Card;