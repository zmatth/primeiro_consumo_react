import React, {Component} from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
    render() {
        return (
            <>
            <PageHeader name='Tasks' small='Include' />
            <TodoForm/>
            <TodoList/>
            </>
        )
    }
}