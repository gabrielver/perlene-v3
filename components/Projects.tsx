import React from 'react'
import { motion } from 'framer-motion'
import Services from './Services';

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4];
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
   
    className='project'>
       <div className="title">
       <div className="section_title">
       <h1 >Instant Relaxation</h1>
        <h2>Nos <br /> Services</h2>
       </div>
        <h3>L'institut Per'Lène vous accueille et vous invite à découvrir un lieu privilégié de détente, <br />
             dédié à la beauté des ongles, à la minceur et au bien-être.</h3>
       </div>       
            <Services />
            <div className="arrow_drawing">scroll droite</div>
           <div className="circles">
           <div className="sm_circle">
           <p> N’hésitez <br /> pas à nous <br /> Contactez </p>
               
            </div>
            <div className="bg_circle">
            <p>Pour prendre rendez vous ou pour des renseignements supplémentaires</p>
            </div>
          
           </div>
      
    </motion.div>
  )
}

 