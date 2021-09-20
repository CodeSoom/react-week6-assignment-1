const restaurant = {
  id: 1,
  categoryId: 1,
  name: '양천주가',
  address: '서울 강남구 123456',
  menuItems: [
    { id: 1, restaurantId: 1, name: '비빔밥' },
    { id: 2, restaurantId: 1, name: '짬뽕' },
    { id: 16, restaurantId: 1, name: '탕수육' },
    { id: 17, restaurantId: 1, name: '팔보채' },
    { id: 25, restaurantId: 1, name: '짜짱면' },
    { id: 32, restaurantId: 1, name: '유산슬' },
  ],
  reviews: [
    {
      id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
    },
  ],
};

export default restaurant;
