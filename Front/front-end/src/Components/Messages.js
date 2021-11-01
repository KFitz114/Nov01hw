import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Messages(props) {
    const [messages, setMessages] = useState('');
    useEffect(() => {
        axios.get('http:localhost:3400/messages')
        .then(res => {
            console.log('RES: ', res.data);

            setMessages(res.data.messages);
        })
    })
    return(
        <div>
            <h1> {messages} </h1>
        </div>
    );
}

export default Messages;