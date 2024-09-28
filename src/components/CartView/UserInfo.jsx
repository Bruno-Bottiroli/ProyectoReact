import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserInfo.css";

const UserInfo = ({ carrito, createNewOrder, clear }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [compraExitosa, setCompraExitosa] = useState(false); 

    const navigate = useNavigate(); 

    const handleSubmit = () => {
        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                telefono
            },
            items: carrito,
            creadoEn: new Date()
        };

        createNewOrder(order);  
        setNombre('');
        setApellido('');
        setEmail('');
        setTelefono('');
      
        setCompraExitosa(true);

        clear();
        setTimeout(() => {
            navigate('/');  
        }, 3000);
    };

    return (
        <section className='container'>
            <div className="col-12 mt-5 contenedor-formulario">
                <h2>Formulario de compra</h2>

                
                {compraExitosa && <p className="mensaje-exito">¡Compra exitosa! Redirigiendo al inicio...</p>}

                <div>
                    <input 
                        className='input-class' type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        className='input-class' type="text" placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        className='input-class' type="email" placeholder="Ingrese su Email" value={email} onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        className='input-class' type="tel" placeholder="Ingrese su Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} 
                    />
                </div>
                <div>
                    <button className="btn-finalizar" onClick={handleSubmit}>Finalizar compra</button>
                </div>
            </div>
        </section>
    );
};

export default UserInfo;
