import React from "react";
import Title from '../Title-logo/title'
import CartWidget from  "../CartWidget/CartWidget"
import "./navBar.css";

 const NavBar= ()=>{
    return(
        <>
        <div className="divNavBar">
        <Title/>
        <ul>
            <li> <a href="">Quienes somos</a> </li>
            <li> <a href=""> Productos</a></li>
            <li> <a href=""> Contacto</a></li>
            <li> <a href=""> <CartWidget/> </a></li>
        </ul>
        </div>
       
        </>
    )
};

export default NavBar;