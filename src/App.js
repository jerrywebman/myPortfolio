import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

import Home from './components/Home';
import Error from './components/Error';
import Contact from './components/Contact';
import AppNavbar from './components/AppNavbar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={Error} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
