import Xmark from "../assets/xmark-solid.svg";
import { useModalStore, useCardListStore, useAddCardStore } from "../Store/store";
function CardModal()
{
    const {question, answer, setQuestion, setAnswer} = useModalStore();
    const {setCardList} = useCardListStore();
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
        console.log("Save")
        setCardList({question, answer});
        setQuestion("");
        setAnswer("");
        setShowAddCardModal(false);
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
                    {/* <img id="close-btn" src={Xmark}/> */}
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