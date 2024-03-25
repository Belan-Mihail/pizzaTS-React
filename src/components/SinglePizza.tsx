import React, { useState } from 'react'
import Pizza from '../models/Pizza';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './styles.css'
import EditPizzaForm from './EditPizzaForm';



interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id:number) => void
}

const SinglePizza:React.FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {

    const [edit, setEdit] = useState<boolean>(false)

    const handleToggleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = () => {
        deletePizza(pizza.id)
    }

  return (
    <div className="pizza">

      <img src={`/images/${pizza.img}`} alt={pizza.title}/>
      <h2>{pizza.title}</h2>
      <span>{pizza.price} $</span>

      <div className="pizza-controls">
      <FaEdit onClick={handleToggleEdit}/>
      <MdDelete onClick={handleDelete}/>
      </div>

      {edit ? <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit} /> : null}

    </div>
  )
}

export default SinglePizza