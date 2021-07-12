import { create } from "react-test-renderer";
import React from 'react';
import CardList from './CardList';

const mockRobots = [
    {
        id: 1,
        name: 'John Snow',
        username: 'Jon',
        email: 'john@gmail.com'
    }
];

const cardList = create(<CardList robots={mockRobots} />);

it('expect to render CardList component', () => {
    expect(cardList.toJSON()).toMatchSnapshot()
});