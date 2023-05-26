//import logo from './logo.svg';
import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
//import Intro from './components/intro';
function App() {
  return (
    // <Container className='top_60'>
    <Grid container spacing={3} className="top_60">
      <Grid item xs={12} sm={12} md={3} lg={3}>
        {/* sm={12} md={5} lg={4}> */}
        <Profile />
      </Grid>
      <Grid
        item
        xs
        style={{
          backgroundColor: "transparent",
          // boxShadow:'0px 0px 15px 0px rgba(0, 0, 0, 0.33)'
        }}
      >
        <Router>
          <Header />
          <div
            className="main-container"
            style={{
              backgroundColor: "black",
              boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.33)",
            }}
          >
            <Routes>
              <Route path="/projects" element={<Portfolio />} />
              <Route path="/" element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Grid>
    </Grid>
    // </Container>
  );
}

export default App;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, Toolbar, Typography, Button, Grid, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
// import profilePicture from './assets/images/DP.jpg';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// }));

// function PortfolioPage() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             My Portfolio
//           </Typography>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">Projects</Button>
//           <Button color="inherit">Contact</Button>
//         </Toolbar>
//       </AppBar>
//       <Grid container spacing={3} style={{ padding: '20px' }}>
//         <Grid item xs={12} md={4}>
//           <Card className={classes.card}>
//             <CardActionArea>
//               <CardMedia
//                 className={classes.media}
//                 image={profilePicture}
//                 title="Profile"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   About Me
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Hi, I'm [your name]. I'm a [your profession or interests], and I'm passionate about [what you're passionate about].
//                   [Add some details about your background, education, and experience here, along with any relevant accomplishments or projects.]
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Card className={classes.card}>
//             <CardActionArea>
//               <CardMedia
//                 className={classes.media}
//                 image="https://source.unsplash.com/random/345x140"
//                 title="Project 1"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Project 1
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   [Description of project 1]
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Card className={classes.card}>
//             <CardActionArea>
//               <CardMedia
//                 className={classes.media}
//                 image="https://source.unsplash.com/random/345x140"
//                 title="Project 2"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Project 2
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   [Description of project 2]
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default PortfolioPage;
