import React, { useState } from 'react';
import Pizza from '../models/Pizza';
import './styles.css'


interface EditPizzaFormProps {
    data: Pizza
    updatePizza: (newPizza: Pizza) => void;
    handleToggleEdit: () => void
}


const EditPizzaForm:React.FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {

    const [editPizza, setEditPizza] =
    useState<Pizza>(data)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handle change >>', e.target)
        const {name, value } = e.target;
        console.log('name is', name)
        console.log('value is', value)
        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const {title, price, img} = editPizza;

        if (title && price && img) {
            updatePizza(editPizza)
            handleToggleEdit()
        }
    }
    
  

    
  return (
    <form onSubmit={handleSubmit} className='edit-form'>
        <input
        name='title'
        type='text'
        placeholder='name'
        onChange={handleChange}
        value={editPizza.title}
        />
        <input
        name='price'
        type='text'
        placeholder='price'
        onChange={handleChange}
        value={editPizza.price}
        />
        <input
        name='img'
        type='text'
        placeholder='Image'
        onChange={handleChange}
        value={editPizza.img}
        />
        <button type='submit'>Confirm</button>
    </form>
  )
}

export default EditPizzaForm