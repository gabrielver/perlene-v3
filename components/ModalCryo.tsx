import React from 'react'



 type Props = {openCryo: any}

 function ModalCryo({openCryo}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
              <h4>Cryolipolyse</h4>
              <p>La cryolipolyse est <span>une technique d'amincissement</span>, qui permet grâce à l'utilisation du froid et de son action sur les amas graisseux, de <span>redessiner la silhouette</span> en éliminant les bourrelets disgracieux, à différents niveaux comme, le ventre, l'intérieur des cuisses, les hanches .
                <br />
                <br />La cryolipolyse n'est pas une méthode d'amaigrissement généralisé mais d'un traitement efficace contre l'amincissement et la cellulite localisé.</p>
              <h5>Le déroulement de la séance</h5>
              <p>Lors de la séance, nous mettons en place une membrane imprégnée de gel afin de protéger la peau et plaçons ensuite simplement l'applicateur (Cryode) adapté , sur la zone à traiter. 
                <br /> Le bourrelet est alors fermement aspiré par l'appareil à main de manière à le plaquer contre les deux panneaux réfrigérants.
                <br />
                <br /> Un froid intense, mais tout à fait supportable, est ressenti au niveau de la zone traitée pendant les premières minutes du traitement.
                 <span> La température est comprise entre -5° et -9°</span>
                 <br />
                <br /> Progressivement, pendant la séance la sensation de froid disparaît et le traitement est totalement indolore.
                  La durée de la séance est comprise <span>entre 45 et 70 minutes</span>.
                  <br />
                <br /> Une fois cristallisées, les cellules adipeuses sont éliminées naturellement par l'organisme dans les jours et semaines suivantes.
                  Une à trois séances sont nécessaires, selon l'épaisseur du tissu adipeux.*
                  <br />
                <br />  Un <span>résultat notable est obtenu en 30 à 40 jours</span> et l'élimination des cellules graisseuses peut perdurer jusqu'à 6 mois !
                  Des sensations de courbatures pendant un ou plusieurs jours, (tout comme après une séance de sport) peuvent apparaître.
                 <br /> Une séance de cryolipolyse ne demande aucun temps de récupération et ne nécessite aucune interruption de travail ensuite.
              </p>
              <div className="close" onClick={() => openCryo(false)}>+</div>
              <div className="close2" onClick={() => openCryo(false)}>Retour</div>
            </div>
           </div>
           
    )
}

export default ModalCryo
