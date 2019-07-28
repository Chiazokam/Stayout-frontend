import React from 'react';
import { shallow } from 'enzyme';
import { Container } from '../../../components/common';

describe('Container Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<Container />);
    expect(tree).toMatchSnapshot();
  });
});
