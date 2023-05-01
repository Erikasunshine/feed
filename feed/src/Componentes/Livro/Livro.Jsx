import React from "react";
import './Livro.Css';

function Livro(props){
  return(
    <div id="principal">
        <div id="imagem">
          <img src={props.imagem} alt="imagem"/>
        </div>
        <div id="descricao">
<h1>{props.titulo}</h1>
<p>{props.descricao}</p>
        </div>
        </div>
        
  );
};

export default Livro;