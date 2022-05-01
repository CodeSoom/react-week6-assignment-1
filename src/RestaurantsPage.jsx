import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function RestaurantsPage() {
  return (
    <>
      <h2>Restaurants</h2>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
