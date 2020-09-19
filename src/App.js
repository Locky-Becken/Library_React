import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header'
import Book from './components/Book/Book'
import Modal from './components/Modal/Modal'
import Event from './components/Modal/Events'
import BooksData from './booksData'
import './App.css';

function App() {
  
  const [library, setLibrary] = useState(Event.store)

  function handleDelete(index) {
    Event.removeBook(index); 
    setLibrary(Event.returnLibrary())
  }

  const bookComponent = library.map( (info, index) => { 
    return <Book 
              removeBook={() => {handleDelete(index)}} 
              key={index} 
              book = {info}
              edit = {() => Event.editBook(index)}

            />  
          })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  function toggleModal() {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div className="App">
      <Header
        toggleModal={toggleModal}
      />
      <main>
        {bookComponent}
      </main>
      <Modal 
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
      />
</div> 
  );
}

export default App;
