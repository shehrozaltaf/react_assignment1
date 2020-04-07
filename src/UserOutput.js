import React from 'react';

const UserOutput = props => {
    return (
        <div className="myResult">
            <p className="p1">Persone name is: {props.name}</p>
            <p className="p2">Age is: {props.age} </p>
        </div>
    )
};

export default UserOutput;