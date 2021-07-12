import { create } from "react-test-renderer";
import React from 'react';
import Header from './Header';

const header = create(<Header />);

it('expect to render Header component', () => {
    expect(header.toJSON()).toMatchSnapshot()
});

