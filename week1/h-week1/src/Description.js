import React, { Component } from 'react';
import TodoList from './TodoList';

class Description extends Component {

    todo = TodoList.map((todoItems, index) => (
        <li key={index}>
            {`${todoItems.description} , ${todoItems.deadLine}`}
        </li>
    ));

    render() {
        return (
            <ul className='items'>
                {this.todo}
            </ul>
        )
    }
}

export default Description;
