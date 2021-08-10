import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

describe('<Header />', () => {
  it('renders header', () => {
    const { getByText } = render(<Header />);
    const header = getByText('이것은 헤더헤더');
    expect(header).toBeInTheDocument();
  });
});
