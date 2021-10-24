import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch, Link,
  Route
} from "react-router-dom";
import Home from './views/Home'
import People from './views/People'
import Vehicles from './views/Vehicles'
import Planets from './views/Planets'
import Details from './views/Details'
import "bootstrap/dist/css/bootstrap.min.css";
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import injectContext from './store/AppContext';
import ScrollToTop from './components/scrollToTop';
import Favorites from './views/Favorites';

const App = () => {
  const basename = process.env.BASENAME || "";
  return (
    <Router basename={basename}>
      <ScrollToTop>
      <div className="d-flex flex-column h-100 text-center text-white bg-black">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column stars-bg">
          <header className="mb-5">
            <div>
              <Link className="text-white" to="/"><h3 className="float-md-start mb-0">STAR WARS</h3></Link>
              <Navbar />
            </div>
          </header>
          <main className="px-3 flex-shrink-0">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People />
              </Route>
              <Route exact path="/vehicles">
                <Vehicles />
              </Route>
              <Route exact path="/planets">
                <Planets />
              </Route>
              <Route exact path="/details">
                <Details />
              </Route>
              <Route exact path="/favorites">
                <Favorites />
              </Route>

            </Switch>
          </main>

        <Footer />
       </div>
      </div>
      </ScrollToTop>
    </Router>
  );
}

export default injectContext(App);
