import React from 'react';

//We destructure our searchChange function defined in App.js and pass it in as a parameter. It will be called when an onChange event (HTML event) occurs
const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                placeholder='Search Robots'
                type='search' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;