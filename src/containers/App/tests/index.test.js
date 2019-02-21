import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';

describe('<App />', () => {
  it('renders correctly', () => {
    const actual = shallow(<App store={{}} />);
    expect(actual).toMatchSnapshot();
  });
});
