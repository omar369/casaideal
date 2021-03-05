import {UPLOAD} from '../constants/actionTypes';

export default (fotos = [], action) => {
  switch (action.type) {
    
    case UPLOAD:
        return [...fotos, action.payload];

    default:
        return fotos;
    }
};