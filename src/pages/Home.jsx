import Menu from "../menu"
import Hero from "../hero"
import "../styles.css"
import "../App.css"
import Games from "../games"


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

                </div>
            </div>
        </div>
    )


}

export default Home;