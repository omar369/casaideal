import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from './Components/Navbar/navbar.js'
import Home from './Components/Home/home.js';
import Anuncios from './Components/Anuncios/anuncios.js';
import AnuncioFull from './Components/Anuncios/Anuncio/AnuncioFull/anuncioFull.js';
import CrearAnuncio from './Components/CrearAnuncio/crearAnuncio.js';
import Auth from './Components/Auth/auth.js';
import FichaTec from './Components/Anuncios/Anuncio/FichaTec/fichaTec.js';

import {getAnuncios} from './Actions/anuncios.actions.js';


function App() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnuncios());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact render={()=> <Home />} />
      <Route path='/anuncios' exact render={()=> <Anuncios setCurrentId={setCurrentId} currentId={currentId} />} />
      <Route path='/anuncio/:id?' exact render={()=> <AnuncioFull currentId={currentId} />} />
      <Route path='/ficha/:id?' exact render={()=> <FichaTec currentId={currentId} />} />
      <Route path='/crear-anuncio' exact render={()=> <CrearAnuncio currentId={currentId} setCurrentId={setCurrentId}/>} />
      <Route path='/auth' exact render={()=> <Auth/>}/>
    </BrowserRouter>
  );
}

export default App;
