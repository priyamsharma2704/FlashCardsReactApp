import Xmark from "../assets/xmark-solid.svg";
//import uuid from 'react-uuid';
import { useModalStore, useCardListStore, useAddCardStore } from "../Store/store";

function CardModal({index, cardId, closeModal})
{
    const {id, question, answer, setQuestion, setAnswer} = useModalStore();
    const {cardsList, setCardList, updateCardList} = useCardListStore();
    const {setShowAddCardModal} = useAddCardStore();

    function handleQuestion(e)
    {
        setQuestion(e.target.value);
    }

    function handleAnswer(e)
    {
        setAnswer(e.target.value);
    }

    function handleSave()
    {
        if(question != "" && answer != "")
        {
            //console.log(cardId);
            if(index != undefined || index != null)
            {
                let cardsListCopy = [...cardsList];
                cardsListCopy[index] = {question, answer, id};

                updateCardList(cardsListCopy);
            }
            else
            {
                setCards(question, answer);
                
            }

            setShowAddCardModal(false);
            if(closeModal != undefined)
                closeModal(false);
        }

        setQuestion("");
        setAnswer("");
    }

    async function setCards(question, answer)
    {
        console.log(JSON.stringify({question, answer}))
        try{
            const resp = await fetch("http://localhost:5000/addFlashCard", 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({question, answer})
                });

                const data = await resp.json();
                console.log("Card added successfully", data.card._id);
                let cardId = data.card._id;
                setCardList({question, answer, cardId});
        }
        catch(err)
        {
            console.log('Error adding card:', err);
        }
    }

    return(
        <>
            <div id="add-card-modal" className="modal">
                <h2>Add Flashcard</h2>
                <div className="wrapper">
                    <div className="error-con">
                        <span className="hide" id="error">
                            Input fields cannot be empty!
                        </span>
                    </div>
                    <img id="close-btn" src={Xmark}/>
                </div>

                <label >Question:</label>
                <textarea className="input" id="question" placeholder='Type the question here...' rows="3" onChange={(e)=>handleQuestion(e)} value={question}></textarea>
                
                <label >Answer:</label>
                <textarea className="input" id="answer" placeholder='Type the answer here...' rows="3" onChange={(e)=>handleAnswer(e)} value={answer}></textarea>
                
                <div className="save-btn-con">
                    <button id='save-btn'onClick={handleSave}>Save</button>
                </div>
            </div>
        </>
    )
}

export default CardModal;