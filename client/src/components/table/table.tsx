import * as C from './style';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import EditGames from '../editGame/editGame';

interface valuesProps{
    idGame:number,
    id:number,
    name:string,
    price:number,
    category:string
}

const Table=()=>{

    const [showEditContainer,setShowEditContainer]=useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [idGame, setIdGame] = useState(0);
    const [category, setCategory] = useState('');
    const [games,setGames]=useState<valuesProps[]>([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/getGames').
            then((response) => {
                setGames(response.data);
            });
    }, []);

    const handleDelet=(id:number)=>{
        Axios.delete(`http://localhost:3001/delet/${id}`)
    }

    return(
        <div>
            {showEditContainer &&(
                <EditGames 
                idGame={idGame} 
                name={name} 
                price={price} 
                category={category}
                showEditContainer={showEditContainer}
                setShowEditContainer={setShowEditContainer}
                />
            )}
            <C.TableContainer>
                <table>
                <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>action</th>
                        </tr>   
                </thead>
                <tbody>
                        {games.map(({id,name,price,category},index)=>
                            (
                                <tr 
                                    key={index} 
                                >
                                    <td>{index +1}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{category}</td>
                                    <td className='buttons'>
                                        <button className='edit'
                                            onClick={()=>{
                                            setShowEditContainer(true),
                                            setIdGame(id),
                                            setName(name),
                                            setPrice(price),
                                            setCategory(category)
                                        }} >editar</button>
                                        <a href='' 
                                            className='delet'
                                            onClick={()=>handleDelet(id)}
                                        >eliminar</a>
                                    </td>
                                </tr>
                            )
                        )}
                </tbody>
                </table>
            </C.TableContainer>
        </div>
    )
}
export default Table;
