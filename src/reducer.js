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
  if(action.type === 'selectCategory') {
    const { id } = action.payload;
    return {
      ...state,
      selectedCategoryId: id,
    }
  }
  if(action.type === 'setCategories'){
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }
  return state;
};

export default reducer;