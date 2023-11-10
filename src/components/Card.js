import '../styles/card.css'
// import React from 'react'


const Card = (props) => {
console.log("Res" + props)
    return (
        <div className="tarjeta">
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{props.nombre}</h3>
                <p className="tarjeta-descripcion">{props.descripcion}</p>
                <p className="tarjeta-sku">sku: {props.sku}</p>
                <p className="tarjeta-cant-disponoble">Cant. dispobible: {props.cantDisponible}</p>
                <p className="tarjeta-precio">$ {props.precio}</p>

            </div>
        </div>

    )
}
export default Card