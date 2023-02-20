import React from "react";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import About from "../components/About"
import {username, city, image} from "../data/user"

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city}/>
      <About image={image}/>
    </div>
  );
}

export default App;
