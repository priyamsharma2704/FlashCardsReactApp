
import Card from './Card.jsx';
import { useCardListStore } from '../Store/store';
function CardList()
{
    const {cardsList} = useCardListStore();
    return(
        <>
            <div className='cards-list'>
                {cardsList.map((card, idx) =>(
                    <Card key={idx} data={card} index={idx}></Card>
                ))}
            </div>
        </>
    )
}

export default CardList;