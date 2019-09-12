import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../../containers/home/Home';

describe('Home Tests', () => {
  let props;

  it('should render Home Container correctly', () => {
    props = {
      openSignupModal: jest.fn(),
      passMenuProps: jest.fn()
    }
    const tree = shallow(<Home {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
