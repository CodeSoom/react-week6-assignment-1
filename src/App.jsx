import React from 'react';
import RegionsContainer from './RegionsContainer';
import { loadRegions, loadCategories } from './actions';
import { useDispatch } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';


export default function App() {
  const dispatch = useDispatch();
  dispatch(loadRegions());
  dispatch(loadCategories());
  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}
