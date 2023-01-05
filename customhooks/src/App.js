import {Title,NameContainer,PostContainer } from './style';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
//import useCapturarNome from './hooks/useCapturarNome';
//import useCapturarPostagens from "./hooks/useCapturarPostagens";  
import useRequestData from "./hooks/useRequestData";
import { BASE_URL, BASE_URL_HP } from "./constants/constants";

function App() {

  //Usando o hook com lógica igual
  // const nomeUsuarios = useCapturaNome();
  // const postagens = useCapturarPostagens();

  //Usando hook com com sintaxé igual
  const [nomeUsuarios, loading, errorUsuario] = useRequestData(BASE_URL,"users");
  const [postagens, load, errorUsuarioPostagen] = useRequestData(BASE_URL, "comments"); 
  const [personagens] = useRequestData(BASE_URL_HP, "/characters");
  const [house] = useRequestData(BASE_URL_HP, "/characters")

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      {errorUsuario && <p>Error na requisição, aguarde!</p>}
      {!loading ? 
      <NameContainer>
        {nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer> :
      <p>Carregando...</p>
    }

      <hr />
      <Title>Comentários dos usuários</Title>
      {errorUsuarioPostagen && <p>Error na requisição, aguarde!</p>}
      {!load ? 
      <PostContainer>
      {postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer> : 
      <p>Carregando...</p>
      }

      <hr/>
      <h3>Exercício 3</h3>
      {errorUsuario && <p>Error na requisição, aguarde!</p>}
      {!loading ? 
      <NameContainer>
        {personagens.map((personagens) => {
          return(
          <Card 
          key={personagens.id} 
          text={personagens.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer> :
      <p>Carregando...</p>
    }

{errorUsuarioPostagen && <p>Error na requisição, aguarde!</p>}
      {!load ? 
      <PostContainer>
      {house.map((house) => {
        //console.log(post);
        return(
          <Card 
          key={house.id} 
          text={house.house} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer> : 
      <p>Carregando...</p>
      }
    

    </div>
  );
}

export default App;



