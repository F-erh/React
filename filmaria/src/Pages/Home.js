/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import api from '../ServicesAPI/API';
import { Link } from 'react-router-dom';
import './Home.css'
export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function load(){
      const response = await api.get('r-api/?api=filmes/')
      console.log(response.data);
      setFilmes(response.data);
    }
    load();

  },[]);

    return (
      <div className='container'>
        <div className='lista-filmes'>
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome}/>
              <Link to={`/filmes/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
        </div>
      </div>
    );
  }
  