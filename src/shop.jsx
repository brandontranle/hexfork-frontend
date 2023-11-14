import "./styles.css"
import shopImage from "./assets/shop.png"
import { useState } from "react"

export const Shop = () => {

    const [sliderPosition, setSliderPosition] = useState(0);
    const [isSelected, setIsSelected] = useState(0);

    const totalItems = 6; // Total number of items in the slider
    const itemsVisible = 3; // Number of items visible at a time
    const movePercentage = 33.5; // Percentage to move the slider each time

    const maxPosition = -(movePercentage * (totalItems - itemsVisible + 1));

    const moveSliderNext = () => {
        setSliderPosition(prevPosition => {
            // When it reaches the end, wrap to the beginning
            let newPosition = prevPosition - movePercentage;
            if (newPosition < maxPosition) {
                newPosition = 0;
            }
            setIsSelected((isSelected + 1) % totalItems);
            return newPosition;
        });
    };

    const moveSliderPrev = () => {
        setSliderPosition(prevPosition => {
            // When at the beginning, wrap to show the last item with the first two
            let newPosition = prevPosition + movePercentage;
            if (prevPosition === 0) {
                newPosition = maxPosition - movePercentage;
                setIsSelected(totalItems - 1);
            } else {
                setIsSelected((isSelected - 1 + totalItems) % totalItems);
            }
            return newPosition;
        });
    };
    return (
        <div className="container">
            <div className="shop-header">
                <img className="shop-header__image" style={{ backgroundImage: `url(${shopImage})` }} />
                <span className="-decor -decor--dark-gray"> Merch </span>
                <h2 className="shop-header__title"> Hexfork Merch <br /> Store </h2>
                <p className="shop-header__description"> It’s here! Gear up and we can build <br /> the impossible together. <br /> We appreciate all of your support. </p>
                <a href="https://shop.hexfork.org" className="btn"> Visit the store </a>
            </div>
            <div className="shop-slider">
                <div className="slider flickity-enabled is-draggable" tabIndex="0">
                    <div className="flickity-viewport" style={{ touchAction: "pan-y" }}>
                        {/* scroll one item at a time, but show three at a time */}
                        <div className="flickity-slider" style={{ left: "0px", transform: `translateX(${sliderPosition}%)` }}>
                            <a href="https://eu.merch.larian.com/en/products/larian-insulated-bottle?locale=en" target="_blank" className={`product ${isSelected === 0 ? "is-selected" : ""}`} style={{ position: "absolute", left: "0px", transform: `translateX(${isSelected * 100}%)` }} aria-hidden="true">
                                <h3 class="product__name">
                                    Hexfork Insulated Bottle
                                </h3> <img src="" alt="" className="product__image" /> <div className="product__footer" ><div class="btn">buy now</div> <span className="product__price">€35.00</span></div></a>
                            <a href="https://eu.merch.larian.com/en/products/larian-beer-coaster?locale=en" target="_blank" className={`product ${isSelected === 1 ? "is-selected" : ""}`} style={{ position: "absolute", left: "0px", transform: "translateX(100%)" }}><h3 class="product__name" >
                                Hexfork Beer Coaster Pack of 4
                            </h3> <img src="" alt="" class="product__image" /> <div class="product__footer" ><div class="btn" >buy now</div> <span class="product__price" >€15.00</span></div></a>
                            <a href="https://eu.merch.larian.com/en/products/larian-coffee-cup?locale=en" target="_blank" className={`product ${isSelected === 2 ? "is-selected" : ""}`} style={{ position: "absolute", left: "0px", transform: "translateX(200%)" }} aria-hidden="true"><h3 class="product__name" >
                                Hexfork Travel Mug
                            </h3> <img src="" alt="" className="product__image" /> <div className="product__footer" ><div className="btn" >buy now</div> <span className="product__price" >€35.00</span></div></a>
                            <a href="https://eu.merch.larian.com/en/products/t-shirt-badger-blue?locale=en" target="_blank" className={`product ${isSelected === 3 ? "is-selected" : ""}`} data-v-05f25ee7="" aria-hidden="true" style={{ position: "absolute", left: "0px", transform: "translateX(300%)" }}><h3 class="product__name" data-v-05f25ee7="">
                                T-Shirt: Badger
                            </h3> <img src="" alt="" class="product__image" data-v-05f25ee7="" /> <div class="product__footer" data-v-05f25ee7=""><div class="btn" data-v-05f25ee7="">buy now</div> <span class="product__price" data-v-05f25ee7="">€25.00</span></div></a>
                            <a href="https://eu.merch.larian.com/en/products/t-shirt-badger-blue?locale=en" target="_blank" className={`product ${isSelected === 4 ? "is-selected" : ""}`} data-v-05f25ee7="" aria-hidden="true" style={{ position: "absolute", left: "0px", transform: "translateX(400%)" }}><h3 class="product__name" data-v-05f25ee7="">
                                T-Shirt: Badger
                            </h3> <img src="" alt="" class="product__image" data-v-05f25ee7="" /> <div class="product__footer" data-v-05f25ee7=""><div class="btn" data-v-05f25ee7="">buy now</div> <span class="product__price" data-v-05f25ee7="">€25.00</span></div></a>
                            <a href="https://eu.merch.larian.com/en/products/t-shirt-badger-blue?locale=en" target="_blank" className={`product ${isSelected === 5 ? "is-selected" : ""}`} data-v-05f25ee7="" aria-hidden="true" style={{ position: "absolute", left: "0px", transform: "translateX(500%)" }}><h3 class="product__name" data-v-05f25ee7="">
                                T-Shirt: Badger
                            </h3> <img src="" alt="" class="product__image" data-v-05f25ee7="" /> <div class="product__footer" data-v-05f25ee7=""><div class="btn" data-v-05f25ee7="">buy now</div> <span class="product__price" data-v-05f25ee7="">€25.00</span></div></a>
                        </div>
                    </div>
                </div>
                <div className="shop-nav">
                    <div className="nav dark">
                        <button className="nav__button nav__button--prev" onClick={moveSliderPrev}><svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" data-v-8ccfc2b6="" data-v-72810528=""><path d="M9 15 2 8l7-7" stroke="white" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" data-v-8ccfc2b6=""></path></svg></button>
                        <button class="nav__button nav__button--next" onClick={moveSliderNext}><svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" data-v-5ed6daa7="" data-v-72810528=""><path d="m1 1 7 7-7 7" stroke="white" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" data-v-5ed6daa7=""></path></svg></button>
                    </div>
                </div>
            </div>
        </div >


    )

}

export default Shop;