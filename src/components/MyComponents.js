import React from 'react';
const MyComponent = ({titulo, item1, item2, item3, color}) => {

  
    return (
        <div className={`${color} card`}>
            <ul>
            <h1>{titulo}</h1>
            <li><b>{item1}</b></li>
            <li><b>{item2}</b></li>
            <li><b>{item3}</b></li>              
      </ul></div>
    );
};
export default MyComponent;