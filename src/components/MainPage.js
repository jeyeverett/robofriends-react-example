import React, { Component } from 'react';
import CardList from '../components/CardList'; //We imported all Cards into CardList and then imported that here
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; //Scroll is a custom component we created
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {

    //This is a built in React lifecycle hook that will run as soon as our component is mounted
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase());
        });
    }

    render() {
        const { onSearchChange, isPending } = this.props;


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
                            <CardList robots={this.filteredRobots()}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default MainPage;
