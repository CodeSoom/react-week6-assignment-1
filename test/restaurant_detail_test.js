Feature('RestaurantDetail');

const menus = ['한우곰탕', '한우우거지탕'];

Scenario('레스토랑 정보와 메뉴 목록을 볼 수 있다.', ({ I }) => {
  I.amOnPage('/restaurants/1');

  I.see('양천주가');
  I.see('서울 강남구');

  menus.forEach((menu) => {
    I.see(menu);
  });
});
