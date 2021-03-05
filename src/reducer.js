const defaultState = {
  regions: [],
  categories: [],
  selectedRegionId: null,
};



const reducers = {
  selectRegion(state, payload) {
    const { id } = payload;
    return {
      ...state,
      selectedRegionId: id,
    };
  },
  setRegions(state, payload) {
    const { regions } = payload;
    return {
      ...state,
      regions,
    };
  },
  selectCategory(state, payload) {
    const { id } = payload;
    return {
      ...state,
      selectedCategoryId: id,
    };
  },
  setCategories(state, payload) {
    const { categories } = payload;
    return {
      ...state,
      categories,
    };
  },
};

function defaultReducer(state, payload) {
  return state;
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  return (reducers[type] || defaultReducer)(state, payload);
};

export default reducer;