//import logo from './logo.svg';
import {Container, Grid } from '@material-ui/core';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
//import Intro from './components/intro';
function App() {
  return (
    // <Container className='top_60'>
      <Grid container spacing={4} className='top_60'>
        <Grid item xs={3} >
          {/* sm={12} md={5} lg={4}> */}
          <Profile/>
          
        </Grid>
        <Grid item sm style={{backgroundColor:'transparent' ,
        //  color:'white', boxShadow:'0px 0px 15px 0px rgba(255, 255, 255, 0.33)'
      }}>
          
          <Router>
            <Header/><div className='main-container'>
            <Routes> 
              
              <Route path='/projects' element={ <Portfolio/>} /> 
              <Route path='/' element={<Resume/>}/>
              
              
              
            </Routes></div>
             <Footer/>
          </Router>
          
        </Grid>
      </Grid>
    // </Container>
  );
}

export default App;
