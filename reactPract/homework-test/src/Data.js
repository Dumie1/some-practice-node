import React from 'react';
import Todos from './Todos.json';
import Form from './Form';


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

    this.descriptionInput.current.value = '';
    this.deadlineInput.current.value = '';
  };

  deleteTodo = id => {
    const arr = this.state.Todos;
    arr.splice(id, 1);
    this.setState({ Todos: arr });
  };

  isTaskDone = todo => {
    todo.done = !todo.done;
    this.setState({
      todos: this.state.todos
    });
  };

  renderTodos = () => {
    if (this.state.Todos.length === 0)
      return <p className='noItems'>No items...</p>;
    // console.log(this.state);
    const textStyle = {
      textDecoration: 'line-through',
      backgroundColor: '#0455d8'
    };

    return (
      <ul>
        {Todos.map((todo, id) => {
          return (
            <li key={id}>
              <input
                checked={todo.done}
                type='checkbox'
                onChange={this.isTaskDone.bind(this, todo)}
              />
              <span style={todo.done ? textStyle : null}>
                {todo.description} , {todo.deadline}
              </span>
              {/* <button onClick={this.edit} className='edit'>
                Edit
              </button> */}
              <button onClick={event => this.deleteTodo(id)} className='remove'>
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
      <div className='data'>
        <Form
          addTodo={this.addTodo}
          descriptionInput={this.descriptionInput}
          deadlineInput={this.deadlineInput}
        />
        <div className='items'>{this.renderTodos()}</div>
        
      </div>
    );
  }
}

export default Data;






// reall code below--


// import React from "react";
// import Todos from "./Todos.json";
// import Form from "./Form";

// class Data extends React.Component {
//   state = {
//     Todos
//   };

//   descriptionInput = React.createRef();
//   deadlineInput = React.createRef();

//   addTodo = event => {
//     event.preventDefault();

//     const descriptionInput = this.descriptionInput.current.value;
//     const deadlineInput = this.deadlineInput.current.value;
//     const newState = this.state;

//     const Todos = newState.Todos;
//     Todos.push({
//       id: Todos.length + 1,
//       description: descriptionInput,
//       deadline: deadlineInput,
//       done: false
//     });

//     this.setState(newState);

//     this.descriptionInput.current.value = "";
//     this.deadlineInput.current.value = "";
//   };

//   deleteTodo = id => {
//     const arr = this.state.Todos;
//     arr.splice(id, 1);
//     this.setState({ Todos: arr });
//   };

//   isTaskDone = todo => {
//     todo.done = !todo.done;
//     this.setState({
//       todos: this.state.todos
//     });
//   };

//   renderTodos = () => {
//     if (this.state.Todos.length === 0)
//       return <p className="noItems">No items...</p>;
//     // console.log(this.state);
//     const textStyle = {
//       textDecoration: "line-through",
//       backgroundColor: "#0455d8"
//     };

//     return (
//       <ul>
//         {Todos.map((todo, id) => {
//           return (
//             <li key={id}>
//               <input
//                 checked={todo.done}
//                 type="checkbox"
//                 onChange={this.isTaskDone.bind(this, todo)}
//               />
//               <span style={todo.done ? textStyle : null}>
//                 {todo.description} , {todo.deadline}
//               </span>
//               <button onClick={this.editTodo} className="edit">
//                 Edit
//               </button>
//               <button onClick={event => this.deleteTodo(id)} className="remove">
//                 Remove
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   };

//   render() {
//     return (
//       <div>
//         <Form
//           addTodo={this.addTodo}
//           descriptionInput={this.descriptionInput}
//           deadlineInput={this.deadlineInput}
//         />
//         <div className="items">{this.renderTodos()}</div>
//       </div>
//     );
//   }
// }

// export default Data;
