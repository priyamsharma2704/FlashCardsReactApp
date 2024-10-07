
import EditImg from '../assets/pen-to-square-regular.svg';
import DeleteImg from '../assets/trash-can-regular.svg';

import Card from './Card.jsx';
import { useCardListStore } from '../Store/store';
function CardList()
{
    const {cardsList} = useCardListStore();
    return(
        <>
            <div className='cards-list'>
                <Card></Card>
                {cardsList.map((card,idx) =>(
                    <Card key={idx} data={card}></Card>
                ))}
            </div>
        </>
    )
}

export default CardList;