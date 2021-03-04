import { get, equal, isInteger } from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('홍길동');
  expect(g(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  const g = equal('name', '임꺽정');

  expect(f(state)).toBeTruthy();
  expect(g(state)).toBeFalsy();
});

test('isInteger', () => {
  const numberId = 1;
  const stringId = '잘못된 주소';

  expect(isInteger(numberId)).toBeTruthy();
  expect(isInteger(stringId)).toBeFalsy();
});
