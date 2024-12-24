import "./CampoTexto.css"

const CampoTexto = (props) =>{
    
    const placeholderMod = `${props.placeholder}...`

    const{ type="text" } = props
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label >{props.titulo.toUpperCase()}</label>
        <input type={type} placeholder={placeholderMod} required={props.required} value={props.valor} onChange={manejarCambio}></input>
    </div>
}

export default CampoTexto