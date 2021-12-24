import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import WorkList from "./components/workList/WorkList";



const App = () => {
// useState method does work to distribute button on each pages, but not appropriate for large scale web
  return (
    <div style={{backgroundColor: "#23252F", color: "white"}}>
      <Toggle />
      <Intro />
      <About />
      <WorkList />
      <Contact />
    </div>
  );
};


export default App;
