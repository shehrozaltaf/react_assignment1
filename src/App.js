import React, {useState} from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';


const App = () => {
    const [personsAr, setPersonsArr] = useState({
        persons: [
            {key: 1, name: "shehroz", age: 28},
        ]
    });


    const inpChangeHandler = (event) => {
        setPersonsArr({
            persons: [
                {key: 1, name: event.target.value, age: personsAr.persons[0].age},
            ]
        });
    };

    const changeAgeHandler = (event) => {
        setPersonsArr({
            persons: [
                {key: 1, name: personsAr.persons[0].name, age: event.target.value},
            ]
        })
    };

    const [showDiv, setShowDiv] = useState({
        showDiv: true
    });

    const toggleHandler = () => {
        const doesShow = showDiv.showDiv;
        setShowDiv({
            showDiv: !doesShow
        });
    };


    let myDiv = null;

    if (showDiv.showDiv) {
        myDiv =
            <div>
                {
                    personsAr.persons.map(person => {
                        return <UserOutput name={person.name} age={person.age} key={person.key}/>
                    })
                }
            </div>
        ;
    }
    return (
        <div>
            <button onClick={toggleHandler}> My button</button>
            {
                personsAr.persons.map((person, index) => {
                    return <UserInput change={inpChangeHandler} name={person.name} changeAge={changeAgeHandler}
                                      age={person.age} key={person.key}/>
                })
            }
            {/*  <UserInput change={inpChangeHandler} name={personsAr.persons[0].name} changeAge={changeAgeHandler}
                       age={personsAr.persons[0].age}/>*/}
            {myDiv}
            {/* {
                showDiv.showDiv ?
                    <div>
                        <UserOutput name={personsAr.persons[0].name} age={personsAr.persons[0].age}/>
                    </div>

                    : null
            }*/}

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
