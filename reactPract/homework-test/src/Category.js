import React from 'react';
import todos from './todos';
// import Form from './Form';

class Category extends React.Component {


    state = {
        todos
    }

    newTodoChanged = (e) => {
        this.setState({
            newTodo: e.target.value
        });
        
    }


    addTodo = (e) => {
        e.preventDefault()
        console.log(this.state.newTodo);
        this.setState({
            todos: [...this.state.todos, {
                id: todos.length + 1,
                description: e.target.description.value,
                deadline: e.target.deadline.value,
                done: false
            }]
        });
    }

 


    // addTodo = e => {
    //     e.preventDefault();
    //     const { todos } = this.state;
    //         //assemble data
    //     const newTodo = {
    //         id: todos.length +1,
    //         description: e.target.description.value,
    //         deadline: e.target.deadline.value,
    //         done: false
    //     }
    //         //update state
    //     this.state.todos.push(newTodo);
    //         //update state
    //     this.setState({ todos });
    // }

    


    isTaskDone (todo) {
        todo.done = !todo.done;
        this.setState({
            todos: this.state.todos
        });
    }

    renderTodos (){
        if (this.state.todos.length === 0) return <p className='noItems'>No items...</p>

        const textStyle = { textDecoration: 'line-through', backgroundColor: '#0455d8'}

        return <ul>
            {
                todos.map((todo, id) => {
                    return (
                        <li key={id}>
                            <input checked={todo.done} type='checkbox' onChange={this.isTaskDone.bind(this, todo)} />
                            <span style={todo.done ? textStyle : null}>
                                {todo.description} , {todo.deadline}
                            </span>
                            <button onClick={this.editTodo}className='edit'>Edit</button>
                            <button onClick={this.removeTodo}className='remove'>Remove</button>
                            
                            </li>
                           
                    )
                })
            }
        </ul>
    }

    render() {
        return (
            <div>


                <form onSubmit={(e) => this.addTodo(e)}>
                    <label>
                        Enter description :
                     <input onChange={(e) => this.newTodoChanged(e)} type='text' name='description' placeholder='Enter a description...' />
                    </label>
                    <label>
                        Deadline :
                     <input type='date' name='name' />
                    </label>
                    <button type='submit' className='add'>Add</button>
                </form>
                <div className='items'>
                    {this.renderTodos()}
                    
                </div>
                
            </div>
        )
    }
}

export default Category;
