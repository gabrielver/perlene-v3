//import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'


type Props = {}

export default function Header({}: Props) {
  return (
    <header >
       <div className="logo">
        <p>Institut Perlene</p>
       </div>
       <div className="menu">
        <a href="#hero">Le Salon</a>
        <a href="#project">Nos Service</a>
        <a href="#about">Contact</a>
       </div>
      
    </header>
  )
}

