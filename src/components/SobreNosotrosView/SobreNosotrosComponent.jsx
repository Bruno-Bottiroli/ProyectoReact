import "./SobreNosotrosComponent.css"

export default function SobreNosotrosComponent() {
    return (
      <>
        <section className="container">
          <div className="row mt-5">
            <div className="col-6">
              <img className="imagenmonologo" src="Imagenes/monologodsn.jpg" alt="" />
            </div>
            <div className="col-6">
              <div className="col-12">
                <h2 className="nombremarca">Somos MonologoDSN</h2>
              </div>
              <div className="col-12">
                <p className="texto-marca">Este es un proyecto iniciado en Junio de 2024. Es una propuesta artistica hecha por Bruno Bottiroli, combina lo mejor del mundo creativo: Poesía, Fotografía, Podcast y Collages.</p>
              </div>
              <div className="col-12">
              <p className="texto-marca mt-2">Podés echarle un vistazo a algunos de mis productos, son prints estilo collages o algunas fotografías que fue tomando en diversos viajes dentro del país.</p>
              </div>
                
            </div>
          </div>
          

        </section>
      </>
    );
  }
  