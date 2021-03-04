const defaultState = {
  selectedRegionId: null,
};

const reducer = (state = defaultState, action) => {
  const { id } = action.payload;
  if(action.type == 'selectRegion') {
    return {
      ...state,
      selectedRegionId: id,
    }
  }
  return state;
};

export default reducer;