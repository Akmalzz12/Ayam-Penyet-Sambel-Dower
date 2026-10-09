
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import TentangKami from "./components/TentangKami";

import "./style.css";

function Home() {
    return (
        <main>
            <Hero />
            <Menu />
            <WhyUs />
            <FAQ />
            <Reservation />
        </main>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/tentang-kami"
                    element={<TentangKami />}
                />
            </Routes>

            <Footer />
            <BackToTop />
        </BrowserRouter>
    );
}
