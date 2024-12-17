import { useState } from "react";
import "./Todo.css";

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleOnChange = (e)=> {
        setTodo(e.target.value);
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if (todo.trim() !== '') {
            setTodos([...todos, todo]);
            setTodo(''); 
        }
    }
    
    return(
        <div className="todo-container">
            <h1 className="todo-title">Todo List</h1>
            
            <form className="todo-form" onSubmit={handleOnSubmit}>
                <input 
                    type="text" 
                    name="todo" 
                    id="todo" 
                    className="todo-input"
                    placeholder="Add a new task..."
                    onChange={handleOnChange} 
                    value={todo} 
                />
                <button type="submit" className="todo-button">
                    Add Todo
                </button>
            </form>

            <ul className="todo-list">
                {todos.map((item, index) => (
                    <li key={index} className="todo-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}