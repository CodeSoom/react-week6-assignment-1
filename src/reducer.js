const defaultState = {
  regions: [],
  categories: [],
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
  if(action.type === 'selectCategories') {
    const { id } = action.payload;
    return {
      ...state,
      selectCategories: id,
    }
  }
  if(action.type === 'setCategories'){
    const { setCategories } = action.payload;
    return {
      ...state,
      setCategories,
    };
  }
  return state;
};

export default reducer;