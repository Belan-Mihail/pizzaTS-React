import React, { useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm'
import DisplayPizzas from './components/DisplayPizzas';
import Pizza from './models/Pizza'

const App: React.FC = () => {

  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza:Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }

  const updatePizza = (newPizza:Pizza) => {
    setPizzasList(pizzasList.map((pizza) => pizza.id === newPizza.id ? newPizza : pizza))
  }

  const deletePizza = (id:number) => {
    const NewPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(NewPizzasList)
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
        <DisplayPizzas 
        pizzasList={pizzasList}
        deletePizza={deletePizza}
        updatePizza={updatePizza}
        />
      </div>
    </div>
  );
}

export default App;
