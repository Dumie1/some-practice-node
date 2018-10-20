import React from 'react';

class Form extends React.Component{
            
    render() {
        return (
            <form onSubmit={(e) => this.props.addTodo(e)}>
                <label>
                        Enter description :
                     <input onChange={(e) => this.props.newTodoChanged(e)} type='text' name='description' placeholder='Enter a description...' />
                </label>
                <label>
                        Deadline :
                     <input type='date' name='name' />
                </label>
                <button type='submit' className='add'>Add</button>
            </form> 

                )
            }
}

export default Form;