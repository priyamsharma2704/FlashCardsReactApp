
import EditImg from '../assets/pen-to-square-regular.svg';
import DeleteImg from '../assets/trash-can-regular.svg';

import Card from './Card.jsx';
import { useCardListStore } from '../Store/store';
function CardList()
{
    const {cardsList} = useCardListStore();
    cardsList.map((card,idx)=>(console.log(card)))
    return(
        <>
            <div className='cards-list'>
                {cardsList.map((card) =>(
                    <Card key={card.id} data={card}></Card>
                ))}
            </div>
        </>
    )
}

export default CardList;