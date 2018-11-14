import { observable, computed, action } from "mobx";

class BooksStore {
  @observable books = [];

  @action addBook = book => {
    this.books.push(book);
  };

  @computed get numberOfBooks() {
    return this.books.length;
  }
}

const store = new BooksStore();
export default store;
