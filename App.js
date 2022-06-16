import './App.css';
import reactLogo from './stylesheet/reactLogo.png';
import Boton from './comps/boton';
import Pantalla from './comps/pantalla';
import BotonClear from './comps/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('');
  const agregarInput = val => {
setInput(input + val);
  };
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('ingrese un valor.');
    }
  };
  return (
    <div className="App">
      <div className='logo-react-contenedor'>
        <img
          src={reactLogo}
          className='logo-react'
          alt='logo de react' />
      </div>
      <div className='calculadora-contenedor'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton></div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            clear
            </BotonClear></div>
      </div>
    </div>
  );
}

export default App;
