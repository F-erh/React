/*import { UserContext } from "../../contexts/user";
import { useContext } from "react";

function Nome({ nome, mudaNome }) {
  const { alunos, setAlunos } = useContext(UserContext);
    return (
      <div>
        <span style={{color:'#ff0000'}}>Bem vinda {nome}</span>
        <span style={{color:'#00BFFF'}}>Bem vinda {alunos}</span>
        <br />
        <button onClick={() => mudaNome('cacau') }>Trocar aluno</button>
      </div>
    );
  } 
  
  export default Nome;*/

  
  import { useContext } from 'react';

  import { UserContext } from '../../contexts/user'
  
  function Nome() {
    const { alunos, setAlunos } = useContext(UserContext);
  
    return (
      <div>
        <span style={{ color: '#FF0000' }} >Bem vindo: {alunos} </span>
        <br/>
        <button onClick={ () => setAlunos('Fer') } >Troca Nome</button>
      </div>
    );
  }
  
  export default Nome;