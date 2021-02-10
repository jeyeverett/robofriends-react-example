import React from 'react';

//We destructure our searchChange function defined in App.js and pass it in as a parameter. It will be called when an onChange event (HTML event) occurs
const SearchBox = ({searchChange}) => {
    console.log('SearchBox');
    return (
        <div>
            <input 
                className='pa3 mb3 br4 tc ba b--green bg-lightest-blue w5'
                placeholder='Search RoBros'
                type='search' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;