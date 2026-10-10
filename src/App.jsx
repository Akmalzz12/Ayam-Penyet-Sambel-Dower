import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import "./tyle.css";

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Menu />
                <WhyUs />
                <FAQ />
                <Reservation />
            </main>

            <Footer />
            <BackToTop />
        </>
    );
}