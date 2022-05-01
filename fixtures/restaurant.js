const restaurant = {
  id: 2,
  categoryId: 5,
  name: '성전떡볶이',
  address: '서울 강남구 강남대로94길 21',
  menuItems: [
    { id: 3, restaurantId: 2, name: '떡볶이' },
    { id: 4, restaurantId: 2, name: '튀김' },
    { id: 5, restaurantId: 2, name: '오뎅' },
    { id: 6, restaurantId: 2, name: '컵밥' },
  ],
  reviews: [
    {
      id: 15, restaurantId: 2, name: '테스터', score: 5, description: '테스트중입니다!!',
    },
    {
      id: 59, restaurantId: 2, name: '테스터', score: 5, description: '이번에는 여기와서테스트',
    },
    {
      id: 62, restaurantId: 2, name: '테스터', score: 5, description: '한번더 테스트',
    },
    {
      id: 63, restaurantId: 2, name: '테스터', score: 5, description: '떡볶이먹고싶당',
    },
    {
      id: 66, restaurantId: 2, name: '테스터', score: 1, description: '-3점!',
    },
    {
      id: 67, restaurantId: 2, name: '테스터', score: 5, description: '너무 맛있어용!ㅠㅠ',
    },
    {
      id: 150, restaurantId: 2, name: '테스터', score: 5, description: '맛집 인정!',
    },
    {
      id: 151, restaurantId: 2, name: '테스터', score: 3, description: '그저 그럼',
    },
    {
      id: 208, restaurantId: 2, name: '테스터', score: 5, description: '리뷰 남깁니다 ~~~~~~~~',
    },
  ],
  information: '성전떡볶이 in 서울 강남구 강남대로94길 21',
};

export default restaurant;
