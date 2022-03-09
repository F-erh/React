import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Home() {
 const [trips, setTrips] = useState([]);
 
 useEffect(() => {
     async function loadApi() {
         const response = await api.get('trips');
         setTrips(response.data);
         console.log(response.data);
     }
     loadApi();
 }, [])

 return (
   <div>
       <div className='box'>
           {trips.map(trip => (
               <li key={trip.id}>
                   <img src={trip.image} alt={trip.title} />
                   <strong>{trip.title}</strong>
                   <span>status: {trip.status ? 'Disponivel' : 'indisponível'}</span>

                   <button type='button' onClick={()=> {}}>Reservar</button>
               </li>
           ))}
       </div>
   </div>
 );
}