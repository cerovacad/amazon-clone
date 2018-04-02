import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/pages/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddDeleteBookPage from '../components/pages/AddDeleteBookPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={HomePage} exact={true}/>
        <Route path='/create' component={AddDeleteBookPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default AppRouter;