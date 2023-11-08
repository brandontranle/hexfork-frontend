import "./styles.css"
import "./App.css"
import "./index.css"
import { useState } from "react"
import Cover from "./assets/baldurs.png"
import SliderCover from "./assets/slider-cover.png"


export const Games = () => {
    const [slideNumber, setSlideNumber] = useState(0)

    return (
        <div className="container">
            <div className="games-info">
                <div className={`games-header ${slideNumber === 0 ? 'active' : ''}`}>
                    <span className="-decor -decor--gray"><div className="animation-row"><span>Our games</span></div></span>
                    <h2> <div className="animation-row">
                        <span> Food Fighters </span></div></h2>
                    <div className="animation-row">
                        <span>
                            <p style={{ fontSize: "11px" }}>
                                Gather your party! Eat food, fight food.

                            </p>

                        </span>
                    </div>
                    <div className="animation-row">
                        <span>
                            <a className="btn">
                                Download now!
                            </a>
                        </span>
                    </div>
                </div>
                <div className={`games-header ${slideNumber === 1 ? 'active' : ''}`}>
                    <span className="-decor -decor--gray"><div className="animation-row"><span>Our games</span></div></span>
                    <h2> <div className="animation-row">
                        <span> Cyber Break </span></div></h2>
                    <div className="animation-row">
                        <span>
                            <p>
                                The ultimate first person shooter, came to life!
                            </p>

                        </span>
                    </div>
                    <div className="animation-row">
                        <span>
                            <a className="btn">
                                Download now!
                            </a>
                        </span>
                    </div>


                </div>
                <div className={`games-header ${slideNumber === 2 ? 'active' : ''}`}>
                </div>
                <div className="games-platforms">
                    <div className="games-platforms__label">
                        Game available on:
                    </div>
                    <div className="games-platforms__wrap">
                        <div className={`platforms ${slideNumber === 0 ? 'active' : ''}`}>
                            <div className="animation-row">
                                <span>
                                    <div className="platform" data-v-e7bde830=""><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-65334432="" data-v-e7bde830=""><path d="M23.584 11.3h-4.728V8.14c0-.919-.051-1.492-.151-1.72-.102-.228-.325-.342-.669-.342-.389 0-.636.138-.741.415-.105.278-.157.876-.157 1.797v8.446c0 .883.052 1.46.157 1.729.105.27.341.404.707.404.353 0 .582-.134.691-.405.109-.27.163-.904.163-1.902v-2.286h4.728v.709c0 1.881-.133 3.216-.399 4.003-.266.788-.853 1.478-1.763 2.07-.91.593-2.031.888-3.363.888-1.386 0-2.527-.25-3.426-.752-.898-.501-1.493-1.196-1.785-2.083-.292-.887-.438-2.222-.438-4.003V9.795c0-1.31.045-2.293.134-2.948.09-.655.358-1.286.803-1.892.446-.607 1.064-1.084 1.854-1.432C15.99 3.175 16.898 3 17.924 3c1.392 0 2.542.27 3.448.808.905.539 1.501 1.21 1.785 2.013.285.804.427 2.054.427 3.751V11.3ZM5.728 6.493v4.627c.134.008.251.011.348.011.434 0 .735-.106.904-.319.168-.214.252-.658.252-1.331V7.987c0-.622-.097-1.026-.292-1.213-.194-.187-.599-.281-1.212-.281ZM1 3.383h4.761c1.288 0 2.278.101 2.971.303.692.202 1.213.494 1.56.876.349.382.584.843.709 1.386.123.543.185 1.384.185 2.522v1.583c0 1.161-.12 2.007-.36 2.539-.24.531-.679.939-1.32 1.224-.639.284-1.476.426-2.509.426H5.728v7.323H1V3.383Z" fill="#272727" fill-rule="evenodd" opacity="0.5" data-v-65334432=""></path></svg>pc
                                    </div>
                                    <div className="platform" data-v-e7bde830=""><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-2edeefc8="" data-v-e7bde830=""><path d="M7.906 5.838C5.047 5.838 2 8.342 2 13.114 2 17.965 5.6 24 8.45 24c.995 0 2.522-.98 4.06-.98 1.511 0 2.625.945 4.059.945 3.12 0 5.431-6.362 5.431-6.362s-3.305-1.252-3.305-4.884c0-3.22 2.653-4.547 2.653-4.547s-1.356-2.4-4.805-2.4c-2.003 0-3.542 1.114-4.371 1.114-.966 0-2.408-1.048-4.266-1.048m5.13-3.75C14.646.01 16.887 0 16.887 0s.333 1.954-1.268 3.836c-1.71 2.01-3.653 1.681-3.653 1.681s-.365-1.58 1.068-3.429" fill="#272727" fill-rule="evenodd" opacity="0.5" data-v-2edeefc8=""></path></svg>mac
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className={`platforms ${slideNumber === 1 ? 'active' : ''}`}>
                            <div className="animation-row">
                                <span>
                                    <div className="platform" data-v-e7bde830=""><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-65334432="" data-v-e7bde830=""><path d="M23.584 11.3h-4.728V8.14c0-.919-.051-1.492-.151-1.72-.102-.228-.325-.342-.669-.342-.389 0-.636.138-.741.415-.105.278-.157.876-.157 1.797v8.446c0 .883.052 1.46.157 1.729.105.27.341.404.707.404.353 0 .582-.134.691-.405.109-.27.163-.904.163-1.902v-2.286h4.728v.709c0 1.881-.133 3.216-.399 4.003-.266.788-.853 1.478-1.763 2.07-.91.593-2.031.888-3.363.888-1.386 0-2.527-.25-3.426-.752-.898-.501-1.493-1.196-1.785-2.083-.292-.887-.438-2.222-.438-4.003V9.795c0-1.31.045-2.293.134-2.948.09-.655.358-1.286.803-1.892.446-.607 1.064-1.084 1.854-1.432C15.99 3.175 16.898 3 17.924 3c1.392 0 2.542.27 3.448.808.905.539 1.501 1.21 1.785 2.013.285.804.427 2.054.427 3.751V11.3ZM5.728 6.493v4.627c.134.008.251.011.348.011.434 0 .735-.106.904-.319.168-.214.252-.658.252-1.331V7.987c0-.622-.097-1.026-.292-1.213-.194-.187-.599-.281-1.212-.281ZM1 3.383h4.761c1.288 0 2.278.101 2.971.303.692.202 1.213.494 1.56.876.349.382.584.843.709 1.386.123.543.185 1.384.185 2.522v1.583c0 1.161-.12 2.007-.36 2.539-.24.531-.679.939-1.32 1.224-.639.284-1.476.426-2.509.426H5.728v7.323H1V3.383Z" fill="#272727" fill-rule="evenodd" opacity="0.5" data-v-65334432=""></path></svg>pc
                                    </div>
                                    <div className="platform" data-v-e7bde830=""><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-2edeefc8="" data-v-e7bde830=""><path d="M7.906 5.838C5.047 5.838 2 8.342 2 13.114 2 17.965 5.6 24 8.45 24c.995 0 2.522-.98 4.06-.98 1.511 0 2.625.945 4.059.945 3.12 0 5.431-6.362 5.431-6.362s-3.305-1.252-3.305-4.884c0-3.22 2.653-4.547 2.653-4.547s-1.356-2.4-4.805-2.4c-2.003 0-3.542 1.114-4.371 1.114-.966 0-2.408-1.048-4.266-1.048m5.13-3.75C14.646.01 16.887 0 16.887 0s.333 1.954-1.268 3.836c-1.71 2.01-3.653 1.681-3.653 1.681s-.365-1.58 1.068-3.429" fill="#272727" fill-rule="evenodd" opacity="0.5" data-v-2edeefc8=""></path></svg>mac
                                    </div>
                                </span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="games-slider">
                <div className="slider">
                    <div className="flickity-viewport">
                        <div className="flickity-slider" style={{
                            transform: `translateX(${-40 * slideNumber}%)`, transition: 'transform 0.5s ease', // Adjust the duration and easing as needed
                        }}>
                            <div className={`slider__slide ${slideNumber === 0 ? 'is-selected' : ''}`} id="zero-slide" aria-hidden={`${slideNumber !== 0 ? 'true' : ''}`}>
                                <div className="slider__image" style={{ backgroundColor: "grey" }}>
                                </div>
                            </div>
                            <div className={`slider__slide ${slideNumber === 1 ? 'is-selected' : ''}`} id="first-slide" aria-hidden={`${slideNumber !== 1 ? 'true' : ''}`}>
                                <div className="slider__image" style={{ backgroundColor: "black" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`games-slider__cover ${slideNumber === 0 ? 'active' : ''}`} style={{ backgroundColor: "darkgrey" }}>


                </div>
                <div className={`games-slider__cover ${slideNumber === 1 ? 'active' : ''}`} style={{ backgroundColor: 'black' }}>


                </div>
                <div className="nav light">
                    <button className="nav__button nav_button--prev" disabled={`${slideNumber === 0 ? 'disabled' : ''}`} onClick={() => setSlideNumber(slideNumber - 1)}>
                        <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" data-v-8ccfc2b6="" data-v-72810528=""><path d="M9 15 2 8l7-7" stroke="#272727" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" data-v-8ccfc2b6=""></path></svg>
                    </button>
                    <button className="nav__button nav__button--next" onClick={() => setSlideNumber(slideNumber + 1)}><svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" data-v-5ed6daa7="" data-v-72810528=""><path d="m1 1 7 7-7 7" stroke="#272727" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" data-v-5ed6daa7=""></path></svg></button>
                </div>



            </div>


        </div >
    );

}

export default Games;