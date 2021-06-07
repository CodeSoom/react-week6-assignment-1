import CategoryListContainer from '../components/CategoryListContainer';
import RegionListContainer from '../components/RegionListContainer';
import RestaurantList from '../components/RestaurantList';

export default function RestaurantsPage() {
  return (
    <>
      <CategoryListContainer />
      <RegionListContainer />
      <RestaurantList />
    </>
  );
}
