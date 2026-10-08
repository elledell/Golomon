import Hero from "./components/home/Hero";
import Challenges from "./components/home/Challenges";
import About from "./components/home/About";
import Solutions from "./components/home/Solutions";
import HowWeWork from "./components/home/HowWeWork";
import Insights from "./components/home/Insights";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Challenges />
      <About />
      <Solutions />
      <HowWeWork />
      <Insights />
      <Contact />

     
    </div>
  );
}