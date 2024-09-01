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
            <section className="">
                <div>
                <div className="">
                        <div className="col-12"> 
                            <nav className="barra navbar">
                                <div className="col-2">
                                    <LogoComponent/>
                                </div>
                                <div className="col-6 d-flex justify-content-around">
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
                                <div className="col-2 flex-start">
                                    <CartWidget/>
                                </div>
                                
                            </nav>
                        </div>
                    </div>  
                </div>
                    
             </section>            
        </header>
             
        </>
    )
}