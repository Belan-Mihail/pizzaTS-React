import React from 'react'

let pizza:string = "Salami";
let price:number = 20;
let atStock: boolean = true;
let pizzas: string[] = ['Salami', 'Diablo'];
let numbers: number[] = [1,2,3];


const order: {title: string, quantity: number} = {title: 'margarita', quantity: 20}

type Order = {
    title:string;
    quantity?: number;
}

const order1: Order = {title: 'Diablo', quantity: 20}

const orders: Order[] = [
    {title: 'margarita'},
    {title: 'diablo', quantity: 20},
]

// union
let something: null | number = null;

something = 10;


//func
type PrintTitle = (title:string) => void

const printTitle: PrintTitle = (title) => {
    console.log(title)
}

type ReturnTitle = (title:string) => string

const returnTitle: ReturnTitle = (title) => {
    return title
}


type NewOrder = {
    title:string;
    quantity?: number;
}

interface MyNewOrder {
    title:string;
    quantity?: number;
}

//oft intarface for props, types for main project types (in our case for pizza object)

// extends types and interfaces
type X = {
    a:string;
    b: number;
}

type Y = X & {
    c:string;
    d: number;
}

// Y contain not only c and d also a and b from X type

const y: Y = {
    a: 'a',
    b: 2,
    c: 'c',
    d: 4,
}

interface IAuto {
    country: string
}

interface IModernAuto extends IAuto {
    price: number,
    year: number,
}

const BMW: IModernAuto = {
    price: 200000,
    year: 2023,
    country: 'Germany'
}

interface IZ extends X {
    e: string,
    f: number,
}

const z: IZ = {
    a: 'a',
    b: 2,
    e: 'e',
    f: 16,
}

type M = IAuto & {
    model: string;
}

const m: M = {
    model: 's',
    country: 'USA'
}

const train = () => {
  return (
    <div>train</div>
  )
}

export default train