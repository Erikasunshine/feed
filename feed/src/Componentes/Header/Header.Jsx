import React from "react";
import './Header.Css';
import BotaoMenu from "../BotaoMenu/Botao.Jsx";

function Header(props){
  return(
    <header>
        <BotaoMenu nome="Livros"/>
        <BotaoMenu nome="Livros Lidos"/>
        <BotaoMenu nome="Catalago"/>
    </header>
  )
}

export default Header;