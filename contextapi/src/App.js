/*import { useState } from 'react';
import Alunos from './components/Alunos';
import UserProvider from './contexts/user';

function App() {
  const [nomeAluno, setNomeAluno] = useState('cascata')

  return (
    <UserProvider>
      <div>
        <h1>Escola de Gatinhos</h1>
        <hr />
        <Titulo>
          É assim que funciona o children
        </Titulo>
        <Alunos nome={nomeAluno} mudaNome = {setNomeAluno}/>
        <Alunos />
      </div>
    </UserProvider>
  );
}

export default App;

function Titulo({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}*/


import { useState } from 'react';
import Alunos from './components/Alunos';

import UserProvider from './contexts/user';

function App() {

  return (
   <UserProvider>
      <div>
        <h1>ESCOLA</h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider> 
  );
}

export default App;
