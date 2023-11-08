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
                                <p className="hero-sub-header">Build The Impossible</p>

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
                    <ul className="social-channels">
                        <li className="social-channels__item">
                            <a href="https://twitter.com/larianstudios" target="_blank" rel="noopener noreferrer" className="social-channels__link" data-v-396ca694=""><svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" data-v-396ca694=""><path fill="#FFF" fillRule="evenodd" d="M22 2.117a8.988 8.988 0 0 1-2.593.71A4.525 4.525 0 0 0 21.393.329a9.006 9.006 0 0 1-2.867 1.096 4.514 4.514 0 0 0-7.691 4.117A12.808 12.808 0 0 1 1.532.826a4.513 4.513 0 0 0 1.396 6.026 4.486 4.486 0 0 1-2.044-.564l-.001.057a4.519 4.519 0 0 0 3.621 4.426 4.56 4.56 0 0 1-2.038.077 4.52 4.52 0 0 0 4.216 3.135 9.058 9.058 0 0 1-5.606 1.93c-.364 0-.723-.02-1.076-.061a12.78 12.78 0 0 0 6.918 2.027c8.304 0 12.843-6.877 12.843-12.842 0-.195-.003-.39-.012-.584A9.158 9.158 0 0 0 22 2.117" opacity=".35"></path></svg></a>
                        </li>

                        <li className="social-channels__item">
                            <a href="https://store.steampowered.com/search/?publisher=Hexfork" target="_blank" rel="noopener noreferrer" className="social-channels__link" data-v-396ca694=""><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" data-v-396ca694=""><path fill="#FFF" fillRule="evenodd" d="M17.386 8.165a2.77 2.77 0 0 1-5.538 0 2.77 2.77 0 0 1 5.538 0M12.54 8.16c0 1.147.932 2.076 2.08 2.076 1.15 0 2.08-.93 2.08-2.076a2.078 2.078 0 0 0-2.08-2.076c-1.148 0-2.08.929-2.08 2.076m-5.636 8.53l-1.353-.557c.24.498.655.915 1.206 1.145a2.345 2.345 0 0 0 3.06-1.259c.24-.576.242-1.21.004-1.788a2.336 2.336 0 0 0-2.99-1.294l1.399.578a1.72 1.72 0 0 1 .928 2.25 1.724 1.724 0 0 1-2.254.926M10.981 0C17.067 0 22 4.925 22 11s-4.933 11-11.019 11A11.019 11.019 0 0 1 .379 13.998l4.224 1.743a3.12 3.12 0 1 0 6.174-.76l3.746-2.669.094.002a4.157 4.157 0 0 0 4.155-4.15 4.157 4.157 0 0 0-8.311 0v.055l-2.626 3.8a3.105 3.105 0 0 0-1.93.536L.001 10.118C.45 4.456 5.193 0 10.981 0" opacity=".35"></path></svg></a>
                        </li>
                        <li className="social-channels__item">
                            <a href="https://discord.gg/JsFHKk2Rx6" s target="_blank" rel="noopener noreferrer" className="social-channels__link" data-v-396ca694=""><svg width="22" height="25" viewBox="0 0 22 25" xmlns="http://www.w3.org/2000/svg" data-v-f64068b6="" data-v-396ca694=""><path d="M14.562 16.27s-.452-.54-.83-1.004c1.647-.465 2.275-1.483 2.275-1.483a7.19 7.19 0 01-1.445.741 9.01 9.01 0 01-1.822.54 8.804 8.804 0 01-3.254-.012 9.583 9.583 0 01-1.847-.54 7.363 7.363 0 01-.917-.427c-.038-.026-.076-.038-.113-.063-.025-.013-.038-.026-.05-.026a4.408 4.408 0 01-.352-.213s.603.993 2.198 1.47c-.376.477-.841 1.03-.841 1.03-2.777-.088-3.832-1.897-3.832-1.897 0-4.008 1.809-7.262 1.809-7.262C7.35 5.78 9.059 5.817 9.059 5.817l.125.151c-2.261.64-3.291 1.633-3.291 1.633s.276-.15.74-.351c1.345-.59 2.413-.742 2.853-.792.075-.013.138-.025.214-.025.766-.1 1.633-.126 2.538-.025 1.193.138 2.475.49 3.781 1.193 0 0-.992-.942-3.128-1.583l.176-.2s1.721-.038 3.518 1.306c0 0 1.81 3.254 1.81 7.262 0-.013-1.056 1.797-3.833 1.885M19.412 0H2.576A2.58 2.58 0 000 2.576v16.836a2.58 2.58 0 002.576 2.575h14.248l-.666-2.299 1.608 1.483 1.52 1.394L22 24.915V2.575A2.598 2.598 0 0019.412 0M8.72 10.453c-.717 0-1.282.616-1.282 1.383 0 .766.578 1.381 1.282 1.381.716 0 1.281-.615 1.281-1.381.013-.767-.565-1.383-1.281-1.383m4.586 0c-.717 0-1.282.616-1.282 1.383 0 .766.578 1.381 1.282 1.381.716 0 1.281-.615 1.281-1.381 0-.767-.578-1.383-1.281-1.383" fill="#FFF" fillRule="evenodd" opacity=".35" data-v-f64068b6=""></path></svg></a>
                        </li>
                        <li className="social-channels__item">
                            <a href="https://www.facebook.com/Hexfork/" target="_blank" rel="noopener noreferrer" className="social-channels__link" data-v-396ca694=""><svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" data-v-396ca694=""><path fill="#FFF" fillRule="evenodd" d="M10.223 7.123h-3.48V4.84c0-.856.566-1.057.966-1.057h2.456V.015L6.783 0c-3.757 0-4.61 2.813-4.61 4.611v2.513H-.002v3.885h2.173V22h4.57V11.008h3.082l.4-3.884z" opacity=".35"></path></svg></a>
                        </li>
                        <li className="social-channels__item">
                            <a href="https://www.instagram.com/hexfork/" target="_blank" rel="noopener noreferrer" className="social-channels__link" data-v-396ca694=""><svg width="22" height="22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-v-396ca694=""><title>Instagram</title> <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g fill="#FFF"><path opacity=".35" d="M11 1.982c2.937 0 3.285.012 4.445.064 1.073.049 1.655.228 2.043.379.513.2.88.438 1.265.823.385.385.623.751.822 1.265.151.387.33.97.379 2.042.053 1.16.064 1.508.064 4.445 0 2.937-.011 3.285-.064 4.445-.049 1.073-.228 1.655-.379 2.043-.176.477-.457.91-.822 1.264a3.399 3.399 0 01-1.265.823c-.388.151-.97.33-2.043.38-1.16.052-1.507.063-4.445.063-2.938 0-3.285-.011-4.445-.064-1.073-.049-1.655-.228-2.043-.379a3.398 3.398 0 01-1.265-.823 3.401 3.401 0 01-.822-1.264c-.151-.388-.33-.97-.379-2.043-.053-1.16-.064-1.508-.064-4.445 0-2.937.011-3.285.064-4.445.049-1.073.228-1.655.379-2.042.2-.514.438-.88.822-1.265a3.405 3.405 0 011.265-.823c.388-.15.97-.33 2.043-.379 1.16-.052 1.508-.064 4.445-.064M11 0C8.012 0 7.638.012 6.465.066c-1.17.054-1.97.24-2.67.512a5.389 5.389 0 00-1.949 1.268A5.389 5.389 0 00.577 3.795c-.271.7-.458 1.5-.511 2.67C.013 7.639 0 8.013 0 11c0 2.988.012 3.362.066 4.535.054 1.171.24 1.971.512 2.67a5.381 5.381 0 001.268 1.948 5.398 5.398 0 001.948 1.27c.7.272 1.5.458 2.67.51C7.639 21.988 8.013 22 11 22c2.988 0 3.362-.012 4.535-.066 1.17-.054 1.97-.24 2.67-.511a5.39 5.39 0 001.949-1.27 5.4 5.4 0 001.268-1.947c.272-.7.459-1.5.512-2.67.053-1.174.066-1.548.066-4.536 0-2.988-.012-3.362-.066-4.535-.054-1.17-.24-1.97-.512-2.67a5.38 5.38 0 00-1.268-1.949A5.389 5.389 0 0018.206.578c-.7-.272-1.5-.459-2.672-.512C14.362.013 13.988 0 11 0"></path> <path opacity=".35" d="M18.3 5.243a1.337 1.337 0 11-2.674 0 1.337 1.337 0 012.673 0M11 5.346a5.654 5.654 0 00-.004 11.308H11a5.655 5.655 0 000-11.308m0 9.324a3.67 3.67 0 010-7.34 3.67 3.67 0 010 7.34"></path></g></g></svg></a>
                        </li>
                        <li className="social-channels__item">
                            <a href="https://www.twitch.tv/hexfork" target="_blank" rel="noopener noreferrer" className="social-channels__link" data-v-396ca694=""><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" data-v-396ca694=""><path fill="#FFF" fillRule="evenodd" d="M1.409 0L0 3.595v15.461l5.37.024V22h2.672l2.909-2.949h4.212l5.678-5.645V.01L1.409 0zm1.666 1.947h15.907v10.731l-3.327 3.256h-5.181l-2.965 2.874v-2.904l-4.434.003V1.947zm10.712 9.365h1.704V5.668h-1.704v5.644zm-5.208 0h1.704V5.668H8.579v5.644z" opacity=".35"></path></svg></a>
                        </li>
                    </ul>
                </div>
                <a className="social__trigger" onClick={toggleMenu}>
                    <svg width="22" height="5" viewBox="0 0 22 5" xmlns="http://www.w3.org/2000/svg" data-v-396ca694=""><path d="M11.02 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m8.73 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M4.5 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0" fill="#FFF" fillRule="evenodd" opacity=".65"></path></svg>
                </a>
            </div>
        </div >

    )


}

export default Hero;