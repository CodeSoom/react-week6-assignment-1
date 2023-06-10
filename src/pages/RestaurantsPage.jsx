import RegionsContainer from '../components/RegionsContainer';
import CategoriesContainer from '../components/CategoriesContainer';
import RestaurantsContainer from '../components/RestaurantsContainer';

export default function RestaurantsPage() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
