import React from 'react';

export default function Reservas() {
 return (
   <><div>
     <h1>voce solicitou 1 reservas</h1>
   </div><div>
       <img src='https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg'
         alt='Maceio' />
       <strong>viagem maceio 7 dias</strong>
       <span>quantidade: 2</span>
       <button
         type='button'
         onClick={() => { } }>
           reservas
       </button>
     </div>
     <footer>
       <button type='button'>solicitar reservas</button>
     </footer>
     </>
 );
}