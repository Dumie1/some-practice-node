import React, { Component } from 'react';
import TodoList from './TodoList.js';

class Description extends Component {

    todoItem = TodoList.map((i, index) => (
        <li key={index}>
            
            {`${i.description} , ${i.deadLine}`}
        </li>
    ));

    render() {
        return (
            <ul className='help'>
                {this.todoItem}
            </ul>
        )
    }
}

export default Description;
