import { useState } from 'react';

const UserInfo = ({ carrito, createNewOrder }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

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
    };

    return (
        <div className="col-8">
            <div>
                <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Ingrese su Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Ingrese su Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSubmit}>Finalizar compra</button>
            </div>
        </div>
    );
};

export default UserInfo;