import {BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import Filmes from './Pages/Filmes';
import Favoritos from './Pages/Favoritos';

const Routess = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Route>
                <Route exact path="/" component={Home}></Route>
                <Route exact path='/filmes/:id' component={Filmes}></Route>
                <Route exact path='/favoritos' component={Favoritos}></Route>
            </Route>
        </BrowserRouter>
    )
}

export default Routess;