import React from 'react';
const MyComponent = () => {
    const yo={
        name:"ruuny",
        age:56,
        movie:"iron man",
        music:"all for us labrinth"
      }
    return (
        <div>
            <ul>
            <h1>Mis datos</h1>
            <li><b>Nombre:</b>{yo.name}</li>
            <li><b>Edad:</b>{yo.age}</li>
            <li><b>Pelicula favorita:</b>{yo.movie}</li>
            <li><b>Musica favorita:</b>{yo.music}</li>
      </ul></div>
    );
};
export default MyComponent;