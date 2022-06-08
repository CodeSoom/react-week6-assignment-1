import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../../apps/store/actions';

import { get } from '../../apps/utils';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}
