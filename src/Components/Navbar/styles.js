import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    mainAppBarCnt: {
      flexGrow: 1,
      backgroundColor: '#629'
    },
    menuButton: {
      marginRight: '2%',
    },
    loginBtn: {
      backgroundColor: '#3a9',
      color: 'white',
      marginRight: 25
    },
    logoutBtn: {
      backgroundColor: '#3a9',
      color: 'white'
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
      color: 'white',
      backgroundColor: '#3a9',
      width: '6%',
      height: '6%',
      alignSelf: 'center'
    },
  }));