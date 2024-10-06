import About from "./component/About";
import { Contact } from "./component/Contact";
import { Hero } from "./component/Hero";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
import Skills from "./component/Skills";
import {Footer} from './component/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
