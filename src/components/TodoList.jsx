import "./Todo.css";

export default function TodoList(props) {
    console.log('props',props);
    return (
        <>
        <ul className="todo-list">
            <li>{props.todo}</li>
        </ul>
        </>
    );
}