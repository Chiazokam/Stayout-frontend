import React from 'react';
import { shallow } from 'enzyme';
import { ThinLine } from '../../../components/common';

describe('ThinLine Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<ThinLine />);
    expect(tree).toMatchSnapshot();
  });
});
