import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../containers';

describe('Home Tests', () => {
  let props;

  it('should render Home Container correctly', () => {
    props = {
      toggleMenu: jest.fn()
    }
    const tree = shallow(<Home {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
