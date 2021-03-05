import { fetchRegions } from './services/api';

export const selectRegion = (id) => (
    {
      type: 'selectRegion',
      payload: {
        id,
      },
    }
  );

export const setRegions = (regions) => {
  return (
    {
      type: 'setRegions',
      payload: {
        regions
      },
    }
  );
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}