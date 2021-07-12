import { create } from "react-test-renderer";
import React from 'react';
import Card from './Card';

const card = create(<Card />);

it('expect to render Card component', () => {
    expect(card.toJSON()).toMatchSnapshot()
});