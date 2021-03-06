import React from 'react';

class Form extends React.Component{
    render() {

        const { addTodo , descriptionInput , deadlineInput} = this.props; 

        return (
            <form onSubmit={addTodo}>
                <label>
                    Description :
                    <input ref={descriptionInput} type='text' name='description' placeholder='Type a description...' />
                </label>
                <label>
                    Deadline :
                    <input ref={deadlineInput} type='date' name='deadline' />
                </label>
                    <input type='submit' value='Submit' className='add'/>
                </form>
        )
    
            }
}

export default Form;
 






// --real code below-----


// import React from 'react';

// class Form extends React.Component {


//     render() {

//         const { submitForm, newTodoChanged } = this.props;


//         return (
//             <form onSubmit={submitForm}>
//                 <label>
//                     Description :
//                 <input onChange={newTodoChanged} type="text" name='description' placeholder='Type a description...' />
//                 </label>
//                 <label>
//                     Deadline :
//                  <input onChange={newTodoChanged} type="date" name='deadline' />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>

//         )
//     }
// }

// export default Form;