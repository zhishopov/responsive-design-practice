import Header from "./Header";
import Hero from "./Hero";
import Projects from "../Projects"
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header></Header>
            <Hero></Hero>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    )
}