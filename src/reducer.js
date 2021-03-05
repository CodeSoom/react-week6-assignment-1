const defaultState = {
  regions: [],
  selectedRegionId: null,
};

const reducer = (state = defaultState, action) => {
  if(action.type === 'selectRegion') {
    const { id } = action.payload;
    return {
      ...state,
      selectedRegionId: id,
    }
  }
  if(action.type === 'setRegions'){
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }
  return state;
};

export default reducer;