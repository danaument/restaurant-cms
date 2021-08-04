import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Menu from "./pages/Menu";
import Fire from "./Fire";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If user is logged in, return user, else set log status to false
  Fire.auth().onAuthStateChanged((user) => {
    return user
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  });

  console.log("logged in?", isLoggedIn);
  
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
