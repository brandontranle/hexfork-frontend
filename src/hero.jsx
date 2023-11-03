import Menu from "./menu"
import "./App.css"
import "./styles.css"
import { useState } from "react"


export const Hero = () => {
    const [socialOpen, setSocialOpen] = useState(false)
    const toggleMenu = () => setSocialOpen(!socialOpen)

    return (
        <div className="container">
            <div className="slide">

            </div>
            <div className="slide-active">


            </div>
            <div className="content-container">
                <div className="hero-content">
                    <span className="-decor">
                        <div className="animation-row">
                            <span className="text-row">
                                An Independent Game Studio
                            </span>
                        </div>
                    </span>
                    <h1>
                        <div className="animation-row animation-row-title">
                            <span className="-line">
                                Hexfork <br />
                                <p className="hero-sub-header">#Build The Impossible</p>

                            </span>

                        </div>
                    </h1>
                    <div className="animation-row">
                        <span>
                            <p className="hero-description"> A Startup Fueling Imagination, Crafting Worlds.</p>

                        </span>

                    </div>
                    <div className="animation-row">
                        <span>
                            <a href="https://discord.gg/JsFHKk2Rx6" className="btn --large">
                                <span className="btn-stroke"></span>
                                <span className="btn-label"> Join us! </span>
                            </a>
                        </span>
                    </div>

                </div>
            </div >
            <div className={`social ${socialOpen ? 'opened' : ''}`}>
                <span className="social__label">
                    Social Media
                </span>
                <div className="social__wrap">

                </div>
                <button className="social__trigger" onClick={toggleMenu}>

                </button>
            </div>
        </div >

    )


}

export default Hero;