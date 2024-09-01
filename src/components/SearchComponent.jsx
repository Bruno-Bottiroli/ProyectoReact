import { useRef, useEffect } from "react";

export default function SearchComponent(){
    const referenciaInput = useRef(null)

    useEffect(()=>{
        referenciaInput.current.focus()
    }, [])

    return(
        <>
            <section>
                <input type="text" placeholder="Que busca?" ref={referenciaInput} />
                <button>🔍</button>
            </section>
        </>
    )
}