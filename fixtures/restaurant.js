const restaurant = {
  id: 1,
  categoryId: 1,
  name: '양천주가',
  address: '서울 강남구 123456',
  menuItems: [{ id: 1, restaurantId: 1, name: '비빔밥' }, { id: 2, restaurantId: 1, name: '짬뽕' }, { id: 16, restaurantId: 1, name: '탕수육' }, { id: 17, restaurantId: 1, name: '팔보채' }],
  reviews: [{
    id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
  }, {
    id: 3, restaurantId: 1, name: '테스터', score: 3, description: 'Hi!',
  }, {
    id: 6, restaurantId: 1, name: '테스터', score: 1, description: '비룡 어디에 갔냐? 비룡 내놔라.',
  }, {
    id: 18, restaurantId: 1, name: '테스터', score: 3, description: '맛없어요\n노맛돈아깝',
  }, {
    id: 19, restaurantId: 1, name: '테스터', score: 5, description: '완벽해요!',
  }, {
    id: 20, restaurantId: 1, name: '테스터', score: 1, description: '1점 테스트',
  }, {
    id: 21, restaurantId: 1, name: '테스터', score: 3, description: '무난해요',
  }, {
    id: 22, restaurantId: 1, name: '테스터', score: 5, description: 'codesoom is good',
  }, {
    id: 24, restaurantId: 1, name: '테스터', score: 5, description: '와우',
  }, {
    id: 25, restaurantId: 1, name: '테스터', score: 5, description: 'codesoom is awesome',
  }, {
    id: 26, restaurantId: 1, name: '테스터', score: 5, description: '권모리모리모리',
  }, {
    id: 28, restaurantId: 1, name: '테스터', score: 5, description: 'JMTTTTTTTTTTTTTTTT',
  }, {
    id: 29, restaurantId: 1, name: '테스터', score: 5, description: 'JMTJMT',
  }, {
    id: 30, restaurantId: 1, name: '테스터', score: 5, description: '아아아오오오아아아이이이이이이이이잉~',
  }, {
    id: 31, restaurantId: 1, name: '테스터', score: 5, description: 'JMTJMTJMTJMT',
  }, {
    id: 32, restaurantId: 1, name: '테스터', score: 5, description: '누군가가 테스트하고 있나보네요 ㅋㅋㅋㅋ',
  }, {
    id: 33, restaurantId: 1, name: '테스터', score: 5, description: '반가워요~~~',
  }, {
    id: 34, restaurantId: 1, name: '테스터', score: 5, description: 'JMT',
  }, {
    id: 47, restaurantId: 1, name: '테스터', score: 5, description: '리뷰뷰뷰뷰뷰뷰뷰',
  }, {
    id: 48, restaurantId: 1, name: '테스터', score: 5, description: '리뷰를 남기다',
  }, {
    id: 49, restaurantId: 1, name: '테스터', score: 5, description: '맛있어서 행복해요.',
  }, {
    id: 50, restaurantId: 1, name: '테스터', score: 1, description: '왜안되냐공오오',
  }, {
    id: 51, restaurantId: 1, name: '테스터', score: 5, description: '우와된다행복해ㅐㅠㅠ',
  }, {
    id: 52, restaurantId: 1, name: '테스터', score: 5, description: '마아아아앗이이이있어요오오오',
  }, {
    id: 55, restaurantId: 1, name: '테스터', score: 4, description: '정말 맛있어요. 강추!',
  }, {
    id: 60, restaurantId: 1, name: '테스터', score: 5, description: '5',
  }, {
    id: 61, restaurantId: 1, name: '테스터', score: 1, description: '마이너스..',
  }, {
    id: 72, restaurantId: 1, name: '테스터', score: 2, description: '맛이 없당',
  }, {
    id: 73, restaurantId: 1, name: '테스터', score: 4, description: '좋아요',
  }, {
    id: 74, restaurantId: 1, name: '테스터', score: 1, description: "그것이 '평점' 이니까",
  }, {
    id: 75, restaurantId: 1, name: '테스터', score: 5, description: '굳굳',
  }, {
    id: 79, restaurantId: 1, name: '테스터', score: 4, description: '정렬해보자',
  }, {
    id: 80, restaurantId: 1, name: '테스터', score: 4, description: '배고파',
  }, {
    id: 81, restaurantId: 1, name: '테스터', score: 3, description: 'soso',
  }, {
    id: 109, restaurantId: 1, name: '테스터', score: 2, description: '떡볶이먹고싶당',
  }, {
    id: 108, restaurantId: 1, name: '테스터', score: 5, description: '맛나요',
  }, {
    id: 107, restaurantId: 1, name: '테스터', score: 3, description: '리뷰리뷰',
  }, {
    id: 88, restaurantId: 1, name: '테스터', score: 4, description: '맛있어요.',
  }, {
    id: 89, restaurantId: 1, name: '테스터', score: 5, description: '행복해요.',
  }, {
    id: 104, restaurantId: 1, name: '테스터', score: 3, description: '테스트다',
  }, {
    id: 103, restaurantId: 1, name: '테스터', score: 4, description: '맛있당',
  }, {
    id: 101, restaurantId: 1, name: '테스터', score: 5, description: 'useCallback 테스트',
  }, {
    id: 99, restaurantId: 1, name: '테스터', score: 5, description: 'hi',
  }, {
    id: 92, restaurantId: 1, name: '테스터', score: 1, description: '하하',
  }, {
    id: 110, restaurantId: 1, name: '테스터', score: 3, description: '하이',
  }, {
    id: 1003, restaurantId: 1, name: '테스터', score: 2, description: '123',
  }, {
    id: 1019, restaurantId: 1, name: '테스터', score: 3, description: 'dg',
  }, {
    id: 1020, restaurantId: 1, name: '테스터', score: 1, description: 'tre',
  }],
  information: '양천주가 in 서울 강남구 123456',
};

export default restaurant;
