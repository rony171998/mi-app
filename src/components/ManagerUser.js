import React, { useState } from 'react';
import users from '../users.json';

const color=["red","blue","green","black","white","pink","violet"]

const ManagerUser = () => {

    const [index,setIndex]= useState(0)
    const random = Math.floor(Math.random() * users.length)
    const changeUser=()=>setIndex(random)

    const randomcolor = Math.floor(Math.random() * color.length)

    document.body.style =`background: ${color[randomcolor]}`;
    return (
        <div className='manageruser'>
            <h2 >
                {users[index].name.title}
                {users[index].name.first}
                {users[index].name.last}
            </h2>
            <img src={users[index].picture.large} alt="" />
            <div>
                <i className="fa-solid fa-envelope"></i> {users[index].email}
                
                                            
            </div>
            <div>
                <i className="fa-solid fa-phone"></i> {users[index].phone}
                           
            </div>
            <div>
                <i className="fa-solid fa-location-pin"></i> {users[index].location.city} , 
                
               {users[index].location.country} ,
               {users[index].location.state}
            </div>
            
            <button onClick={changeUser}>
                <i className="fa-solid fa-shuffle"></i>
            </button>
        </div>
    );
};

export default ManagerUser;