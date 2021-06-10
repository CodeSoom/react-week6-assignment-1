import CategoryListContainer from '../components/CategoriesContainer';
import RegionListContainer from '../components/RegionsContainer';
import RestaurantList from '../components/RestaurantList';

export default function RestaurantsPage() {
  return (
    <>
      <h2>Restaurants</h2>

      <CategoryListContainer />
      <RegionListContainer />
      <RestaurantList />
    </>
  );
}
