
import { Link } from 'react-router-dom';

export default function Contato() {
  return (
    <div>
      <h1>Bem vindo a pagina HOME!</h1>
      <Link to="/sobre" >Contato</Link> <br/>
      <Link to="/">Home</Link>
    </div>
  );
 }