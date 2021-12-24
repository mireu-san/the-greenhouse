import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import WorkList from "./components/workList/WorkList";
import { ThemeContext } from "./context";



const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#23252F" : "white", color:darkMode && "white" }}>
      <Toggle />
      <Intro />
      <About />
      <WorkList />
      <Contact />
    </div>
  );
};


export default App;
