import React,{Suspense} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useTranslation } from 'react-i18next';

function Copyright() {
  const {t} = useTranslation();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        {t('my-website')}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [{name:"alfred"},{name:"alfred"}, {name:"alfred"}, {name:"alfred"},{name:"alfred"}, {name:"alfred"}, {name:"alfred"},{name:"alfred"}, {name:"alfred"}];

function Page() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={8}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {t('header title')}
          </Typography>
        </Toolbar>
        </Grid>
        <Grid item xs={2}>
        <Button variant="contained" onClick={() => changeLanguage('fr')}>fr &nbsp; <img width="20%" src="https://i.ebayimg.com/thumbs/images/g/1aUAAOSwIfBcvfUd/s-l225.jpg"/></Button></Grid>
        <Grid item xs={2}>
        <Button variant="contained" onClick={() => changeLanguage('de')}>de &nbsp; <img width="20%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png" /></Button></Grid>
        </Grid>
        
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {t('title')}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {t('explanation')}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    {t('random card')}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {t('guess')}
                    </Button>
                    <Button size="small" color="primary">
                    {t('solution')}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {t('have-fun')}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        {t('contribute')}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

const Loader = () => (
    <div className="App">
       <div>loading...</div>
    </div>
  );

  
// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

