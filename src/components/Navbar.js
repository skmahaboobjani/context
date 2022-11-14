import React,{ useContext } from "react";
import { ContextCreater } from "./ContextCreater";
import { Link } from "react-router-dom";


const Navbar  = () => {
   const {theme,changeTheme}  = useContext(ContextCreater);
   console.log(theme,changeTheme);

    return(
      <div>
            <h5>Geekster</h5>
            <Link to="/">Home</Link> <br/>
            <Link to="/contact">Contact</Link><br/>
            <Link to="/service">Service</Link><br/>
            <button onClick={() => { changeTheme();}}>Theme Changer {theme?"True":"False"}</button>
            </div>
    )
}

export default Navbar;