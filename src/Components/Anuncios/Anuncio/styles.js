import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  iconSection:{
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  tooltipText: {
    fontSize: '0.6em',
  },
  cardActions: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(0.5),
    },
    '& hr': {
      margin: theme.spacing(1, 0.5),
    },
  },
}));