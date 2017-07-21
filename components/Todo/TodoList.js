import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            todos: nextProps.todos
        });
    }
    handleDelete(id) {
        this.props.onDelete(id);
    }
    render() {
        const todos = this.state.todos.map(t => {
            return (
                <View key={t.id}>
                    <Text>{t.name}</Text>
                    <Button title="Delete" onPress={() => this.handleDelete(t.id)} />
                </View>
            );
        });
        return (
            <View>
                <Text>Todo List</Text>
                {todos}
            </View>
        );
    }
}