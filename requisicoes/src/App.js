/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import './style.css';

////API: https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([])
  
  useEffect(()=>{
    function load(){
      fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
      .then((result)=>result.json())
      .then((json)=>{
        setNutri(json);
      })
    }
    load();
  },[]);

  return(
    <div className="container">
      <header>
        <strong>reac nutri</strong>
      </header>
      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"/>
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>

          </article>
        )
      })
}
    </div>
  );
}

export default App;