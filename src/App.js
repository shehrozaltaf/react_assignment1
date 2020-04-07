import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';


const App = () => {
    const [personsAr, setPersonsArr] = useState({
        persons: [
            {name: "shehroz", age: 28},
            {name: "ali", age: 25},
        ]
    });


    const inpChangeHandler = (event) => {
        console.log(1);
        setPersonsArr({
            persons: [
                {name: event.target.value, age: 28},
                {name: "ali", age: 25},
            ]
        });
    };

    return (
        <div>
            <UserInput change={inpChangeHandler}/>
            <UserOutput name={personsAr.persons[0].name} age={personsAr.persons[0].age}/>
            <UserOutput name={personsAr.persons[1].name} age={personsAr.persons[1].age}/>
        </div>
    );
};


/*class App extends Component {

    inpChangeHandler = () => {
        console.log(1);
    };

    render() {
        return (
            <div>
                <UserInput change={this.inpChangeHandler}/>
                <UserOutput name="Shehroz" age="28"/>
                <UserOutput name="Ali" age="30"/>
            </div>
        )
    }
}*/

export default App;
