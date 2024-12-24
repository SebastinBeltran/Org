import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import {v4 as uuid} from "uuid"

const Formulario = (props) => {
    const[nombre,actualizarNombre] = useState("")
    const[puesto,actualizarPuesto] = useState("")
    const[foto,actualizarFoto] = useState("")
    const[equipo,actualizarEquipo] = useState("")
    const[titulo,actualizartitulo] = useState("")
    const[color,actualizarColor] = useState("")

    const {registrarColaborador,crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datos = {
            id:uuid(),
            nombre,
            puesto,
            foto,
            equipo,
            fav:false
        }
        registrarColaborador(datos)
    }
    const manejarNuevo = (e) => {
        e.preventDefault()
        let crear = {
            id:uuid(),
            titulo,
            colorP:color
        }
        crearEquipo(crear)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
        <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de Foto" required valor={foto} actualizarValor={actualizarFoto}/>
        <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.equipos}/>
        <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevo}>
            <h2>Rellena el formulario para crear el Equipo. </h2>
        <CampoTexto titulo="Titulo" placeholder="Ingresar Titulo" required valor={titulo} actualizarValor={actualizartitulo}/>
        <CampoTexto type="color" titulo="Color" placeholder="Ingresar el color Hex" required valor={color} actualizarValor={actualizarColor}
        />
        <Boton texto="Registrar Equipo"/>
        
        </form>
    </section>
}

export default Formulario