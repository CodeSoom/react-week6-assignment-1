
export const selectRegion = (id) => (
    {
      type: 'selectRegion',
      payload: {
        id,
      },
    }
  );

export const setRegions = (regions) => (
  {
    type: 'setRegions',
    payload: {
      regions
    },
  }
);
