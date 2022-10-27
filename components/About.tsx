import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactType from './ContactType';

type Props = {}

// 

export default function About({}: Props) {
  return (
  <div className="about">
    <div className="about_title">
    <h1>A Propos de l'Institut</h1>
    <h2>Nous 
     <br /> Contactez</h2>
    </div>
    <div className="about_info">
      <div className="green">
        <div className="white">
          <p>Notre priorité reste la convivialité et l'authenticité! <br />
              Nous sommes à votre écoute et vous proposons des soins adaptés à vos souhaits. </p>
            <p>Tout les vernis et autres produits utlisés dans notre salon, sont choisis avec soin <br />et respectueux de l’envirronnement.</p>
        <div className="logos">
          <img src="" alt="logo1" />
          <img src="" alt="logo2" />
          <img src="" alt="logo3" />
          <img src="" alt="logo4" />
        </div>
  
        </div>
      </div>
    </div>
    <div className="about_contact ">
      <div className="green">
        <div className="white">
        <div className="contact">
         <ContactType />
        </div>
        </div>
      </div>
    </div>
  </div>

  )
}

