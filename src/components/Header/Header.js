import React from 'react'
import "./header.css"

function Header(props) {
    const {toggleModal} = props
    return(
        <header>
            <h1>Library</h1>

            <button onClick={() => { toggleModal() }}>Add Book</button>
        </header>
    );
}

export default Header