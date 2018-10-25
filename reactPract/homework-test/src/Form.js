import React from 'react';

class Form extends React.Component{
           

    render() {

        const { submitForm , newTodoChanged} = this.props; 


        return (
            <form onSubmit={submitForm}>
                    <label>
                         Description :
                <input onChange={newTodoChanged} type="text" name='description' placeholder='Type a description...' />
                    </label>
                    <label>
                        Deadline :
                 <input onChange={newTodoChanged} type="date" name='deadline' />
                    </label>
                <input type="submit" value="Submit" />
            </form>

                )
            }
}

export default Form;
 