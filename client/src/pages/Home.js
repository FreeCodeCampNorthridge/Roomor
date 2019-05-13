import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between'
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});

const posts = [
  {
    title: 'Santa Monica, CA',
    id: 1,
    date: Date.now(),
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero magnam magni temporibus minima, quis ratione libero, natus doloremque ipsum totam omnis doloribus similique consequatur sunt sit aut nihil! Animi.',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Los Angeles, CA',
    id: 2,
    date: Date.now(),
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero magnam magni temporibus minima, quis ratione libero, natus doloremque ipsum totam omnis doloribus similique consequatur sunt sit aut nihil! Animi.',
    image:
      'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Venica, CA',
    id: 3,
    date: Date.now(),
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero magnam magni temporibus minima, quis ratione libero, natus doloremque ipsum totam omnis doloribus similique consequatur sunt sit aut nihil! Animi.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  }
];

const locations = [
  'California',
  'New York',
  'Florida',
  'Ohio',
  'Texas',
  'Utah',
  'Michigan',
  'Wisconsin',
  'Idaho',
  'Virgina'
];

const featuredPosts = [
  {
    title: 'Featured Listing',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  },
  {
    title: 'Feature Listing',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  }
];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019'
];

const social = ['GitHub', 'Twitter', 'Facebook'];

function Blog(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain} />
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {locations.map(location => (
            <Typography color="inherit" noWrap key={location}>
              {location}
            </Typography>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Roomor
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis vitae harum, perspiciatis natus non hic
                    reprehenderit amet. Modi architecto excepturi ducimus
                    adipisci ea quibusdam vero ipsa, quis eveniet totam
                    consequuntur.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                From our Users
              </Typography>
              <Divider />
              <ul>
                {posts.map(post => {
                  return (
                    <li key={post.id}>
                      {post.title}, {post.date}, {post.description},
                      {/* <img alt="beach" src={post.image} /> */}
                    </li>
                  );
                })}
              </ul>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Struggling to find a roommate? Craiglist can be a hit or miss,
                  find your ideal roommate on Roomor. Once you've found a match,
                  apartment hunt together. From one bedrooms to two or more with
                  better amenitites and locations.
                </Typography>
              </Paper>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.sidebarSection}
              >
                Archives
              </Typography>
              {archives.map(archive => (
                <Typography key={archive}>{archive}</Typography>
              ))}
              <Typography
                variant="h6"
                gutterBottom
                className={classes.sidebarSection}
              >
                Social
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Blog);
