//ErrorBoundary is a component we create solely to deal with errors in components. We define it here and then wrap whatever component we need error handling 
//Note that the results of this wont be visible in development mode (we want to see the errors, but in production mode the error is hidden and the h1 message is displayed)

import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //componentDidCatch is a build in react method for catching errors (error and info are default parameters which we can use if we want to)
    componentDidCatch(error, info) {
        this.setState({ hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. Something went wrong.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;