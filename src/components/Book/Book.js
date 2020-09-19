import React, { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi';
import './book.css'

function Book(props) {
    const { title, author, pages, isRead } = props.book

    const [read, setRead] = useState(isRead)
    function handleIsRead() {
        setRead(!read)
        props.edit()
    }

    return (
            <div className='book'>
                    <div className='header'>
                        <h2>{title}</h2>
                        <h3>{author}</h3>
                    </div>
                    <div className='footer'>
                        <div className='buttons'>
                            <p onClick={props.removeBook}><FiTrash2 /></p>
                        </div>
                        <h4>{pages} paginas</h4>
                        <div><input onChange={handleIsRead} checked={read} type='checkbox'/>Lido</div>
                    </div>
            </div> 
       );
}

export default Book