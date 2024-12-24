// import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estados - Hooks
    // useState -useState()
    // const [nombreVariable,nombreFuncion] = useState(valorInicial)
    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = ()=>{
    //     actualizarMostrar(!mostrar)
    // }
    return <section className="orgSection">
        <h3>{props.titulo}</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg