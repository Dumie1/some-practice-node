import React from 'react';

class Form extends React.Component{


    render() {
        return (
            <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a}
                    placeholder="enter task">
                </input>
                <button type="submit">add</button>
            </form>
        )
    }
}

export default Form;

// ----------------second below

// class Form extends React.Component {
   
//     justSubmitted(event) {
//         event.preventDefault();
//         let input = event.target.querySelector('input');
//         let value = input.value;
//         input.value = '';
//         this.addTodo(value);
//     }

//     render() {
//         return (   
//             <form onSubmit={this.justSubmitted}>
//                 <input type='text'></input>
//                 <input type='date'></input>
//             </form>
//         );
//     }
// }

// export default Form;



//-------------------first below
































// import React from 'react';

// class Form extends React.Component{
            
//     render() {
//         return (
//             <form onSubmit={(e) => this.props.addTodo(e)}>
//                 <label>
//                         Enter description :
//                      <input onChange={(e) => this.props.newTodoChanged(e)} type='text' name='description' placeholder='Enter a description...' />
//                 </label>
//                 <label>
//                         Deadline :
//                      <input type='date' name='name' />
//                 </label>
//                 <button type='submit' className='add'>Add</button>
//             </form> 

//                 )
//             }
// }

// export default Form;