import React from 'react'
import Phone from '../asset/phone-call.svg'
import Mail from '../asset/mail.svg'
import Localisation from '../asset/localisation.svg'

type Props = {}

function ContactType({}: Props) {
  return (
   <div className="contact_type">
     <div className="contact 1">
        <div className="logo">
        <Phone />
        </div>
    
    
    <div className="line"></div>
    <p>Téléphone</p>
    <span>02 97 14 23 74</span>
  </div>
     <div className="contact 2">
    <div className="logo">
    <Localisation />
    </div>
    
   
    <div className="line"></div>
    <p>Adresse</p>
    <span>14 Avenue du Maréchal Foch <br /> 56 400 AURAY</span>
  </div>
     <div className="contact 3">
        <div className="logo">
        <Mail />
        </div>
      
   
    <div className="line"></div>
    <p>Email</p>
    <span>contact@perlene.fr</span>
  </div>
   </div>
  )
}

export default ContactType