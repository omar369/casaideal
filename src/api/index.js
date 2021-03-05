import axios from 'axios';

//url HEROKU:
// 'https://casa-ideal.herokuapp.com/'
const API = axios.create({ baseURL: 'https://casa-ideal.herokuapp.com/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchAnuncios = () => API.get('/anuncios');
export const createAnuncio = (newAnuncio) => API.post('/anuncios', newAnuncio );
// export const uploadFotos = (newFotos) => API.post('/anuncios/update', newFotos );
export const updateAnuncio = (id, updatedAnuncio) => API.patch(`/anuncios/${id}`, updatedAnuncio);
export const deleteAnuncio = (id) => API.delete(`/anuncios/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);