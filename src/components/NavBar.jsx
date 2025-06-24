import "./navbar.css";
import logoTienda from "../assets/Icono.png"
import CartWdidget from "./CartWidget";

const NavBar = () => {

    return(
        <div className="navbar">
           <img className="logo" src={logoTienda} alt="" />

           <ul className="menu">
                <li>Inicio</li>
                <li>Favoritos</li>
                <li>Compras anteriores</li>
                <li>Contacto</li>

                
           </ul>

           <CartWdidget />
        </div>
    )
}

export default NavBar;
