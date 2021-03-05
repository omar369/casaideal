import {FETCH_ALL, CREATE, UPLOAD, UPDATE, DELETE} from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getAnuncios = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAnuncios();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createAnuncio = (anuncio) => async (dispatch) => {
    try {
      const { data } = await api.createAnuncio(anuncio);
      // const { files } = await api.uploadFotos(fotos);
  
      dispatch({ type: CREATE, payload: data });
      // dispatch({ type: UPLOAD, payload: files });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateAnuncio = (id, anuncio) => async (dispatch) => {
    try {
      const { data } = await api.updateAnuncio(id, anuncio);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteAnuncio = (id) => async (dispatch) => {
    try {
      await api.deleteAnuncio(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };