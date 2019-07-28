import React from 'react';
import { shallow } from 'enzyme';
import { BackDrop } from '../../../components/home';

describe('BackDrop Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<BackDrop />);
    expect(tree).toMatchSnapshot();
  });
});
