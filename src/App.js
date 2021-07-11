import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navagation from "./components/Navagation";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="App">
      <Navagation />
      <Switch>
        <Route path="/" exact={true}>
          <Intro />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
