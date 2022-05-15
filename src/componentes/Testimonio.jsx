import React from "react";
import "../hoja-de-estilo/Testimonio.css";

function Testimonio(props){
  return(
    <div className="contenodor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} alt="Foto de joseph" />
      <div className="contenedor-texto-textimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;