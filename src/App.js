import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponents';

function App() {

  const yo={
    name:"ruuny",
    age:56,
    movie:"iron man",
    music:"all for us labrinth"
  }
  const jsx =<h1>asasd</h1>

  return (

    <div className="App">
      <MyComponent/>
      <ul>
        
        <li><b>Nombre:</b>{yo.name}</li>
        <li><b>Edad:</b>{yo.age}</li>
        <li><b>Pelicula favorita:</b>{yo.movie}</li>
        <li><b>Musica favorita:</b>{yo.music}</li>
      </ul>
      {jsx}
      
    </div>
  );
}

export default App;
