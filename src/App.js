import React from "react";
import HeadLineCards from "./components/HeadLineCards";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Food from "./components/Food"


function App() {
  return (
    <div>
      < Navbar /> 

      < Main />

      < HeadLineCards />

      <Food/>
      
    </div>
  );
}

export default App;
