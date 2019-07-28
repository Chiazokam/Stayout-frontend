import React from 'react';
import { shallow } from 'enzyme';
import { BackImage } from '../../../components/common';

describe('Back Image Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<BackImage />);
    expect(tree).toMatchSnapshot();
  });
});
