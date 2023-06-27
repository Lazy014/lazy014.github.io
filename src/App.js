import { Grid } from "@material-ui/core";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  return (
    // <Container className='top_60'>
    <Grid container spacing={3} className="top_60">
      <Grid item xs={12} sm={12} md={4} lg={3}>
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
              <Route path="/contactMe" element={<Contact />} />
              <Route path="/" element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
