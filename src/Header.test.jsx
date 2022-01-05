import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('renders "헤더', () => {
    const { container } = render((
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('헤더');
  });

//   TODO: 헤더 클릭시 HomePage 이동 테스트 추가
//   it('"헤더" 클릭 시, HomePage 로 이동', () => {
//
//   });
});
