import React, {useState, useEffect} from 'react'
import Event from './Events'
import './modal.css'

function Modal(props) {
    // handle open and close modal
    const {modalIsOpen, toggleModal} = props
    const hide =(modalIsOpen) ? 'modal-container' : 'hide'

    
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState(0)
    const [isRead, setIsRead] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        Event.addBook(name, author, pages, isRead)
        toggleModal()
        setName('')
        setAuthor('')
        setPages(0)
        setIsRead(false)
    }
    return (
        <div className={hide}>
            <form onSubmit={handleSubmit}>
                <div className='form-header'>
                    <h1>Add a Book</h1> 
                    <a onClick={() => toggleModal()} className='close' >&times;</a>
                </div>
                <label>
                    Book's name
                    <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Name'/>
                </label>
                <label>
                    Book's Author
                    <input value={author} onChange={e => setAuthor(e.target.value)} type='text' placeholder='Author'/>
                </label>
                <div className='form-footer'>
                    <label>
                        Number of pages
                        <input value={pages} onChange={e => setPages(e.target.value)} type='number' placeholder='Pages'/>
                    </label>

                    <div> <input checked={isRead} onChange={e => setIsRead(e.target.checked)} type='checkbox'/>Lido</div>
                </div>
                <button>Add</button>
            </form> 
        </div>
        );
}

export default Modal