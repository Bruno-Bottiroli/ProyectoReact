import { useState } from "react";
import './ContactComponent.css'; 

export default function ContactoComponente() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });
  
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Formulario enviado:", formulario);
    
    setFormulario({
      nombre: "",
      correo: "",
      mensaje: ""
    });
    
    setEnviado(true);
    
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <div className="contenedor-contacto mt-3 white">
      <h2>Contáctanos</h2>
      
      {enviado && <p className="mensaje-enviado">¡Tu mensaje ha sido enviado!</p>}
      
      <form onSubmit={handleSubmit} className="formulario-contacto">
        <div className="grupo-formulario">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="grupo-formulario">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            required
          />
        </div>

        <div className="grupo-formulario">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formulario.mensaje}
            onChange={handleChange}
            placeholder="Tu mensaje"
            rows="4"
            required
          />
        </div>

        <button type="submit" className="boton-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
}