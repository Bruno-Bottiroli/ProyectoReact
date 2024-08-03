import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";
import "./NavBar.css"
import TituloComponente from "./TituloPrincipal";
export default function NavBar(){
    return(
        <>
             <section className="container-fluid">
                <div className="row">
                    <div className="col-12"> 
                        <nav className="barra navbar">
                            <TituloComponente texto={"Vivero el Juancho."}/>
                            <ButtonComponent nombre="Sobre nosotros"/>
                            <ButtonComponent nombre="Contacto"/>
                            <ButtonComponent nombre="Productos"/>
                            <CartWidget/>
                            <TituloComponente texto={"2"}/>
                        </nav>
                    </div>
                </div>  
             </section>            
        </>
    )
}