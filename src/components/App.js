import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home username="Liza" city="New York" color="firebrick" />
      <About bio="I made this!" />
    </div>
  );
}

export default App;
