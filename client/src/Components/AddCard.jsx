import { useAddCardStore } from "../Store/store"; // Import your Zustand store
import CardModal from "../Components/CardModal.jsx";

function AddCard() 
{
    const { showAddCardModal, setShowAddCardModal } = useAddCardStore();

    const handleAddCard = () => {
        setShowAddCardModal(!showAddCardModal);
    };

    return (
        <>
        <div className="add-card">
            <button id="add-card-btn" onClick={handleAddCard}>
            {showAddCardModal ? "Hide Card" : "Add Card"}
            </button>
        </div>

        {showAddCardModal && <CardModal></CardModal>}
        </>
    );
}

export default AddCard;
