import React from 'react'
import bookStore from '../../booksData'
import BooksData from '../../booksData' 



function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

const Event = (() => {
    let store = JSON.parse(localStorage.getItem('books')) || BooksData

    function addBook(title, author, pages, isRead) {
        store.push(new Book(title, author, pages, isRead))
        saveToStorage()
    }

    function removeBook(pos) {
        const newStore = [
            ...store.slice(0, pos),
            ...store.slice(pos + 1)
        ]

        store = newStore
        saveToStorage()
    } 

    function saveToStorage() {
        localStorage.setItem('books', JSON.stringify(store))
    }

    function returnLibrary() {
        return store
    }

    function editBook(index) {
        store[index].isRead = !store[index].isRead
        saveToStorage()
        console.log(store[index].isRead, store[index])
    }

    return {
        addBook,
        store,
        removeBook,
        returnLibrary,
        saveToStorage,
        editBook
    }
})();

export default Event