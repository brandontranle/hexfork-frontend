import Menu from "../menu"
import Hero from "../hero"
import "../styles.css"
import "../App.css"



export const Home = () => {
    return (
        <div className="page">
            <Menu />
            <div className="content">
                <section className="hero">
                    <Hero />
                </section>

            </div>
        </div>
    )


}

export default Home;