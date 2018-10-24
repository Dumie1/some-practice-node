import React from 'react';
import todos from './todos.json';
// import Form from './Form';

class Category extends React.Component {


    state = {
        todos
    }


    handleChange = (e) => {
        this.setState({ description: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { todos } = this.state;
        //assemble data
        const newTodo = {
            id: todos.length + 1,
            description: e.target.value,
            deadline: e.target.value,
            done: false
        }
        //update state
        this.state.todos.push(newTodo);
        //update state
        this.setState({ todos });
    }

    deleteTodo = (e, i) => {
        const todos = this.state.todos;
        todos.splice(i, 1);
        this.setState({ todos });
    }
    
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
                            <button onClick={this.deleteTodo}className='remove'>Remove</button>
                            
                            </li>
                           
                    )
                })
            }
        </ul>
    }

    render() {
        return (
            <div>
                {/* <Form /> */}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Description :
                    <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                    </label>
                    <label>
                        Deadline :
                    <input type="date" value={this.state.deadline}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <div className='items'>
                    {this.renderTodos()}
                    
                </div>
                
            </div>
        )
    }
}

export default Category;


// -----------reall code below

// import React from 'react';
// import todos from './todos.json';
// import Form from './Form';

// class Category extends React.Component {


//     state = {
//         todos
//     }










//     addTodo = e => {
//         e.preventDefault();
//         const { todos } = this.state;
//         //assemble data
//         const newTodo = {
//             id: todos.length + 1,
//             description: e.target.description.value,
//             deadline: e.target.deadline.value,
//             done: false
//         }
//         //update state
//         this.state.todos.push(newTodo);
//         //update state
//         this.setState({ todos });
//     }



//     newTodoChanged = (e) => {
//         this.setState({
//             newTodo: e.target.value
//         });

//     }






//     isTaskDone(todo) {
//         todo.done = !todo.done;
//         this.setState({
//             todos: this.state.todos
//         });
//     }

//     renderTodos() {
//         if (this.state.todos.length === 0) return <p className='noItems'>No items...</p>

//         const textStyle = { textDecoration: 'line-through', backgroundColor: '#0455d8' }

//         return <ul>
//             {
//                 todos.map((todo, id) => {
//                     return (
//                         <li key={id}>
//                             <input checked={todo.done} type='checkbox' onChange={this.isTaskDone.bind(this, todo)} />
//                             <span style={todo.done ? textStyle : null}>
//                                 {todo.description} , {todo.deadline}
//                             </span>
//                             <button onClick={this.editTodo} className='edit'>Edit</button>
//                             <button onClick={this.removeTodo} className='remove'>Remove</button>

//                         </li>

//                     )
//                 })
//             }
//         </ul>
//     }

//     render() {
//         return (
//             <div>
//                 <Form />
//                 <div className='items'>
//                     {this.renderTodos()}

//                 </div>

//             </div>
//         )
//     }
// }

// export default Category;