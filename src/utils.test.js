import { get, equal, isEmpty } from './utils';

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

test('isEmpty', () => {
  const value = '홍길동';

  const result1 = isEmpty(value);
  const result2 = isEmpty();
  const result3 = isEmpty(null);

  expect(result1).toBeFalsy();
  expect(result2).toBeTruthy();
  expect(result3).toBeTruthy();
});
