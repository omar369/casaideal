import { combineReducers } from 'redux';

import anuncios from './anuncios.reducers.js';
import fotos from './fotos.reducers.js';
import auth from './auth.reducers.js';

export const reducers = combineReducers({ anuncios, fotos, auth });