import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';

describe('<Home />', () => {
  const component = shallow(<Home />);
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
