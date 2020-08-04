import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
//Desafio
import Pagina404 from './pages/404'




//Route é importante colocar o exact, pois assim estou definindo que minha home 
//
// 
ReactDOM.render(
  <BrowserRouter>
    <Switch>
     <Route path="/" component={Home} exact />
     <Route path="/cadastro/video" component={CadastroVideo} />
     <Route path="/cadastro/categoria" component={CadastroCategoria} />
     <Route component={Pagina404} />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


