import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList'; //We imported all Cards into CardList and then imported that here
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; //Scroll is a custom component we created
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchfield, requestRobots } from '../actions';
import Header from '../components/Header';

//Note that a component with state is called 'smart' and smart components tend to have the class syntax
//Also keep in mind React lifecycle hooks i.e. what methods are called when an instance of a component is being created and inserted into the dom (mounting, updating, unmounting) - note that these methods run in a specific order

//Here we map searchfield (which is a property that will be changed in state by the reducer) to props (remember that props is something we have access to here in acomponent)
const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//This function sends actions to the reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {

    //This is a built in React lifecycle hook that will run as soon as our component is mounted
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchfield, onSearchChange, robots, isPending } = this.props;
        //Here we filter the robots array for items that contain the searchfield values
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        //The if statement below accounts for possibility of a delay due to a large robots array i.e. we show the 'LOADING' heading until the document is ready
        //Note that we refactored this to use the ternary operator (it is a cleaner syntax for if else statements)
        return isPending ? 
            <h1 className='tc'>LOADING</h1> :   
            (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//If we didn't use connect, we would have to use the store 'subscribe' function for each component we wanted to link to the store. By using connect on App (a smart container), we link all components