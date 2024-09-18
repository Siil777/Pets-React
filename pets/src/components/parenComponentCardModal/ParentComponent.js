import React, {useState} from 'react';
import ModalWindow from '../modal/Modals.js';
import Card from '../cards/PetsCards.js';

const ParentModalCard = () => {
    const [open,setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleOpenWindow = (card) => {
        setOpen(true);
        setSelectedCard(card);
    }
    const handleCloseModal = () => {
        setOpen(false);
    }
    return(
      <div>
          <Card onClickOpenModal={handleOpenWindow}/>
          {open &&(
            <ModalWindow open={open} card={selectedCard} onClose={handleCloseModal} />
          )}
      </div>
    )
}
export default ParentModalCard;
