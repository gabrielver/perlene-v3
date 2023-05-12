import React from 'react'
import Phone from '../asset/phone-call.svg'
import Mail from '../asset/mail.svg'
import Localisation from '../asset/localisation.svg'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import Image from 'next/image'

type Props = {}

function ContactType({}: Props) {

  const router = useRouter();
  return (   
   <div className="contact_type">
     <div className="contact 1">
        <div className="logo">
        {/* <Phone /> */}
        {/* <object data={Phone} type="image"></object> */}
        <img src="/phone-call.svg" alt="téléphone" />
        </div>
    
    
    <div className="line"></div>
    <p>Téléphone</p>
    <span>
      <a className='link' href="tel://+0297142374">02 97 14 23 74</a>
      </span>
  </div>
     <div className="contact 2">
    <div className="logo">
    <img src="/localisation.svg" alt="localisation" />
    </div>
    
   
    <div className="line"></div>
    <p>Adresse</p>
    <span>14 Avenue du Maréchal Foch <br /> 56 400 AURAY</span>
  </div>
     <div className="contact 3">
        <div className="logo">
        <img src="/mail.svg" alt="mail" />
        </div>
      
   
    <div className="line"></div>
    <p>Email</p>
    <span className='link' onClick={() => router.push('mailto:perlene56@gmail.com')}>perlene56@gmail.com</span>
  </div>
   </div>
  )
}

export default ContactType