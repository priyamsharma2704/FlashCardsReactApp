import Xmark from "../assets/xmark-solid.svg";

function CardModal()
{
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

                <label for="question">Question:</label>
                <textarea className="input" id="question" placeholder='Type the question here...' rows="3"></textarea>
                
                <label for="answer">Answer:</label>
                <textarea className="input" id="answer" placeholder='Type the answer here...' rows="3"></textarea>
                <div className="save-btn-con">
                    <button id='save-btn'>Save</button>
                </div>
            </div>
        </>
    )
}

export default CardModal;