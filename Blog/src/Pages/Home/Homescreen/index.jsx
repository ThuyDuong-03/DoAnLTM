import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Blog from "../Blog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Blog />
      <ContactMe />
      <Footer />
    </>
  );
}
