import React from 'react';
import {useState} from 'react';
const Bulbs = ({swich}) => {
    return (
        <div className="light"
        style={{backgroundColor: swich? "gray":"yellow"}}
        />
    );
};
export default Bulbs;