import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoAPI from './TodoAPI';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        TodoAPI.getTodos()
            .then((response, error) => {
                this.setState({ todos: response });
            });
    }


    addTodo(name) {
        const todos = this.state.todos;
        let id = todos.length ? todos[todos.length - 1].id : 0;
        this.setState({
            todos: [...todos, {
                id: ++id,
                name,
                completed: false
            }]
        }, () => TodoAPI.setTodos(this.state.todos));

    }

    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id != id)
        }, () => TodoAPI.setTodos(this.state.todos));
    }

    render() {
        return (
            <View>
                <Text>Todo App</Text>
                <AddTodo onAdd={this.addTodo.bind(this)} />
                <TodoList todos={this.state.todos} onDelete={this.deleteTodo.bind(this)} />
            </View>
        );
    }
}