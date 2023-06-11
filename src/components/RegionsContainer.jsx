import { useDispatch, useSelector } from 'react-redux';

import { selectRegion, loadRestaurants } from '../redux/actions';

import { get } from '../utils/utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" onClick={() => handleClick(region.id)}>
            {region.name}
            {selectedRegion ? (
              <>{region.id === selectedRegion.id && '(V)'}</>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
