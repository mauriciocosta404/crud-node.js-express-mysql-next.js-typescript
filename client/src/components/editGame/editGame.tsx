import * as C from './style';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

interface valuesProps {
    idGame:number,
    name: string,
    price: number,
    category: string,
    showEditContainer:boolean,
    setShowEditContainer: (showEditContainer:boolean)=>void
}

const EditGames = ({idGame,name,price,category,showEditContainer,setShowEditContainer}:valuesProps) => {
    const [values, setValues] = useState<valuesProps>();
    const [name1, setName] = useState(name);
    const [price1, setPrice] = useState(price);
    const [category1, setCategory] = useState(category);

    const handleEdit = () => {
       
        Axios.put('http://localhost:3001/edit',{
            idGame,
            name1,
            price1,
            category1
        });
    }
    return (
        <C.Container>
            <div className='close' 
            onClick={()=>{setShowEditContainer(false)}}
            >
                x
            </div>
            <C.AppContainer>
                <div className='register-container'>
                    <h1>scrim shop</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder='digite o seu nome'
                        value={name1}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder='digite o preço'
                        value={price1}
                        onChange={(event) => setPrice(Number(event.target.value))}
                    />
                    <input
                        type="text"
                        name="category"
                        value={category1}
                        placeholder='digite a categoria'
                        onChange={(event) => setCategory(event.target.value)}
                    />
                    <a href='' onClick={handleEdit}>Salvar</a>
                </div>
            </C.AppContainer>
        </C.Container>
    );
}
export default EditGames;