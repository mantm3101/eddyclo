import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Suspense, StrictMode, useState } from 'react';
import App from './App'
import { types } from 'mobx-state-tree'

const Todo = types.model({
    title: types.string
});

const TodoStore = types.model("TodoStore", {
    loaded: types.boolean,
    endpoint: "http://localhost",
    todos: types.array(Todo),
    selectedTodos: types.reference(Todo)
}).views(self => {
    return {
        get completedTodos() {
            return self.todos.filter(t => t.done)
        },
        findTodosByUser(user){
            return 
        }
    }
});


render(
    <StrictMode>
        <Router basename="/en">
        </Router>
    </StrictMode>,
    document.getElementById('app')
);




