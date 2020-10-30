Feature('Header');

const pages = [
  '/restaurants',
  '/about',
  '/not-exist',
];

Scenario('홈으로를 클릭하면 메인 페이지로 돌아옵니다.', (I) => {
  pages.forEach((page) => {
    I.amOnPage(page);

    I.click('홈으로');

    I.see('Home');
  });
});
