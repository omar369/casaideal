import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (anuncios = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    
    case CREATE:
      return [...anuncios, action.payload];

    case UPDATE:
      return anuncios.map((anuncio) => (anuncio._id === action.payload._id ? action.payload : anuncio));

    case DELETE:
      return anuncios.filter((anuncios) => anuncios._id !== action.payload);

    default:
      return anuncios;
  }
};