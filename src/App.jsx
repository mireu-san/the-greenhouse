import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import WorkList from "./components/workList/WorkList";



const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <WorkList />
      <Contact />
    </div>
  );
};


export default App;
