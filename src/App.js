import {useState} from "react";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";

import {ContextCreater} from "./components/ContextCreater"
import "./App.css";
function App() {
  
  const [theme,setTheme] = useState(false);

  const changeTheme = () => {
    setTheme((theme) => {
      return !theme;
    });
  }

  return (
    <ContextCreater.Provider value={{theme,changeTheme}}>
    <div className={theme?"dark":"light"}>
    <Navbar />
     
      <Routes>
        <Route path="/" element={ <Home />}/>        
        <Route path="/contact" element={ <Contact />}/>         
        <Route path="/service" element={ <Service />}/>         
       </Routes>
    
    </div>
    </ContextCreater.Provider>
  );
}

export default App;