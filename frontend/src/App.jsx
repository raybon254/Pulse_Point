import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './pages/homepage';
import About from './pages/about';
import Works from "./components/layout/works";
import Features from "./components/layout/feature";
import Trivia from './pages/triviapage';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/how-it-works" component={Works} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/trivia" component={Trivia} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
