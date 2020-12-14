//The App component will contain all of our other components
import React, { Component } from 'react';
import CardList from '../components/CardList'; //Instead of putting all cards in this file, we put them in CardList and import that
//import { robots } from './robots'; //Note that in the robots file we don't use 'export default' which means we can export multiple files, which means we need to destructure to get the robots array - Note that we removed this file later in the course so we could use the API
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; //Scroll is a custom component we created that allows us to fixed position components on the screen as we scroll
import ErrorBoundary from '../components/ErrorBoundary';

//Note that a component with state is called 'smart' and smart components tend to have the class syntax
//Also keep in mind React lifecycle hooks i.e. what methods are called when an instance of a component is being created and inserted into the dom (mounting, updating, unmounting) - note that these methods run in a specific order
class App extends Component {
    constructor() {
        super(); //We have to call super() if we want to use 'this' in an extended class
        //STATE is how we can dynamically communicate between our App and its components
        this.state = {
            robots: [], //Inititally we set robots: robots but we are setting up to use an API so we use [] and set  robots after the component is mounted
            searchfield: ''
        }
    }

    //This is a built in React lifecycle hook that will run as soon as our component is mounted
    componentDidMount() {
        //This is a traditional way of making HTTP requests for resources (res is the response object)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json()) //We convert the response to JSON format (note we must return this)    
            .then(users => this.setState({robots: users})); //Users is the res (response) in JSON format from the previous step. After we fetch the data we have to update the state of robots
    }


    //Defining our function that will deal with search input
    //Note that when we make our on methods (functions) on components we need to use arrow notation if we want 'this' to refer to the component itself (and not the event, or whatever else)
    onSearchChange = (event) => {
        //To change the state on something in React we use the line below. This will update the searchfield with whatever the input is
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const {robots, searchfield} = this.state; //Robots and searchfield are STATES of the React App. This is important!
        //Here we filter the robots array for items that contain the searchfield values
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        //The if statement below accounts for possibility of a delay due to a large robots array i.e. we show the 'LOADING' heading until the document is ready
        //Note that we refactored this to use the ternary operator (it is a cleaner syntax for if else statements)
        return !robots.length ? 
            <h1 className='tc'>LOADING</h1> :   
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;