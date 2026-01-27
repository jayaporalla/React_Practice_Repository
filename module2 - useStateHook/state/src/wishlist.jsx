import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';

function Wishlist(){
    const [ todo, setTodo ] = useState();
    const [ todoList, setTodoList ] = useState([]);

    const InputHanlder = (e) => {
        setTodo(e.target.value);
    }

    const SubmitHandler = () => {
        setTodoList([...todoList, {id: uuid(), todo: todo, isMarked: false}]);
        setTodo('');
    }

    const handleDelete = (id) => {
        const filter = todoList.filter(todo => todo.id !== id);
        setTodoList(filter);
    }

    const handleCheckBox = (id) => {
        const filter = todoList.map(todo => todo.id === id ? {...todo, isMarked: !todo.isMarked} : todo);
        console.log(filter);
        setTodoList(filter);
    }

    return (
        <>
        <div className='main'>
            <h1>My Wishlist</h1>
            <div className='container'>
                <input className='text' value={todo} onChange={InputHanlder} type="text" placeholder="Add your wishlist here..."/>
                <button className='add' onClick={SubmitHandler}>Add</button>
            </div>
            <div className='list'>
                {
                    todoList?.length > 0 && todoList.map(todo => (
                        <div key={todo.id}>
                            <label>
                                <input onClick={() => handleCheckBox(todo.id)} type='checkbox'/>
                                <span className={`${todo.isMarked? 'strike-through' : ''}`}>{todo.todo}</span>
                            </label>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Wishlist;