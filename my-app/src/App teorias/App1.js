import logo from './logo.svg';
import './App.css';

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome2} cargo={props.cargo}/>
    </div>
  );
}
const Sobre = (props) => {
  return (
    <div>
      <h1> ola eu sou a {props.nome2} </h1>
      <h1>e sou {props.cargo}</h1>
    </div>
  );
}

const Bemvindaaaa = (props) => {
  return (
    <div>
      <h2>Bem vindaaaaa {props.nome}!</h2>
      <h2>tenho {props.idade}</h2>
    </div>
  )
}
function App() {
  return (
    <><div>
      <h1>props é um atributo que podemos passar para outro componente receber
        e mostrar para o usuario.
        components - stateless component == const
        component que não tem estado, apenas exibe algo</h1>
      <Bemvindaaaa nome="Cascata" idade="4" />
      <Equipe nome2="Fer" cargo="programadora"/>
      <Equipe nome2="caio" cargo="professor"/>
    </div>
    <div>

    </div></>

  );
}

export default App;
