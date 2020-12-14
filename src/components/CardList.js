import React from 'react';
import Card from './Card';

//Note that default parameter is 'props' (we can call it whatever we want but it is the general object containing all of the props defined in the JSX) which means we have to destructure it in the param field (or use props.robots notation everywhere)
const CardList = ({ robots }) => {
    //Below we create an array of Card elements by cycling through the robots array and storing their values in he JSX as shown. Note that we need to provide a 'key' for each Card element so that React can uniquely identify each one (we will get a warning if we omit it)
    //Ultimately we don't need to store the result of robots.map in a variable, we can put the code directly inside the div below inside {}
    // const cardComponent = robots.map((user, i) => {
    //     return (
    //         <Card 
    //             key={i} 
    //             id={robots[i].id} 
    //             name={robots[i].name} 
    //             email={robots[i].email}
    //         />);
    // })

    return (
        <div>
            {
               robots.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />);
                })
            }
        </div>
    );
}

export default CardList;