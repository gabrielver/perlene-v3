import React from 'react'



 type Props = {openCryo: any}

 function ModalCryo({openCryo}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
              <h4>Cryolipolyse</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos ad modi beatae vel perferendis ullam consequatur labore dolorum quis?</p>
              <div className="close" onClick={() => openCryo(false)}>+</div>
            </div>
           </div>
           
    )
}

export default ModalCryo
