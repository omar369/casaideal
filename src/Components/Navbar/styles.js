import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    mainAppBarCnt: {
      flexGrow: 1,
      backgroundColor: '#766092'
    },
    menuButton: {
      marginRight: '2%',
    },
    loginBtn: {
      backgroundColor: '#796092',
      color: 'white',
      marginRight: 25
    },
    logoutBtn: {
      backgroundColor: '#796092',
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
      backgroundColor: '#39d',
      width: '6%',
      height: '6%',
      alignSelf: 'center'
    },
  }));