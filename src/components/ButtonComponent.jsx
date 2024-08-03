export default function ButtonComponent({nombre}){
    
    const handleClick = () =>{
        alert("estas en la seccion de ${nombre}")
    }
    return(
        <>
            <button onClick={handleClick}>{nombre}</button>
        </>
    )
}