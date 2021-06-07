import CategoryListContainer from './CategoryListContainer';
import RegionListContainer from './RegionListContainer';
import RestaurantList from './RestaurantList';

export default function RestaurantsPage() {
  return (
    <>
      <CategoryListContainer />
      <RegionListContainer />
      <RestaurantList />
    </>
  );
}
