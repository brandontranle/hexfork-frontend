import "./styles.css"
import "./App.css"
import logo from "./logo.png";
import { useState } from 'react'


export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)



    return (
        <div className="home-page-menu"  >
            <div className="container">
                <div className="content-inner">
                    <div className="menu_logo">
                        <div className="wrap-logo">
                            <img alt="logo" />
                        </div>
                    </div>
                    <div className="menu-wrap">
                        <div className="menu-desktop">
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="/careers" className="menu__link">
                                        CAREERS
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/press" className="menu__link">
                                        PRESS
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/support" className="menu__link">
                                        SUPPORT
                                    </a>
                                </li>
                                <li className="menu-item external-link">
                                    <a href="https://forums.hexfork.org" className="menu__link">
                                        FORUMS
                                    </a>
                                </li>
                                <li className="menu-item external-link">
                                    <a href="https://shop.hexfork.org" className="menu__link">
                                        MERCH
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/support" className="menu__link">
                                        CONTACT
                                    </a>
                                </li>

                                <div className="menu-right">
                                    <li className="menu-item">
                                        <a className="menu-trigger" onClick={toggleMenu}>
                                            <span className="menu-trigger-line" />
                                            <span className="menu-trigger-line" />
                                        </a>
                                    </li>
                                </div>



                            </ul>

                        </div>
                    </div>

                </div>
            </div >

            {/*Menu appeared from hamburger menu (menu-trigger) */}
            <div className={`${menuOpen ? 'opened' : ''}`}>
                <div className="menu-layer__cover">
                    <div className="menu-layer">
                        <div className="container">
                            <div className="menu__wrap menu-layer__top">
                                <div className="content-inner">
                                    <div className="menu_logo">
                                        <div className="wrap-logo">
                                            <a href="/">
                                                <img alt="logo" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="menu__close">
                                        <a className="menu-trigger" onClick={toggleMenu}>
                                            <span className="menu-trigger-line" />
                                            <span className="menu-trigger-line" />
                                        </a>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default Menu;