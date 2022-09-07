import * as C from './style';
import React,{ useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

interface valuesProps{
    name:string,
    price:number,
    category:string
}

const App=()=>{
    const [values,setValues]=useState<valuesProps>();
    const [name,setName]=useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');

   const handleValues=()=>{
       Axios.post('http://localhost:3001/register',{
        name,
        price,
        category
       });
       setName('');
       setPrice(0);
       setCategory('');
    }
    
    useEffect(()=>{
        setValues({
            name,
            price,
            category
        });
    },[name,price,category])

    return(
        <C.AppContainer>
            <div className='register-container'>
                <h1>Games shop</h1>
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    placeholder='digite o seu nome'
                    onChange={(event)=>setName(event.target.value)}
                />
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder='digite o preço'
                    onChange={(event) => setPrice(Number(event.target.value))}
                />
                <input
                    type="text"
                    name="category"
                    value={category}
                    placeholder='digite a categoria'
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button onClick={handleValues}>Cadastrar</button>
            </div>
        </C.AppContainer>
    );
}
export default App;