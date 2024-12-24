import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    // Destructuracion
    const {colorP,titulo,id} = props.equipo
    const {colaboradores,eliminar,actualizarColor,like} = props


    const obj ={
        backgroundColor: hexToRgba(colorP,0.6)
    }// OJO! hay varias formas de generar estilos
    
    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="barraColor"
                    value={colorP}
                    onChange={(e)=>{
                        actualizarColor(e.target.value,id)
                    }}
                
                />
                <h3 style={{borderColor:colorP}}>{titulo}</h3>
                <div className="colaboradores">
                        {
                            colaboradores.map((colaborador, index)=><Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorP={colorP}
                            eliminar={eliminar}
                            like={like}
                            />)
                        }             
                </div>
            </section>
        }
    </>
}

export default Equipo