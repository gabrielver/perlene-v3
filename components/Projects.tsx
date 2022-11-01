import React from 'react'
import { motion, transform } from 'framer-motion'
import Services from './Services';
import Logo from "../asset/logo.svg"
import Arrow from "../asset/Arrow.svg"
import Fleur6 from "../asset/fleur6.svg"

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4];


    
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
   
    className='project'>
      <div className="logo"><Logo/></div>
       <div className="title">
       <div className="section_title">
       <h1 >Instant Relaxation</h1>
        <h2>Nos <br /> Services</h2>
       </div>
        <h3>L'institut Per'Lène vous accueille et vous invite à découvrir un lieu privilégié de détente, <br />
             dédié à la beauté des ongles, à la minceur et au bien-être.</h3>
       </div>       
            <Services />
            {/* <motion.button 
            // animate={{x: [0,50,0]}}
            transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}
            whileInView={{x: [0, 50, 0]}}
            // viewport={{once: false}}
            className="arrow_drawing"><a href="#presso"><Arrow /></a></motion.button> */}
           <div className="circles">
            <div className="fleur6"><Fleur6/></div>
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

 