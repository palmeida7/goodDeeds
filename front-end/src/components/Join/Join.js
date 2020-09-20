import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <img src="https://i.imgur.com/pkTURwi.png"/>
                <h1 className="heading-chat">chat</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(evt) => setName(evt.target.value)} /></div>
                <div><input placeholder="Room" className="joinInput" type="text" onChange={(evt) => setRoom(evt.target.value)} /></div>
                <Link onClick={evt => (!name || !room) ? evt.preventDefault() : null} to={`/chat?name=${name}&&room=${room}`}>
                    <button className="button-chat mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;