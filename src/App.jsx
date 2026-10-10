import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import SuasanaTempat from "./components/SuasanaTempat";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import "./style.css";

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Menu />
                <SuasanaTempat />
                <WhyUs />
                <FAQ />
                <Reservation />
            </main>

            <Footer />
            <BackToTop />
        </>
    );
}