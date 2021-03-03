import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  const handleClick = jest.fn();

  const renderHeader = () => render((
    <MemoryRouter>
      <Header handleClick={handleClick} />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Header', () => {
    const { queryByText } = renderHeader();

    expect(queryByText('헤더')).not.toBeNull();
  });

  it('calls handleClick', () => {
    const { queryByText } = renderHeader();

    expect(queryByText('헤더')).not.toBeNull();

    fireEvent.click(queryByText('헤더'));

    expect(handleClick).toBeCalled();
  });
});
