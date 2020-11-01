const restaurant = {
  id: 1,
  categoryId: 1,
  name: '양천주가',
  address: '서울 강남구 123456',
  menuItems: [
    {
      id: 1,
      restaurantId: 1,
      name: '비빔밥',
    },
    {
      id: 2,
      restaurantId: 1,
      name: '짬뽕',
    },
    {
      id: 16,
      restaurantId: 1,
      name: '탕수육',
    },
  ],
  reviews: [
    {
      id: 1,
      restaurantId: 1,
      name: '테스터',
      score: 5,
      description: '훌륭하다 훌륭하다 지구인놈들',
    },
    {
      id: 3,
      restaurantId: 1,
      name: '테스터',
      score: 3,
      description: 'Hi!',
    },
  ],
  information: '양천주가 in 서울 강남구 123456',
};

export default restaurant;
