
/*import Nome from '../Nome'

function Alunos({ nome, mudaNome }) {
    return (
      <div>
        <h2>Componente Gatinhos</h2>
        <Nome  nome={nome} mudaNome={mudaNome}/>
        <Nome/>
        <Aluno2 />
      </div>
    );
  }

  export default Alunos;

  function Aluno2({props}) {
    return (
      <div>
        Alunos
        <Nome  nome={props.nome}/>
      </div>
    );
  }
*/

  import { useContext } from 'react';

  import Nome from '../Nome';
  
  import { UserContext } from '../../contexts/user';
  
  function Alunos() {
    const { qtdAlunos } = useContext(UserContext);
  
    return (
      <div>
        <h2>Quantidade total de alunos: {qtdAlunos} </h2>
        <Nome />
      </div>
    );
  }
  
  export default Alunos;