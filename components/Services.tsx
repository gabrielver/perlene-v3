import React from 'react'
import Image from 'next/image'
import Ongles from '../asset/ongles.jpg'
import Infra from '../asset/infra.jpg'
import Cryo from '../asset/cryo.jpg'
import Presso from '../asset/presso.jpg'
import { motion, transform } from 'framer-motion'
import Arrow from "../asset/Arrow.svg"
type Props = {}

function Services({}: Props) {
  return (
    <div className='services'>
        <div className='card' id='ongle'> 
                        <Image 
                        src={Ongles} alt="ongle" />               
                        <div className='card_info'>
                        <div className="line">
                        <h4>Onglerie </h4>
                        </div>
                            <div className="price">
                            <div className="presta">
                                <p>Extension de l'ongle en gel</p>
                                <span>70€</span>
                            </div>
                            <div className="presta">
                                <p>Remplissage à 3/4 semaines</p>
                                <span>49€</span>
                            </div>
                            <div className="presta">
                                <p>Pose de gel semi-permanent</p>
                                <span>38€</span>
                            </div>
                            <div className="presta">
                                <p>Dépose complète de gel permanent</p>
                                <span>25€</span>
                            </div>
                            <div className="presta">
                                <p>Dépose de gel semi-permanent</p>
                                <span>20€</span>
                            </div>
                            <div className="presta">
                                <p>Réparation d'un ongle</p>
                                <span>10€</span>
                            </div>
                            </div>
                        </div>
            <div className="button">
                        <motion.div   
                        transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}
                        whileInView={{x: [0, 50, 0]}}         
            className="arrow_drawing"><a href="#presso"><Arrow /></a></motion.div>
                        </div>
                    </div>
        <div className='card' id='presso'> 
                        <Image 
                        src={Presso} alt="presso" />               
                        <div className='card_info'>
                        <div className="line">
                        <h4>Pressothérapie </h4>
                        </div>
                            <p>La présotherapie est particulierement indiquée et éfficace contre la cellulite. <br /> Détoxifie le corps en profondeur et apporte un sentiment de bien etre tout en boostant la circulation sanguine et le système lymphatique. </p>
                        </div>
                        <div className="button">
                        <motion.div 
            className="arrow_drawing_back"><a href="#ongle"><Arrow /></a></motion.div>
                        <motion.div            
            className="arrow_drawing"><a href="#cryo"><Arrow /></a></motion.div>
                        </div>
                    </div>
        <div className='card' id='cryo'> 
                        <Image 
                        src={Cryo} alt="cryo" />               
                        <div className='card_info'>
                        <div className="line">
                        <h4>Cryolipolyse </h4>
                        </div>
                            <p>Méthode d'amincissement par le froid qui consiste à l'élimination progréssive et naturelle des amas graisseux localisés. <br />Ainsi les cellules adipeuses s'autodétruisent, ce qui entraine un amincissement ainsi qu'une réduction de la cellulite</p>
                        </div>
                        <div className="button">
                        <motion.div 
            className="arrow_drawing_back"><a href="#presso"><Arrow /></a></motion.div>
                        <motion.div            
            className="arrow_drawing"><a href="#infra"><Arrow /></a></motion.div>
                        </div>
                    </div>
        <div className='card' id='infra'> 
                        <Image 
                        src={Infra} alt="ongle" />               
                        <div className='card_info'>
                        <div className="line">
                        <h4>Infrathérapie </h4>
                        </div>
                            <p>Un dome diffusant des ondes infrarouges long. <br />Bénéfique pour l'organisme, d'une température comprise entre 41 et 81 degrès. <br /> La sudation obtenue permet d'évacuer les toxines et de bruler un nombre important de calories sans effort.</p>
                        </div>
                        <div className="button">
                        <motion.div 
                         transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}
                         whileInView={{x: [0, -50, 0]}}  
            className="arrow_drawing_back"><a href="#cryo"><Arrow /></a></motion.div>
                        </div>
                    </div>
    </div>
  )
}

export default Services