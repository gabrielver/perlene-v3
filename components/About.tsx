import React from 'react'
import { motion, useScroll} from 'framer-motion';
import Image from 'next/image';
import ContactType from './ContactType';
import Logo from '../asset/imgLogoRandom.png';
import Main from '../asset/mainFleur.svg';
import Fleur4 from '../asset/fleur4.svg';
import Vernis from '../asset/vernis1.png';

type Props = {}




export default function About({}: Props) {


  return (
  <div className="about">
    <div className="about_title">
    <h1>A Propos de l'Institut</h1>
    <h2>Nous 
     <br /> Contactez</h2>
    </div>
    <div className="about_info">
      <motion.div 
   initial={{opacity: 0, x: -100, y:0}}
   whileInView={{opacity: 1, x: 0, y:0}}
   transition={{ ease: "easeIn"}}
      className="green">
        <div className="white">
          <div className="text">
          <p>Notre priorité reste la convivialité et l'authenticité! <br />
              Nous sommes à votre écoute et vous proposons des soins adaptés à vos souhaits. </p>
            <p>Tout les vernis et autres produits utlisés dans notre salon, sont choisis avec soin.</p>
          </div>
      
        </div>
      </motion.div>
    </div>
    <div className="main"><Main/></div>
    <div className="fleur4">
      <Fleur4/>
    </div>
    <div className="vernis">
      <Image src={Vernis} alt="dessin vernis" />
    </div>
    <div className="about_contact ">
      <motion.div 
       initial={{opacity: 0, x: 100, y:0}}
       whileInView={{opacity: 1, x: 0, y:0}}
       transition={{ ease: 'easeIn', delay:0.2}}
      className="green">
        <div className="white">
        <div className="contact">
         <ContactType />
        </div>
        </div>
      </motion.div>
    </div>
    
  </div>

  )
}

