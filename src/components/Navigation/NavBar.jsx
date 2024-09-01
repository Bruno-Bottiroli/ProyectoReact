import ButtonComponent from "../ButtonComponent";
import CartWidget from "./CartWidget";
import LogoComponent from "./LogoComponent";
import "./NavBar.css"
import { Link } from 'react-router-dom';
import TituloComponente from "./TituloPrincipal";
export default function NavBar(){
    return(
        <>
        <header>
            <section className="container-fluid">
                    <div className="row">
                        <div className="col-12"> 
                            <nav className="barra navbar">
                                <div className="col-1">
                                    <LogoComponent/>
                                </div>
                                <div className="col-6 flex-start">
                                    <button>
                                        <Link to={'/'}>Home</Link>
                                    </button>
                                    <button>
                                        <Link to={'/Products'}>Productos</Link>
                                    </button>
                                    <button>
                                        <Link to={'/SobreNosotros'}>Sobre nosotros</Link>
                                    </button>
                                    <button>
                                        <Link to={'/contact'}>Contact</Link>
                                    </button>
                                </div>
                                <div className="col-1 flex-start">
                                    <CartWidget/>
                                </div>
                                <div className="col-1">

                                </div>
                            </nav>
                        </div>
                    </div>  
             </section>            
        </header>
             
        </>
    )
}