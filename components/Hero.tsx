import React from 'react'
// import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import Arrow from "../asset/right-arrow.svg"
import Woman from "../asset/womanBack.svg"
type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="hero">
        <div className="circle"></div>
        <div className="door">
            <div className="door1">
                <div className="door2">
                    <div className="door3"></div>
                </div>
            </div>
        </div>
        <div className="main-title">
        <h1>Un Havre de Paix <br /> au coeur du <br /> Pays D'Auray</h1>
        <button>
            <p>Prendre <br /> Rendez Vous</p>
            <div className="arrow">
               <Arrow />
            </div>
        </button>
        </div>
        <div className="hour">
            <h2>Horaires d'Ouvertures</h2>
            <p className='hour-text'>Mardi-Vendredi: <span>9h-18h30</span></p>
            <p className='hour-text'>Samedi: <span>9h-17h</span></p>
            <p className='hour-text'>Dimanche: <span>Fermer</span></p>
        </div>
        <div className="woman"><Woman/></div>
    </div>
  )
}

