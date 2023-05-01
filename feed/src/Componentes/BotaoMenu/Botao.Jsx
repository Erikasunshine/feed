import React from "react"
import "./Botao.Css";

function BotaoMenu(props){
  return(
    <button id="btnmenu">
        {props.nome}
    </button>
  )
}

export default BotaoMenu;