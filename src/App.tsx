import React, { useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm'
import Pizza from './models/Pizza'

const App: React.FC = () => {

  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza:Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }

  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>
          our pizzeria
        </span>
        <AddPizzaForm 
        addPizza={addPizza}
        />
      </div>
    </div>
  );
}

export default App;
