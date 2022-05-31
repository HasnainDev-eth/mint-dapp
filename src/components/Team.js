import React from 'react'
import t1 from './img/t1.png'
import t2 from './img/t2.png'
import t3 from './img/t3.png'
import t4 from './img/t4.png'
import t5 from './img/t5.png'
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

function Team() {
  return (
//    <!-- team area start --> 
   <section id="team">
   <div class="container">
       <div class="team-wrapper">
           <div class="team-heading text-center">
               <h2>OUR TEAM</h2>
               <p>Hype Birdz is designed by a team of dedicated members, full of experience. The team consists of
                   Marketing geniuses, reputed artists, blockchain professionals, and successful entrepreneurs.
                   The team's loyalty and commitment to the collection are more than just a successful sale. An
                   attempt is made to create an extremely high-quality art collection to unite a powerful community.</p>

              
           </div>
           <div class="team-block">
               <div class="team-block-content text-center">
                   <div class="team-block-content-img">
                       <img src={t1} alt="images not found"/>
                   </div>
                   <div class="team-block-content-text">
                       <h4> Ash.</h4>
                       <p><em>“Special Purpose”</em></p>
                       <span>Founder &amp; CEO</span>
                       <ul>
                           <li><a href="http://www.twitter.com/"><span><FiTwitter /></span></a></li>
                           <li><a href="http://www.instagram.com/"><span><FiInstagram /></span></a></li>
                       </ul>
                   </div>
               </div>
               <div class="team-block-content text-center">
                   <div class="team-block-content-img">
                       <img src={t2}alt="images not found"/>
                   </div>
                   <div class="team-block-content-text">
                       <h4>Lando.</h4>
                       <p><em>“Bright Eyes”</em></p>
                       <span>Developer</span>
                       <ul>
                           <li><a href="http://www.twitter.com/"><span><FiTwitter /></span></a></li>
                           <li><a href="http://www.instagram.com/"><span><FiInstagram /></span></a></li>
                       </ul>
                   </div>
               </div>
               <div class="team-block-content text-center">
                   <div class="team-block-content-img">
                       <img src={t3} alt="images not found"/>
                   </div>
                   <div class="team-block-content-text">
                       <h4>Brian.</h4>
                       <p><em>“Mongo”</em></p>
                       <span>Communication</span>
                       <ul>
                           <li><a href="http://www.twitter.com/"><span><FiTwitter /></span></a></li>
                           <li><a href="http://www.instagram.com/"><span><FiInstagram /></span></a></li>
                       </ul>
                   </div>
               </div>
               <div class="team-block-content text-center">
                   <div class="team-block-content-img">
                       <img src={t4} alt="images not found"/>
                   </div>
                   <div class="team-block-content-text">
                       <h4>Dani.</h4>
                       <p><em>“Cabro”</em></p>
                       <span>Art Director</span>
                       <ul>
                           <li><a href="http://www.twitter.com/"><span><FiTwitter /></span></a></li>
                           <li><a href="http://www.instagram.com/"><span><FiInstagram /></span></a></li>
                       </ul>
                   </div>
               </div>

               <div class="team-block-content1 text-center">
                   <div class="team-block-content-img">
                       <img src={t5} alt="images not found"/>
                   </div>
                   <div class="team-block-content-text">
                       <h4>Laura.</h4>
                       <p><em>“Arty”</em></p>
                       <span>Artist</span>
                       <ul>
                           <li><a href="http://www.twitter.com/"><span><FiTwitter /></span></a></li>
                           <li><a href="http://www.instagram.com/"><span><FiInstagram /></span></a></li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
//  <!-- team area end -->
  )
}

export default Team