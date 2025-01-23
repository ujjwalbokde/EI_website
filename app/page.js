import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { EventSlider } from "./components/slider/EventSlider";
import Fqr from "./components/Fqr";
import Magazine from "./components/magazine";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <EventSlider />
      <Fqr/>
      <Magazine/>
      <ContactUs />
    </>
  );
}
