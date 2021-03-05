import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: '2%',
    },
    title: {
      flexGrow: 1,
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '400px',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.8em',
      textAlign: 'left'
    },
    avatar: {
      color: 'rgb(120,50,125)',
      backgroundColor: 'white',
      width: '6%',
      height: '6%',
      alignSelf: 'center'
    },
  }));