import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../../components/common';

describe('Button Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<Button />);
    expect(tree).toMatchSnapshot();
  });
});
