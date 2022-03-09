import { useEffect, useState } from 'react';
import './Filmes.css';
import { useParams, useHistory } from 'react-router-dom';
import api from '../ServicesAPI/API';

export default function Filme(){
  const { id } = useParams();
  const history = useHistory();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadFilme(){
      const response = await api.get(`r-api/?api=filmes/${id}`);
      if(response.data.length === 0){
          //tentativa de acessar com um id q n existe mandado pra /
          history.replace('/');
          return;
      }
      // console.log(response.data);
      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();

    return() =>{
        console.log('componente desmontado')
    }

  }, [id, history]);

  function salvarfilme(){
    const minhalista =  localStorage.getItem('filmes');

    let filmesSalvos = JSON.parse(minhalista) || [];
    const hasfilmes = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id )

    if (hasfilmes){
        alert('já esta salvo');
        return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    alert('salvo')
}

  if(loading){
    return(
    <div className="filme-info">
      <h1>Carregando seu filme...</h1>
    </div>
    )
  }
  return(
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome}/>

      <h3>Sinopse</h3>
      {filme.sinopse}
      <div className='botoes'>
          <button onClick={salvarfilme}>Salvar</button>
          <button>
            <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                Trailer
            </a>
          </button>
      </div>
    </div>
  )
}