import { useEffect } from "react"
import PreLoader from "./components/PreLoader"
import Header from "./components/Header"
import Modal from "./components/Modal"
import Banner from "./components/Banner"
import Services from "./components/Services"
import About from "./components/About"
import Clients from "./components/Clients"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"

function App() {

    useEffect(() => {
    const scripts = [
      "../assets/js/animation.js",
      "../assets/js/custom.js",
      "../assets/js/imagesloaded.js",
      "../assets/js/isotope.js",
      "../assets/js/owl-carousel.js",
      "../assets/js/popup.js",
      "../assets/js/tabs.js",
    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <>
      <PreLoader />
      <Header />
      <Modal />
      <Banner />
      <Services />
      <About />
      <Clients />
      <Pricing />
      <Footer />
    </>

  )
}

export default App
