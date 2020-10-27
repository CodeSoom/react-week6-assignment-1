import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import About from './About';

// import RegionsContainer from './RegionsContainer';
// import CategoriesContainer from './CategoriesContainer';
// import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

export default function App() {
  // useEffect(() => {
  //   dispatch(loadInitialData());
  // });

  return(
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path='/about' component={About} />
    </Switch>
  );
  // return (
  //   <div>
  //     <RegionsContainer />
  //     <CategoriesContainer />
  //     <RestaurantsContainer />
  //   </div>
  // );
}
