import { useAddCardStore } from "../Store/store"; // Import your Zustand store
import CardModal from "../Components/CardModal.jsx";

function AddCard() {
  // Access state and action from Zustand store
    const { showAddCardModal, setShowAddCardModal } = useAddCardStore();

    // Function to handle the button click and toggle modal state
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
