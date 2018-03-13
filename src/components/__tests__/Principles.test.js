import React from 'react';
import { shallow, mount } from 'enzyme';
import Principles from '../Principles';

describe('Principles', () => {
  it('maintains state of newPrinciple', () => {
    const wrapper = shallow(
      <Principles
        principles={[]}
        removePrinciple={() => {}}
        addPrinciple={() => {}}
      />
    );
    expect(wrapper.state()).toEqual({
      newPrinciple: '',
      isValid: false,
    });
    wrapper.instance().handleOnChange('hello');
    expect(wrapper.state('newPrinciple')).toBe('hello');
    expect(wrapper.state('isValid')).toBe(true);
    wrapper.instance().handleOnChange('');
    expect(wrapper.state('newPrinciple')).toEqual('');
    expect(wrapper.state('isValid')).toBe(false);
  });

  it('delegates onRemove', () => {
    const props = {
      principles: [],
      removePrinciple: jest.fn(),
      addPrinciple: () => {},
    };

    // const wrapper = mount(<Principles {...props} />);
    // wrapper.instance().handleOnRemove({ id: 'my-id' });
    // console.log(wrapper.prop('addPrinciple'));
    // expect(props.addPrinciple).toHaveBeenCalledWith('my-id');
  });

  it('adds new principles', () => {
    const addPrinciple = jest.fn();
    const wrapper = shallow(
      <Principles
        principles={[]}
        removePrinciple={() => {}}
        addPrinciple={addPrinciple}
      />
    );
    wrapper.setState({
      newPrinciple: 'foo',
    });
    expect(addPrinciple).not.toHaveBeenCalled();
    wrapper.instance().handleOnSubmit();
    expect(addPrinciple).toHaveBeenCalledWith('foo');
    expect(wrapper.state('newPrinciple')).toEqual('');
    expect(wrapper.state('isValid')).toEqual(false);
  });
});
