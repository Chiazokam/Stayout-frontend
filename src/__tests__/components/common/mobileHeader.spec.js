import React from 'react';
import { shallow } from 'enzyme';
import { MobileHeader } from '../../../components/common';

describe('MobileHeader Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<MobileHeader />);
    expect(tree).toMatchSnapshot();
  });
});
