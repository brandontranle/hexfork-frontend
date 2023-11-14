import Menu from "../menu"
import Hero from "../hero"
import "../styles.css"
import "../App.css"
import Games from "../games"
import Shop from "../shop"


export const Home = () => {
    return (
        <div className="page">
            <Menu />
            <div className="content">
                <div>
                    <section className="hero">
                        <Hero />
                    </section>
                    <section className="games">
                        <Games />
                    </section>
                    <section className="shop">
                        <Shop />
                    </section>

                </div>
            </div>
        </div>
    )


}

export default Home;