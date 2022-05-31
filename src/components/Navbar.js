import React from 'react'
import sli from './img/si1.png'
import { BiAlignJustify } from "react-icons/bi";
import { IconContext } from "react-icons";


export default class Navbar extends React.Component {
    render() {
        return (
            <section id="header" className="sticky-top">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <IconContext.Provider value={{ color: "white",size: "2em", className: "global-class-name" }}>
                                <BiAlignJustify/>
                            </IconContext.Provider>
                        </button>
                        <div class="collapse navbar-collapse header-left" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#mint">Mint</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#hero">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#meet">meet</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#uti">manifesto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#spe">PURPOSE</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#eco">benefit</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#roadmap">roadmap</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#team">team</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#faq">FAQ</a>
                                </li>
                            </ul>
                            <div className="header-right ms-auto">
                                <ul>
                                    <li className="mobileLeft mobicon">
                                        <a target="blank" href="https://opensea.io/collection/"><img src={sli} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <div className="container-fluid">
                <div className="header-wrapper">
                    <button className="bar d-block d-lg-none mobilebtn" onClick={this.ToggleButton}>
                        <div className="bar d-block d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    <div className="header-bar-wrapper" style={styles}>
                        <div className="header-left">
                            <ul>
                                <li className="mobileLeft"><a className="active" href="#mint">MINT</a></li>
                                <li className="mobileLeft"><a href="#hero">HOME</a></li>
                                <li className="mobileLeft"><a href="#meet">meet</a></li>
                                <li className="mobileLeft"><a href="#uti">MANIFESTO</a></li>
                                <li className="mobileLeft"><a href="#spe">PURPOSE</a></li>
                                <li className="mobileLeft"><a href="#eco">benefit</a></li>
                                <li className="mobileLeft"><a href="#roadmap">roadmap</a></li>
                                <li className="mobileLeft"><a href="#team">team</a></li>
                                <li className="mobileLeft"><a href="#faq">faq</a></li>
                            </ul>
                        </div>

                        </div>
                    </div>
                </div>
            </div> */}


            </section>
    
  )
}
}

