import { get, equal } from './utils';

describe('utils', () => {
  it('get', () => {
    const state = {
      name: '홍길동',
    };

    const f = get('name');
    const g = get('age');

    expect(f(state)).toBe('홍길동');
    expect(g(state)).toBeUndefined();
  });

  it('equal', () => {
    const state = {
      name: '홍길동',
    };

    const f = equal('name', '홍길동');
    const g = equal('name', '임꺽정');

    expect(f(state)).toBeTruthy();
    expect(g(state)).toBeFalsy();
  });
});
