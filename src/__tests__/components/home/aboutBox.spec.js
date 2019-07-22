import React from 'react';
import { shallow } from 'enzyme';
import { AboutBox } from '../../../components/home';

describe('AboutBox Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<AboutBox />);
    expect(tree).toMatchSnapshot();
  });
});
