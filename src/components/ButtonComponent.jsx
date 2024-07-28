export default function ButtonComponent({nombre, color}){
    const misestilos = {
        backgroundColor: color
    }

    const handleClick = () =>{
        alert("estas en la seccion de ${nombre}")
    }
    return(
        <>
            <button onClick={handleClick} style={misestilos}>{nombre}</button>
        </>
    )
}