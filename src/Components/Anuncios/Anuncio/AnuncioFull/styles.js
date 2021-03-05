import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    smText: {
        fontSize: '70%'
    },
    smAvatar: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
    },
    mainContainer: {
        marginTop: '2.5rem',
        padding: '0',
    },
    gridMainContainer: {
        padding: '0% 10% 0% 10%'
    },
    gridMainContainerXs: {
        padding: '0',
        margin: '0',
    },
    head: {
        margin: '0',
        padding: '3%',
        flexWrap: 'wrap',
        overflowY: 'hidden'
    },
    media: {
        minHeight: '10%',
        paddingTop: '56.25%',
    },
    titleXs: {fontSize: '80%'},
    title: {fontSize: '120%'},
    subtitleXs: {fontSize: '70%'},
    subtitle: {fontSize: '90%'},
    featuresContainer: {
        height: '20%',
        padding: '2% 5% 2% 5%',
    },
    featureGrid: {
        marginLeft: '5%', 
    },
    featureCol: {
        marginTop: '3%', 
        padding: '0 5% 0 5%'
    },
    featureItem: {
        margin: '2%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    featureItemText: {
        fontSize: '0.5rem',
    },
    descripContainer: {
        height: '20rem',
        flexWrap: 'wrap',
        overflowY: 'scroll',
        padding: '2% 6% 2% 6%',
        margin: '3% 0% 3% 0',
    },
    description: {
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
        color: '#202020',
    },
    gallery: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        },
    gridList: {
        width: '80%',
        height: 450,
    },
    gridListXs: {
        width: '100%',
        height: 450,
    },
}));