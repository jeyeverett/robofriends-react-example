import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage'; //We imported all Cards into CardList and then imported that here
import { setSearchfield, requestRobots } from '../actions';
import './App.css';

//Note that a component with state is called 'smart' and smart components tend to have the class syntax
//Also keep in mind React lifecycle hooks i.e. what methods are called when an instance of a component is being created and inserted into the dom (mounting, updating, unmounting) - note that these methods run in a specific order

//Here we map searchfield (which is a property that will be changed in state by the reducer) to props (remember that props is something we have access to here in a component)
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
    render() {
        return <MainPage {...this.props} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//If we didn't use connect, we would have to use the store 'subscribe' function for each component we wanted to link to the store. By using connect on App (a smart container), we link all components