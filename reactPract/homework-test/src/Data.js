import React from "react";
import Todos from "./Todos.json";
import Form from "./Form";

class Data extends React.Component {
  state = {
    Todos
  };

  descriptionInput = React.createRef();
  deadlineInput = React.createRef();

  addTodo = event => {
    event.preventDefault();

    const descriptionInput = this.descriptionInput.current.value;
    const deadlineInput = this.deadlineInput.current.value;
    const newState = this.state;

    const Todos = newState.Todos;
    Todos.push({
      id: Todos.length + 1,
      description: descriptionInput,
      deadline: deadlineInput,
      done: false
    });

    this.setState(newState);

    this.descriptionInput.current.value = "";
    this.deadlineInput.current.value = "";
  };

  deleteTodo = id => {
    const arr = this.state.Todos;
    arr.splice(id, 1);
    this.setState({ Todos: arr });
  };

  // deleteTodo = id => {
  //   this.setState(prevState => {
  //     let todos = prevState.todos;
  //     Todos.splice(id, 1);
  //     return { Todos: todos };
  //   });
  // };

  isTaskDone = todo => {
    todo.done = !todo.done;
    this.setState({
      todos: this.state.todos
    });
  };

  renderTodos = () => {
    if (this.state.Todos.length === 0)
      return <p className="noItems">No items...</p>;
    // console.log(this.state);
    const textStyle = {
      textDecoration: "line-through",
      backgroundColor: "#0455d8"
    };

    return (
      <ul>
        {Todos.map((todo, id) => {
          return (
            <li key={id}>
              <input
                checked={todo.done}
                type="checkbox"
                onChange={this.isTaskDone.bind(this, todo)}
              />
              <span style={todo.done ? textStyle : null}>
                {todo.description} , {todo.deadline}
              </span>
              <button onClick={this.editTodo} className="edit">
                Edit
              </button>
              <button onClick={event => this.deleteTodo(id)} className="remove">
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <Form
          addTodo={this.addTodo}
          descriptionInput={this.descriptionInput}
          deadlineInput={this.deadlineInput}
        />
        <div className="items">{this.renderTodos()}</div>
      </div>
    );
  }
}

export default Data;






// reall code below--

// import React from 'react';
// import Todos from './Todos.json';
// // import Form from './Form';

// class Data extends React.Component {

//     //-----refs below---

//     todoInput = React.createRef();
//     todoInputDate = React.createRef()

//     addTodo = (event) => {
//         // if (event.key === 'Enter') {
//         event.preventDefault();
//         const todoInput = this.todoInput.current.value;
//         const todoInputDate = this.todoInputDate.current.value;

//         this.setState((prevState) => {
//             let todos = prevState.todos;

//             Todos.push({
//                 id: 4,
//                 description: todoInput,
//                 deadline: todoInputDate,
//                 done: false,
//             });
//             return {
//                 Todos: todos
//             }
//         }
//         )

//     }

//     // --------refs end--

//     state = {
//         Todos
//     }

//     // newTodoChanged =(e)=>{
//     //     console.log(e.target.value);

//     // }

//     // submitForm = (e) => {
//     //     e.preventDefault();
//     //      const { todos } = this.state;
//     //     //assemble data
//     //     const newTodo = {
//     //         id: Todos.length + 1,
//     //         description: e.target.value,
//     //         deadline: e.target.value,
//     //         done: false
//     //     }
//     //     //add new todo to list
//     //     this.state.Todos.push(newTodo);
//     //     //update state
//     //     this.setState({ todos });

//     // }

//     deleteTodo = (index) => {
//         const todos = this.state.todos;
//         Todos.splice(index, 1);
//         this.setState({ todos });
//     }

//     isTaskDone(todo) {
//         todo.done = !todo.done;
//         this.setState({
//             todos: this.state.todos
//         });
//     }

//     renderTodos = () => {
//         // if (this.state.Todos.length === 0) return <p className='noItems'>No items...</p>

//         const textStyle = { textDecoration: 'line-through', backgroundColor: '#0455d8' }

//         return <ul>
//             {
//                 Todos.map((todo, id) => {
//                     return (
//                         <li key={id}>
//                             <input checked={todo.done} type='checkbox' onChange={this.isTaskDone.bind(this, todo)} />
//                             <span style={todo.done ? textStyle : null}>
//                                 {todo.description} , {todo.deadline}
//                             </span>
//                             <button onClick={this.editTodo} className='edit'>Edit</button>
//                             <button onClick={this.deleteTodo} className='remove'>Remove</button>

//                         </li>

//                     )
//                 })
//             }
//         </ul>
//     }

//     render() {

//         return (

//             <div>

//                 <form onSubmit={this.addTodo}>
//                     <label>
//                         Description :
//                 <input ref={this.todoInput} type="text" name='description' placeholder='Type a description...' />
//                     </label>
//                     <label>
//                         Deadline :
//                 <input ref={this.todoInputDate} type="date" name='description' />
//                     </label>

//                     <input type="submit" value="Submit" />
//                 </form>

//                 {/* <form >
//                     <label>
//                         Description :
//                 <input type="text" name='description' placeholder='Type a description...'
//                 ref={this.todoInput} onKeyUp={this.addTodo}    />
//                 </label>
//                 <label>
//                     Deadline :
//                 <input type="date" name='deadline'
//                         ref={this.todoInputDate} onKeyUp={this.addTodo} />
//                 </label>

//                     <input type="submit" value="Submit" />

//                  <form/> */}

//                 {/* <Form
//                     submitForm={this.submitForm}
//                     newTodoChanged={this.newTodoChanged}
//                 /> */}

//                 <div className='items'>
//                     {this.renderTodos()}

//                 </div>
//             </div>

//         )
//     }
// }

// export default Data;
