import {useState} from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario"
import MiOrg from "./componentes/MiOrg"
import Equipo from "./componentes/Equipo"
import Footer from "./componentes/Footer"

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  // const [mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([])
  const [equipos,actualizarEquipos] = useState([
    {
      titulo:"Programación",
      colorP:"#57C278 ",
      colorS:"#D9F7E9"
    },
    {
      id:uuid(),
      titulo:"Front End",
      colorP:"#82CFFA ",
      colorS:"#E8F8FF"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorP:"#A6D157 ",
      colorS:"#F0F8E2"
    },
    {
      id:uuid(),
      titulo:"Devops",
      colorP:"#E06B69 ",
      colorS:"#FDE7E8"
    },
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorP:"#DB6EBF ",
      colorS:"#FAE9F5"
    },
    {
      id:uuid(),
      titulo:"Móvil",
      colorP:"#FFBA05 ",
      colorS:"#FFF5D9"
    },
    {
      id:uuid(),
      titulo:"Innovación y Gestión",
      colorP:"#FF8A29 ",
      colorS:"#FFEEDF"
    }
])
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador" + colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores,colaborador])
  }
  //Eliminar Colaborador
  const eliminarColaborador = (id) =>{
    console.log("Colaborador eliminado correctamente",id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //Actualizar Color de equipo
  const actualizarColor = (color,id) =>{
    console.log("Actualizar",color,id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorP=color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  // Crear Equipo
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos,nuevoEquipo])
  }
  //Like
  const like = (id) =>{
    console.log("like", id)
    const actualizarlike = colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(actualizarlike)
  }

  return (
    <div >
      <Header/>
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />}             
          
      <MiOrg titulo="Mi organización" cambiarMostrar={cambiarMostrar}/>    
      {
         
        equipos.map((equipo)=><Equipo
        equipo={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminar={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
        
      }
      <Footer/>       
    </div>
  );
}

export default App;
