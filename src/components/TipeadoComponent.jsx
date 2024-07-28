export default function TipeadoComponent({Greeting}){
    const estilo = {
        alignItems: 'center'
    }
    return(
        <>
            <div style={{alignItems: 'center', display: 'flex'}}>
            <h2 style={{alignItems: 'center', display: 'flex'}}>{Greeting}</h2>
            </div>
            
        </>
    )
}