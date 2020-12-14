import React, { Component } from 'react';
import './Hello.css';

//Here we are creating a Class Based Component (note that there is a newer method that uses functional based components) by extending the React.Component object. We always need the render function inside. Also note that we are writing JSX, which is similar to HTML but not exactly. For example, because we write JSX inside a .js file, we shouldn't use 'class' inside the HTML because we already use class to define the class Hello. Instead we use className. Also note that we access the property specifed in the index.js file by using 'this.props.'
class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>Hello World</h1>
                <p>{this.props.greeting}</p>
            </div>
        ); //Note that we need to use the brackets 
    }
}

export default Hello; //We use 'export default' when we are only using one thing