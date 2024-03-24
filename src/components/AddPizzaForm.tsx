import React, { useState } from 'react';
import Pizza from '../models/Pizza';
import './styles.css'


interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}

const initState = {
    title: '',
    price: '',
    img: '',

}

const AddPizzaForm:React.FC<AddPizzaFormProps> = ({ addPizza }) => {

    const [newPizza, setNewPizza] =
    useState<{title:string, price:string, img:string}>(initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handle change >>', e.target)
        const {name, value } = e.target;
        console.log('name is', name)
        console.log('value is', value)
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const {title, price, img} = newPizza;

        if (title && price && img) {
            addPizza({
                title,
                price: Number(price),
                img,
                id: Date.now()
            })
        setNewPizza(initState)
        }
    }
    
    // 51:05

    
  return (
    <form onSubmit={handleSubmit}>
        <input
        name='title'
        type='text'
        placeholder='name'
        onChange={handleChange}
        value={newPizza.title}
        />
        <input
        name='price'
        type='text'
        placeholder='price'
        onChange={handleChange}
        value={newPizza.price}
        />
        <input
        name='img'
        type='text'
        placeholder='Image'
        onChange={handleChange}
        value={newPizza.img}
        />
        <button type='submit'>Add to menu</button>
    </form>
  )
}

export default AddPizzaForm