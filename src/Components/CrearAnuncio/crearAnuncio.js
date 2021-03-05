import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Container, Typography, Paper, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import NumberFormat from 'react-number-format';
//actions
import { createAnuncio, updateAnuncio } from '../../Actions/anuncios.actions.js';
//style
import useStyles from './styles';
//Component
import IconInput from './inconInput.js';
import Map from '../Maps/map.js'
import Places from '../Maps/places.js'
//icons
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PhotoIcon from '@material-ui/icons/Photo';
import axios from 'axios';


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onChange={onChange}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}


const CrearAnuncio = ({ currentId, setCurrentId}) => {

  const [marker, setMarker] = useState({lat: 20.695595, lng: -100.445277})
  const [coords, setCoords] = useState({ lat: 20.695595, lng: -100.445277 })
  const [address, setAddress] = useState('')
  
  
  const [anuncioData, setAnuncioData] = useState({ 
      title: '', 
      rentPrice: '', 
      salePrice: '', 
      description: '',
      type: '',
      ground: '',
      construction: '',
      floors: '',
      bedrooms: '',
      bathrooms:'',
      halfBathrooms:'',
      parking: '',
      address: '',
      latlng: {lat: 0, lng: 0},
      portrait: '',
      fotos: null
    });

  const [fotos, setFotos] = useState([]);

  const clear = () => {
    setCurrentId(0);
    setAnuncioData({ 
      title: '', 
      rentPrice: '', 
      salePrice: '', 
      description: '',
      type: '',
      ground: '',
      construction: '',
      floors: '',
      bedrooms: '',
      bathrooms:'',
      halfBathrooms:'',
      parking: '',
      address: '',
      latlng: {lat: 0, lng: 0},
      portrait: '',
      fotos: null 
    });
  };

  const [values, setValues] = useState({
    numberformat: '0',
  });
  
  const anuncio = useSelector((state) => (currentId ? state.anuncios.find((a) => a._id === currentId) : null));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (anuncio) setAnuncioData(anuncio);
  }, [anuncio]);


  //ON SUBMIT...
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Form Data para listado de fotos
    const fotosFormData = new FormData();
    for (let i=0; i< fotos.length; i++){
      fotosFormData.append('fotos', fotos[i]);
    }

    try {

      if (currentId === 0) {
        //NEW POST
        const filesRes = await axios.post('https://casa-ideal.herokuapp.com/anuncios/upload', fotosFormData, {headers: {'Content-Type': 'multipart/form-data'}} );
        
        const { filesData } = await filesRes.data;

        await dispatch(createAnuncio( {...anuncioData, fotos: filesData} ));

      } else {
        //UPDATE POST
        // const filesRes = await axios.post('http://localhost:5000/anuncios/upload', fotosFormData, {headers: {'Content-Type': 'multipart/form-data'}} );
        // console.log(fotos);
        
        // const { filesData } = await filesRes.data;

        await dispatch(updateAnuncio(currentId, anuncioData ));
        // {...anuncioData, fotos: filesData}  //---------------------FALTA UPDATE Y DELETE PARA FOTOS... Y ORGANIZAR TODO
      }
      clear();
      history.push('/anuncios');

    } catch (error) {
      console.log(error);
    }
  };

  if (user?.result?.email !== 'omarins.222@gmail.com') {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form action='/upload' autoComplete="off" encType="multipart/form-data" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        {anuncio ? <Typography variant="h6">Modificar Anuncio</Typography> : <Typography variant="h6">Crea un Anuncio</Typography>}

{/* TITULO Y DESCRIPCIÓN */}
        <TextField name="title" variant="outlined" label="Titulo" fullWidth value={anuncioData.title} onChange={(e) => setAnuncioData({ ...anuncioData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Descripcion" fullWidth multiline={true} rows={6} value={anuncioData.description} onChange={(e) => setAnuncioData({ ...anuncioData, description: e.target.value })} />
        
        <TextField
          label="Precio Renta"
          onChange={(e) => setAnuncioData({ ...anuncioData, rentPrice: e.target.value })}
          name="numberformat"
          id="rent-price"
          variant="outlined"
          value={anuncioData.rentPrice}
          InputLabelProps={{shrink: true}}
          InputProps={{inputComponent: NumberFormatCustom}}/>

        <TextField
          label="Precio Venta"
          onChange={(e) => setAnuncioData({ ...anuncioData, salePrice: e.target.value })}
          name="numberformat"
          id="sale-price"
          value={anuncioData.salePrice}
          InputLabelProps={{shrink: true}}
          variant="outlined"
          InputProps={{inputComponent: NumberFormatCustom}}/>

{/* CARACTERISTICAS */}
        <Grid container justify='center'>
          <Grid item container xs={6} md={6}>

            <IconInput label='Recamaras' variant='outlined' name='rooms' type='number' autoFocus value={anuncioData.bedrooms}
              onChange={(e) => setAnuncioData({ ...anuncioData, bedrooms: e.target.value })} />

            <IconInput label='Baños' variant='outlined' name='bathrooms' type='number' autoFocus value={anuncioData.bathrooms}
              onChange={(e) => setAnuncioData({ ...anuncioData, bathrooms: e.target.value })} />
            
            <IconInput label='1/2 Baño' variant='outlined' name='halfbathrooms' type='number' autoFocus value={anuncioData.halfBathrooms}
              onChange={(e) => setAnuncioData({ ...anuncioData, halfBathrooms: e.target.value })} />

            <IconInput label='Estacionamiento' variant='outlined' name='parking' type='number' autoFocus value={anuncioData.parking}
              onChange={(e) => setAnuncioData({ ...anuncioData, parking: e.target.value })} />

          </Grid>
          <Grid item container xs={6} md={6}>

            <IconInput label='m2 Terreno' variant='outlined' name='ground' type='number' autoFocus value={anuncioData.ground}
              onChange={(e) => setAnuncioData({ ...anuncioData, ground: e.target.value })} />

            <IconInput label='m2 Construcción' variant='outlined' name='construction' type='number' autoFocus value={anuncioData.construction}
              onChange={(e) => setAnuncioData({ ...anuncioData, construction: e.target.value })} />
            
            <IconInput label='pisos' variant='outlined' name='floors' type='number' autoFocus value={anuncioData.floors}
              onChange={(e) => setAnuncioData({ ...anuncioData, floors: e.target.value })} />

            <IconInput label='Tipo de inmueble' variant='outlined' name='type' type='text' autoFocus value={anuncioData.type}
              onChange={(e) => setAnuncioData({ ...anuncioData, type: e.target.value })} />

          </Grid>
        </Grid>

{/* IMAGENES */}
        <Grid container>
          <Grid item container xs={12} md={6} justify='center' className={classes.fileInput}>
            <PhotoIcon/>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setAnuncioData({ ...anuncioData, portrait: base64 })} />
          </Grid>

          <Grid item container xs={12} md={6} justify='center' className={classes.fileInput}>
            <PhotoCamera />
            <input type="file" onChange={(e)=> setFotos(e.target.files)} name="imagenes" multiple="multiple" />
          </Grid>
        </Grid>

{/* ADDRESS-->         */}
        <Grid container item xs={12} md={12} style={{padding: '0 5% 0 5%'}} onSelect={()=> setAnuncioData({ ...anuncioData, address: address, latlng: coords })}>
          <Places setAddress={setAddress} address={address} setCoords={setCoords} coords={coords} />
        </Grid>

{/* MAP-->         */}
        <Container className={classes.mapContainer} onClick={()=> {
          setAnuncioData({...anuncioData, latlng: marker})
        }}>
          <Map marker={marker} setMarker={setMarker} />
        </Container>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Limpiar todo</Button>

      </form>
    </Paper>
  );
};

export default CrearAnuncio;