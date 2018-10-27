import React from 'react';

class Form extends React.Component{
           

    render() {

        const { addTodo , todoDescriptionInput , todoDeadlineInput} = this.props; 


        return (
            <form onSubmit={addTodo}>
                <label>
                    Description :
                    <input ref={todoDescriptionInput} type='text' name='description' placeholder='Type a description...' />
                </label>
                <label>
                    Deadline :
                    <input ref={todoDeadlineInput} type='date' name='description' />
                </label>
                    <input type='submit' value='Submit'/>
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