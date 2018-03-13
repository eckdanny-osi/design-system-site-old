import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPrincipleForm from '../AddPrincipleForm';

describe('AddPrincipleForm', () => {
  it('renders', () => {
    const props = { onChange: jest.fn() };
    const wrapper = mount(<AddPrincipleForm {...props} />);
    wrapper.find('input').simulate('change', { target: { value: 'foo' } });
    expect(props.onChange).toHaveBeenCalledWith('foo');
  });

  it('submits', () => {
    const props = {
      onSubmit: jest.fn(),
      value: 'foo',
      isValid: true,
    };
    const wrapper = shallow(<AddPrincipleForm {...props} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(props.onSubmit).toHaveBeenCalledWith();
  });
});
