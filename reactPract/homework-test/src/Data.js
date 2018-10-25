import React from 'react';
import Todos from './Todos.json';
import Form from './Form';


class Data extends React.Component {


    state = {
        Todos
    }


    newTodoChanged =(e)=>{
        console.log(e.target.value);
        
        
    }

    submitForm = (e) => {
        e.preventDefault();
         const { todos } = this.state;
        //assemble data
        const newTodo = {
            id: Todos.length + 1,
            description: e.target.value,
            deadline: e.target.value,
            done: false
        }
        //add new todo to list
        this.state.Todos.push(newTodo);
        //update state
        this.setState({ todos });
        
    }


    deleteTodo = ( index) => {
        const todos = this.state.todos;
        Todos.splice(index, 1);
        this.setState({ todos });
    }
    
    isTaskDone (todo) {
        todo.done = !todo.done;
        this.setState({
            todos: this.state.todos 
        });
    }

    renderTodos (){
        if (this.state.Todos.length === 0) return <p className='noItems'>No items...</p>

        const textStyle = { textDecoration: 'line-through', backgroundColor: '#0455d8'}

        return <ul>
            {
                Todos.map((todo, id) => {
                    return (
                        <li key={id}>
                            <input checked={todo.done} type='checkbox' onChange={this.isTaskDone.bind(this, todo)} />
                            <span style={todo.done ? textStyle : null}>
                                {todo.description} , {todo.deadline}
                            </span>
                            <button onClick={this.editTodo} className='edit'>Edit</button>
                            <button onClick={this.deleteTodo} className='remove'>Remove</button>

                        </li>
                           
                    )
                })
            }
        </ul>
    }

    render() {
        return (
            <div>
                <Form
                    submitForm={this.submitForm}
                    newTodoChanged={this.newTodoChanged}
                />

                

                <div className='items'>
                    {this.renderTodos()}
                    
                </div>
                
            </div>
        )
    }
}

export default Data;
