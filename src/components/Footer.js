import React from 'react'
import s1 from './img/si1.png'
import s2 from './img/si3.png'
import s3 from './img/si5.png'

function Footer() {
  return (
    <footer>
        <div class="container-fluid">
            <div class="footer-wrapper">
                <div class="align-items-center">
                    <div >
                        <div class="footer-right text-right">
                            <ul className='d-flex justify-content-center align-items-center'>
                                <li><a href="#" target="blank"><img src={s1} alt="images not found"/></a></li>
                                
                                <li><a href="https://twitter.com/" target="blank"><img src={s2}
											alt="images not found"/></a></li>
                                
                                <li><a href="https://discord.gg/" target="blank"><img src={s3} alt="images not found"/></a>
                                </li>
                            </ul>
                            <div class="d-flex justify-content-center align-items-center footer-right-text">
                                <ul className='d-flex justify-content-center align-items-center'>
                                    
                                    <li id="cp">© Hype Birdz Inc.</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer