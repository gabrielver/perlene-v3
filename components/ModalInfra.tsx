import React from 'react'



 type Props = {openInfra: any}

 function ModalInfra({openInfra}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
              <h4>InfraTherapie</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos ad modi beatae vel perferendis ullam consequatur labore dolorum quis?</p>
              <div className="close" onClick={() => openInfra(false)}>+</div>
            </div>
           </div>
           
    )
}

export default ModalInfra
