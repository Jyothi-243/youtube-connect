import React from 'react'

const ChatMessage = ({name, message}) => {
    return (
        <div className='chat-message-container'>
            <img class="user-icon" alt="user-icon" src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg"></img>
            <span className='chat-name'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage