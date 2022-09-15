import React from 'react';

function Message({name}) {
    console.log(name);
    return (
        <h3> Привет, {name} </h3>
    );
}
export default Message;