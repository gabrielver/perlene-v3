import React from 'react'



 type Props = {openModal: any}

 function ModalPresso({openModal}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
              <h4>PressoTherapie</h4>
              <p>Méthode provoquant l’activation de la circulation veineuse et lymphatique.</p>
              <h5>Comment se déroule une séance de pressothérapie ?</h5>
              <p>Par mesure d’hygiène le patient enfile un sous-pantalon à usage unique, glisse ensuite dans une combinaison intégrale montant jusque sous la poitrine qui s'ajuste sur les cotés, selon la morphologie de la personne. 
                <br />
               <br /> Cette dernière se met en position allongée sur le dos avec les jambes légèrement surélevées. Le drainage mécanique et pneumatique qui opère un massage par compression et décompression d’accessoires va alors s’amorcer. Les alvéoles se remplissent d’air à un rythme varié et exercent des pressions multiples et douces de la cheville jusqu'au dessous de la poitrine. <span>La circulation est donc activée et les toxines mieux éliminées.</span>
                <br />
                <br />
                La séance dure <span>45 minutes</span>.</p>
                <h6>Quels sont les bienfaits de la pressothérapie ?</h6>
                <p>La pressothérapie procure, dès la première séance, une sensation de bien-être sur les plans circulatoire et physique. Plus la fréquence des séances sera élevée, plus vous obtiendrez des résultats sur votre santé et votre silhouette.
                <br />
                <br />
                Améliore la circulation sanguine.
                <br />
                <br />
                Résorbe la cellulite et par conséquent affine la silhouette.
                <br />
                Disparition de la sensation de jambes lourdes.
                <br />
                <br />
                Contribue à augmenter les fonctions d’élimination des déchets et à lutter contre l’accumulation des toxines par drainage. C’est un complément <span>idéal dans tous les soins d’amincissement et anticellulite.</span>
                Très bon moyen de récupérer rapidement et lutter contre la fatigue pour le sportif.
                </p>
              <div className="close" onClick={() => openModal(false)}>+</div>
              <div className="close2" onClick={() => openModal(false)}>Retour</div>
            </div>
           </div>
           
    )
}

export default ModalPresso
