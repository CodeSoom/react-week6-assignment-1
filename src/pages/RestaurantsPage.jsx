import CategoryListContainer from '../components/CategoryListContainer';
import RegionListContainer from '../components/RegionListContainer';
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
