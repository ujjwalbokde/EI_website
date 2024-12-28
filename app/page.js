import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Events/>
      <ContactUs/>
    </>
  );
}
