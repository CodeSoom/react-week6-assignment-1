export const restaurants = [
  {
    id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
  },
];

export const restaurantInfo = {
  id: 1,
  categoryId: 1,
  name: '양천주가',
  address: '서울 강남구',
  menuItems: [
    {
      id: 1,
      restaurantId: 1,
      name: '짜장면',
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
  information: '양천주가 in 서울 강남구',
};
