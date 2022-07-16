const restaurant = {
  id: 1,
  categoryId: 1,
  name: '양천주가',
  address: '서울 강남구',
  menuItems: [
    { id: 1, restaurantId: 1, name: '한우곰탕' },
    { id: 2, restaurantId: 1, name: '한우우거지탕' },
    { id: 16, restaurantId: 1, name: '한우불고기전골' },
    { id: 17, restaurantId: 1, name: '한우육회비빔밥' },
    { id: 25, restaurantId: 1, name: '한우육회' },
    { id: 32, restaurantId: 1, name: '후식냉면' },
  ],
  reviews: [
    {
      id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
    },
    {
      id: 3, restaurantId: 1, name: '테스터', score: 3, description: 'Hi!',
    },
    {
      id: 6, restaurantId: 1, name: '테스터', score: 1, description: '비룡 어디에 갔냐? 비룡 내놔라.',
    },
    {
      id: 18, restaurantId: 1, name: '테스터', score: 3, description: '맛없어요\n노맛돈아깝',
    },
    {
      id: 19, restaurantId: 1, name: '테스터', score: 5, description: '완벽해요!',
    },
  ],
  information: '양천주가 in 서울 강남구',
};

export default restaurant;
