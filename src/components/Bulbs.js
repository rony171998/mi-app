import React from 'react';
const Bulbs = ({swich}) => {
    return (
        <div className="light"
        style={{backgroundColor: swich? "gray":"yellow"}}
        />
    );
};
export default Bulbs;