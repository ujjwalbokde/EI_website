import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { Events } from "./components/Events";
import { EventSlider } from "./components/slider/EventSlider";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <EventSlider/>
      <ContactUs/>
    </>
  );
}
