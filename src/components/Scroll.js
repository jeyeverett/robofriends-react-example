import React from 'react';

//Below we create our Scroll component. We don't actually pass it any properties, but by default all props have a children field which will allow us to wrap other components and set those children of the Scroll component to a fixed position (basically anything we wrap in the Scroll tags <Scroll></Scroll>)
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;