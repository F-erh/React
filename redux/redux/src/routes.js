import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Reserva from './pages/Reserva';

export default function Rotas(){
    return (
        <Routes>
            <Route path="/" exact component={Home}/>
            <Route path="/reserva" component={Reserva} />
        </Routes>
    );
}