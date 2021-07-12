import { create } from "react-test-renderer";
import React from 'react';
import MainPage from './MainPage';

let main;

//Before each will run at the beginning of every test
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchfield: '',
        isPending: false
    }
    main = create(<MainPage {...mockProps} />);
});

it('expect to render MainPage component', () => {
    expect(main.toJSON()).toMatchSnapshot();
});

it('filters the robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchfield: 'john',
        isPending: false
    }
    const main2 = create(<MainPage {...mockProps2} />);
    const instance = main2.root;

    expect(instance._fiber.stateNode.filteredRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('filters the robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchfield: 'a',
        isPending: true
    }
    const main3 = create(<MainPage {...mockProps3} />);
    const instance = main3.root;
    const filteredRobots = [];

    expect(instance._fiber.stateNode.filteredRobots()).toEqual(filteredRobots);
});