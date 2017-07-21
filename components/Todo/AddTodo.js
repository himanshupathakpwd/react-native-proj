import React, { Component } from 'react';
import {  View, TextInput, StyleSheet, Button } from 'react-native';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleAdd() {
        this.props.onAdd(this.state.text);
        this.setState({text: ''});
    }
    render() {
        return (
            <View>
                <TextInput style={styles.input} placeholder='Add Todo' value={this.state.text} onChangeText={(text) => this.setState({text})} />
                <Button
                    onPress={this.handleAdd.bind(this)}
                    title="Add Todo"
                    disabled={!this.state.text.length}
                 />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 40,
        borderColor: 'gray'
    }
});