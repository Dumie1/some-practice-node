import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';


@inject('BooksStore')
@observer
  
  
class App extends Component {


  constructor(props) {
    super(props); 
    props.BooksStore.addPosts();
    // props.BooksStore.addMorePosts();
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const book = this.newBook.value;
    this.props.BooksStore.addBook(book);
    this.newBook.value = '';
}

  render() {

    const { BooksStore } = this.props;

    return <div className="App">
        <header className="App-header">
          <h2>You have {BooksStore.numberOfBooks} books</h2>

          <form onSubmit={this.handleSubmit}>
            <input placeholder="Add book..." ref={input => (this.newBook = input)} />
            <button> Add Book</button>
          </form>

          <ul>
            {BooksStore.books.map((book, index) => <li key={index}>
                <h4> Book name: {book}</h4>
              </li>)}
          </ul>

          <ul>
          {BooksStore.posts.data.map((post, index) => <li key={index}>
            
                <p className='tod'> {post.deadline}</p>
                <p>{post.description}</p>
                
              </li>)}
          </ul>
        </header>
      </div>;
  }
}

export default App;
