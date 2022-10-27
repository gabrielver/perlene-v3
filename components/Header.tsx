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
        <a href="">Le Salon</a>
        <a href="">Nos Service</a>
        <a href="">Contact</a>
       </div>
      
    </header>
  )
}

