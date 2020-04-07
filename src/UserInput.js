import React from 'react';

const UserInput = props => {
    return (
        <div className="formElement">
            <input type="text" name="input1" id="input1" onChange={props.change} value={props.name}/>
            <br/>
            <input type="text" name="input2" id="input2" onChange={props.changeAge} value={props.age}/>
            <br/>
        </div>
    )
};

export default UserInput;