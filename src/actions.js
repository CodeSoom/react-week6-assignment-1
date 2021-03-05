
export const selectRegion = (id) => (
    {
      type: 'selectRegion',
      payload: {
        id,
      },
    }
  );

export const setRegions = (regions) => {
  console.log(3);
  console.log(regions);
  return (
    {
      type: 'setRegions',
      payload: {
        regions
      },
    }
  );
}

export const loadRegions = () => {
  
};
