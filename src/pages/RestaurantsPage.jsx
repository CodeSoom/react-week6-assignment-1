import REGIONS from '../../fixtures/regions';

export default function RestaurantsPage() {
  return (
    <ul>
      {
        REGIONS.map((region) => (
          <li key={region.id}>
            {region.name}
          </li>
        ))
      }
    </ul>
  );
}
