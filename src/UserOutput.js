import React from 'react';

const UserOutput = props => {
    return (
        <div className="myResult">
            <p className="p1">Persone name is: {props.name}& age is: {props.age}</p>
            <p className="p2">Paragarph 2</p>
        </div>
    )
};

export default UserOutput;