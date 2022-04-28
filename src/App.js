import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponents';
import { useState } from 'react';
import Bulbs from './components/Bulbs';

function App() {

  const me = {
    name: "runy",
    age: 56,
    movie: "iron man",
    music: "all for us labrinth"
  }
  const hobbies = {
    item1: "ejecicio",
    item2: "crecimiento personal",
    item3: "finanzas"
  }
  const tiempoLibre = {
    item1: "ver geoPolitica",
    item2: "ver neflix",
    item3: "aprender ingles"
  }
  const comidas = {
    item1: "pizza",
    item2: "hamburguesa",
    item3: "batidos"
  }
  const stacks = {
    item1: "HTML",
    item2: "CSS",
    item3: "JavaScrip",
    item4: "Java",
    item5: "c++",
    item6: "c#",
    item7: "react"

  }

  const [counter, setCounter] = useState(0)

  const incrementar = () => setCounter(counter + 1)
  const decrementar = () => setCounter(counter - 1)


  const [text, setText] = useState("texto por defecto")
  const change = () => setText("nuevo text")

  const [isVisible, setIsVisible] = useState(false)
  const changeVisible = () => setIsVisible(!isVisible)

  const [isLight, setLight] = useState(false)
  const changeLight = () => setLight(!isLight)

  const [isBulbs, setBulbs] = useState(false)
  const changeBulbs = () => setBulbs(!isBulbs)

  return (
    <div>
      <div className="App">
        <div className='misDatos'>
          <ul>
            <h1>Mis Datos</h1>
            <li><b>Nombre:</b>{me.name}</li>
            <li><b>Edad:</b>{me.age}</li>
            <li><b>Pelicula favorita:</b>{me.movie}</li>
            <li><b>Musica favorita:</b>{me.music}</li>
          </ul>
        </div>

        <MyComponent
          titulo={"mis hobbies"}
          item1={hobbies.item1}
          item2={hobbies.item2}
          item3={hobbies.item3}
          color={"yellow"}
        />
        <MyComponent
          titulo={"Tiempo libre"}
          item1={tiempoLibre.item1}
          item2={tiempoLibre.item2}
          item3={tiempoLibre.item3}
          color={"green"}
        />
        <MyComponent
          titulo={"mis comidas favoritas"}
          item1={comidas.item1}
          item2={comidas.item2}
          item3={comidas.item3}
          color={"red"}
        />
        <MyComponent
          titulo={"mis stacks"}
          item1={stacks.item1}
          item2={stacks.item2}
          item3={stacks.item3}

          color={"blue"}
        />
        <div>
          <h2>{counter}</h2>
          <button onClick={decrementar}>Decrementar</button>
          <button onClick={incrementar}>incrementar</button>
        </div>

        <div>
          <h2>{text}</h2>
          <button onClick={change}>Cambiar text</button>

        </div>

        <div>
          <h2>input password</h2>
          <input type={isVisible ? "text" : "password"} />
          <button
            onClick={changeVisible}> {isVisible ? "Mostrar" : "Ocultar"}
          </button>
        </div>

        <div >
          {/* <div className={`${isLight ? "on":"off"}`}/> */}
          <div className="light"
            style={{ backgroundColor: isLight ? "yellow" : "gray" }}
          />
          <button
            style={{ textAlign: "center" , marginLeft: "90px" }}
            onClick={changeLight}> {isLight ? "on" : "off"}
          </button>
        </div>

      </div>
      <div className='Bulbs'>
        <div style={{ marginLeft: "90px" }}>
          <button
            style={{ marginLeft: "90px" }}
            onClick={changeBulbs}> {isBulbs ? "on" : "off"}
          </button><Bulbs swich={isBulbs} />
        </div>
        <div style={{ marginLeft: "90px" }}>

          <button
            style={{ marginLeft: "90px" }}
            onClick={changeBulbs}> {isBulbs ? "on" : "off"}
          </button><Bulbs swich={isBulbs} />
        </div>
        <div style={{ marginLeft: "90px" }}>
          
          <button
            style={{ marginLeft: "90px" }}
            onClick={changeBulbs}> {isBulbs ? "on" : "off"}
          </button><Bulbs swich={isBulbs} />
        </div>
      </div>
    </div>

  );
}

export default App;
