import Hero from "@/components/my-ui/hero";
import NavBar from "@/components/my-ui/nav-bar";
import Section from "@/components/my-ui/section";
import TerminalCode from "@/components/my-ui/terminal-code";
const Home = () => {
  return (
    <div
      className=" w-full max-w-7xl overflow-x-hidden flex relative flex-col gap-3 justify-center items-center"
    >
      <NavBar />
      <Hero />
      <TerminalCode />
      <Section />
    </div>
  );
}

export default Home;
