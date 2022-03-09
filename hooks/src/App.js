import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {

  const [tarefas, setTarefas] = useState([]);

  const [nome, setNome] = useState([
    'fernanda',
    'cascata',
    'cacau',
    'lola'
  ]);

  const [nome2, setNome2] = useState(['Fer'])
/*       state  valor do state
         quando queremos alterar o valor do state usa o setState*/

  const [input, setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, [])


  useEffect(()=>{}, [])
  //forma de montar o useeffect
  //toda vez que o tarefas for alterado, vai chamar a função useEffect
  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])

 /* function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('');
  }*/
  function handleGato(){
    setNome([nome, input])
    setInput('');
  }

  const totalTar = useMemo(()=> tarefas.length, [tarefas]);

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  },[input, tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <ul>
        {nome.map(nome =>(
          <li key={nome}>{nome}</li>
        ))}
      </ul>
      <h1>{nome2}</h1>
      <strong>tenho {totalTar} tarefas</strong>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>add</button>
      <button type="button" onClick={handleGato}>add gato</button>
    </div>
  );
}

export default App;
