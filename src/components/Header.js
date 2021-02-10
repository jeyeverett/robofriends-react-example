import React, { Component } from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) { //This prevents the header from rerendering
        return false;
    }
    render() {
        console.log('Header');
        return (
            <div>
                <h1 className='f1'>RoBros</h1>
            </div>
        );
    }
}

export default Header;