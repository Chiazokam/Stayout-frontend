import React from 'react';
import { shallow } from 'enzyme';
import { CustomSection } from '../../../components/common';

describe('Custom Section Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<CustomSection />);
    expect(tree).toMatchSnapshot();
  });
});
