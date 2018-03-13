import React from 'react';
import { shallow } from 'enzyme';
import PrincipleList from '../PrincipleList';

describe('PrincipleList', () => {
  it('renders a list of principles', () => {
    const principles = [
      { id: '1', message: 'Foo' },
      { id: '2', message: 'Bar' },
    ];
    const wrapper = shallow(<PrincipleList principles={principles} />);
    expect(wrapper.find('li').length).toBe(2);
  });
  it('renders on empty', () => {
    const wrapper = shallow(<PrincipleList principles={[]} />);
    // console.log(wrapper.debug());
  });
  it('emits removal events', () => {
    const props = {
      principles: [{ id: '1' }, { id: '2' }],
      onRemove: jest.fn(),
    };
    const wrapper = shallow(<PrincipleList {...props} />);
    wrapper
      .find('li button')
      .first()
      .simulate('click');
    expect(props.onRemove).toHaveBeenCalledWith({ id: '1' });
  });
});
