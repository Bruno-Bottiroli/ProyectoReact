import ButtonComponent from "./ButtonComponent";
import ImagenComponente from "./ImagenComponente";
import "./NavBar.css"
import TituloComponente from "./TituloPrincipal";
export default function NavBar(){
    return(
        <>
            <nav className="barra navbar">
                <ButtonComponent nombre="about us"/>
                <ButtonComponent nombre="Contacto"/>
                <TituloComponente texto={"Vivero el Juancho."}/>
                <TituloComponente texto={"🛒2"}/>
            </nav>
        </>
    )
}