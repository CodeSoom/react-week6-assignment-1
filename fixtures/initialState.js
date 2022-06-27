const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurantDetails: null,
  selectedRegion: null,
  selectedCategory: null,
  status: {
    pending: false,
    success: false,
    failure: false,
  },
};

export default initialState;
