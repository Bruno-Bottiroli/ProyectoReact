import ItemsListContainer from "../ProductsView/ItemsListContainer";
import "../../App.css"
import "./HomeComponent.css"

export default function HomeComponent() {
    return (
      <>
        <section className="container">
          <div className="mt-3 mb-2 d-flex justify-content-center">
            <h1>Donde la creatividad se expresa.</h1>
          </div>
        </section>
        <section className="container">
          <div className="row">
              <div className="col-12 d-flex">
                  <div className="col-6 tucan pe-2 image-container">
                      <img className="tucan" src="/imagenes/tucan.jpg" alt="" />
                        <div className="overlay">
                          <a href="/Products" className="overlay-text">Tienda</a>
                        </div>
                  </div>
                  <div className="col-6">
                      <div className="col-12 trespalos image-container">
                        <img className="w-100 trespalos" src="/imagenes/trespalos.jpg" alt="" />
                        <div className="overlay2">
                          <a href="/SobreNosotros" className="overlay-text">Sobre nosotros</a>
                        </div>
                      </div>
                      <div className="col-12 volar image-container">
                        <img className="w-100 volar" src="/imagenes/volar.jpg" alt="" />
                        <div className="overlay2">
                          <a href="/Contact" className="overlay-text">Contacto</a>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        
      </>
    );
  }