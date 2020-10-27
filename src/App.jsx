import React, { useEffect } from 'react';

import { Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

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
