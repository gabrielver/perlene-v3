import React from 'react'
import Image from 'next/image'
import Ongles from '../asset/ongles.jpg'
import Infra from '../asset/infra.jpg'
import Cryo from '../asset/cryo.jpg'
import Presso from '../asset/presso.jpg'
type Props = {}

function Services({}: Props) {
  return (
    <div className='services'>
        <div className='card'> 
                        <Image 
                        src={Ongles} alt="ongle" />               
                        <div className='card_info'>
                        <div className="line">
                        <h4>Onglerie </h4>
                        </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis voluptate! Ullam, magnam explicabo eos provident veniam dolores illo recusandae ab quasi quis ea at ipsum magni officiis eum nulla?</p>
                        </div>
                       
                    </div>
        <div className='card'> 
                        <Image 
                        src={Presso} alt="presso" />               
                        <div className='card_info'>
                        <div className="line">
                        <h4>Pressothérapie </h4>
                        </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis voluptate! Ullam, magnam explicabo eos provident veniam dolores illo recusandae ab quasi quis ea at ipsum magni officiis eum nulla?</p>
                        </div>
                       
                    </div>
        <div className='card'> 
                        <Image 
                        src={Cryo} alt="ongle" />               
                        <div className='card_info'>
                        <div className="line">
                        <h4>Cryolipolyse </h4>
                        </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis voluptate! Ullam, magnam explicabo eos provident veniam dolores illo recusandae ab quasi quis ea at ipsum magni officiis eum nulla?</p>
                        </div>
                       
                    </div>
        <div className='card'> 
                        <Image 
                        src={Infra} alt="ongle" />               
                        <div className='card_info'>
                        <div className="line">
                        <h4>Infrathérapie </h4>
                        </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis voluptate! Ullam, magnam explicabo eos provident veniam dolores illo recusandae ab quasi quis ea at ipsum magni officiis eum nulla?</p>
                        </div>
                       
                    </div>
    </div>
  )
}

export default Services