import './App.css';
import BotaoMenu from './Componentes/BotaoMenu/Botao.Jsx';
import Header from './Componentes/Header/Header.Jsx';
import Livro from './Componentes/Livro/Livro.Jsx';
import fotos from './Fotos/Foto Livro.jpg';

function App() {
  return(
    <div className="App">
      <Header />
      <div id='livros'>
      <Livro imagem={fotos} descricao="Hoje compartilho com voces os meus livros"
      titulo="Meus Livros" />
      </div>
      </div>
  );
};
export default App;