import React from 'react'



 type Props = {openInfra: any}

 function ModalInfra({openInfra}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
              <h4>InfraTherapie</h4>
              <h5>Le déroulement de la séance</h5>
              <p>Dans un lieu paisible, vous êtes allongez sur le matelas du Dôme émettant des rayons infrarouges longs (IRL) pénétrant jusqu'à 4 cm sous la peau.
              <br />
              <br />
              A l’aide de poignées fixées sur chaque côtés nous faisons coulissez le Dôme, jusqu’à hauteur du menton.
              <br />
              <br />
              Pendant la séance, vous pouvez changer de position autant de fois que vous le souhaitez et vous laisser allez à un pur moment de détente.
              <br />
              La séance dure <span>40 minutes</span>.
              <br />
              <br />
              La température intérieure est comprise <span>entre 40°C et 80°C</span> selon le programme choisi.
              <br />
              </p>
              <h6>Les bienfaits des soins aux infrarouges longs. </h6>
              <p>Une séance Sauna Japonais provoque une transpiration profonde, composée en moyenne de 80% d’eau et de 20% de graisse, de toxines, de substances nocives et de métaux lourds. <span> Draine et purifie l'organisme.</span> 
                <br />
                <br />
                Elle atténue l’aspect peau d’orange grâce à la relance des mécanismes de drainage, l’élimination et le déstockage qui <span> facilitent une diminution de la masse graisseuse</span>, une régénération cutanée et un affinement de la silhouette.
              <br />
              <br />
              Idéal pour la récupération chez les sportifs.
              <br />
              <br />
              Renforcent les défenses naturelles contre les affections quotidiennes et stimule le système immunitaire.
              <br />
              <br />
              Relance les fonctions émonctoires du corps.
              <br />
              <br />
              Diminue les oedèmes et oxygène les tissus.
              <br />
Pour optimiser les effets des IRL nous proposons <span>les tisanes Malva et Slim Booster</span> pour une action sur la perte de poids .
              </p>
              <div className="close" onClick={() => openInfra(false)}>+</div>
              <div className="close2" onClick={() => openInfra(false)}>Retour</div>
            </div>
           </div>
           
    )
}

export default ModalInfra
