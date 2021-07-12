import { create } from "react-test-renderer";
import React from 'react';
import CounterButton from './CounterButton';

const mockColor = 'red';

const counterButton = create(<CounterButton color={mockColor} />);

it('expect to render CounterButton component', () => {
    expect(counterButton.toJSON()).toMatchSnapshot();
});

it('correctly increments counter', () => {
    const instance = counterButton.root;
    const button = instance.findByProps({id: "counter"});
    button.props.onClick();
    button.props.onClick();
    expect(Number(counterButton.toJSON().children[1])).toBe(2);
});
