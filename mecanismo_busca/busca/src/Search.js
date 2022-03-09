import React, { useState, useMemo } from 'react';

const data = [
  'amaciante',
  'desinfetante',
  'cloro',
  'sabão de coco',
  'sabão liquido'
];

export default function Search(){
  const [busca, setBusca] = useState('');

  const filter = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return data.filter((data) => 
    data.toLowerCase().includes(lowerBusca)
    );
  }, [busca])

  return (
    <div className="Search">
      <h1>Mecanismo de busca</h1>
      <input 
        type="search"
        value={busca}
        onchange={(ev, data) => setBusca(ev.target.value)}
        />
        <ul>
          {filter.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
    </div>
  );
}