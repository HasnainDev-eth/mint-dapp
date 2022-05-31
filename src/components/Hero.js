import React from 'react'
import hero from './img/hero.jpeg'
import parot from './img/parot.gif'

import ApeClub from './ApeClub'
function Hero() {
  return (
    <section id="hero">
        <img src= {hero} alt="images not found"/>
        
        <div class="hero-content">
            <div class="container">
                <div class="hero-wrapper text-center">
                <a  className='hero-button' href="#mint">Mint Now</a>
                {/* <ApeClub/> */}
                    {/* <div class="hero-heading">
                        {/* <!-- <img src="img/dall.png" alt="images not found"> -->
                        <!-- <h2>Hype  Birdz </h2> -->
                        <!-- <h2>SpeakeasY</h2> --> 
                    </div> */}
                    
                     {/* <div class="hero-oval">
                        <div class="hero-oval-img">
                            <img src={parot} alt="images not found"/>
                        </div> 
                        
                         <div class="hero-oval-link">
                            <ul>
                           
                                <li><a href="#">Mint is open</a></li>
                                <li><a target="blank" href="https://discord.gg/">Join our discord</a></li>
                                 {/* <!-- <li><a href="javascript:void(0);" class="js-video-button" data-video-id="IMs1iLDgdMc">Watch our story</a></li> --> 
                                <li><a href="https://opensea.io/collection/">Opensea profile</a></li> 
                            </ul>
                        </div> 
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero