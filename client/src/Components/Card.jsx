import EditImg from '../assets/pen-to-square-regular.svg';
import DeleteImg from '../assets/trash-can-regular.svg';

function Card()
{
    return(
        <>
            <div className='card'>
                    <p className='ques'>Question</p>
                    <p className="ans">Answer</p>
                    <button className="show-hide-btn">Show/Hide</button>
                    <div className="btns-con">
                        <img className='edit' src={EditImg}></img>
                        <img className='delete' src={DeleteImg}/>
                    </div>
            </div>
        </>
    )
}

export default Card;