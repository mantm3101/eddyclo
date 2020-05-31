import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
    <ul>
        {todos.map(t => (
            <Todo key={t.id} {...t} onClick={() => toggleTodo(t.id)} />
        ))}
    </ul>
}

export default TodoList;

