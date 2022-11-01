import React from 'react'



 type Props = {openModal: any}

 function ModalPresso({openModal}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
              <h4>PressoTherapie</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos ad modi beatae vel perferendis ullam consequatur labore dolorum quis?</p>
              <div className="close" onClick={() => openModal(false)}>+</div>
            </div>
           </div>
           
    )
}

export default ModalPresso
