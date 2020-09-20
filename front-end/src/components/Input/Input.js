import React from 'react';

import './Input.css';

const Input = ({message, setMessage, sendMessage}) => (
    <form className="form-chat">
        <input  
            className="input-chat" 
            type="text" 
            placeholder="Type a message..." 
            value={message} 
            onChange={({target: {value}}) => setMessage(value)} 
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} 
        />
        <button className="sendButton-chat" onClick={e => sendMessage(e)}>Send</button>
    </form>
);

export default Input;