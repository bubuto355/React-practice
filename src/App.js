import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { id: "asd", name: "Lars", age: 28 },
      { id: "dsa", name: "Pål", age: 10 },
      { id: "sda", name: "Sara", age: 26 }
    ],
    showPeopleBool: false
  }


  deletePersonHandler = (index) =>{
    //const tempPersons = this.state.persons.slice();
    const tempPersons = [...this.state.persons];
    tempPersons.splice(index, 1);
    this.setState({persons: tempPersons});
  }

  nameHandler2 = (event,id) => {
    const personsIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    // const person = Object.assing({}, this.state.persons[personIndex])
    const person = {
      ...this.state.persons[personsIndex]
    };

    person.name = event.target.value;
    const tempPersons = [...this.state.persons];
    tempPersons[personsIndex]= person
    this.setState({
      persons: tempPersons
      
    })
  }

  showPeople = () => {
    const doesShow = this.state.showPeopleBool;
    this.setState({ showPeopleBool: !doesShow })
  }
  // anonymous function can be inneficient, use bind where possible
  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    }

    let people = null;

    if (this.state.showPeopleBool) {

      buttonStyle.backgroundColor = 'blue';
      buttonStyle.color = 'white';
      
      people = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={this.deletePersonHandler.bind(this, index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameHandler2(event,person.id)} />
          })}
         
        </div>
      )
    }

    const classes = [];
    if(this.state.persons.length < 3){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }
      
    
    //option click => multiple cursors
    //cmd + D to quickly selecet multiple of the same variable
    //inline if statements work! {statement ? true : false}
    return (
      <div className="App">
        <h1>Hello</h1>
        <p className={classes.join(' ')}>This is dog</p>
        <button
          style={buttonStyle}
          onClick={this.showPeople}>Show/hide</button>
          {people}
      </div>
    );
  }
}

/* HARDCODED
nameHandler = (newName) => {
    // NOPE this.state.persons[0].name = "Adam";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Pål", age: 10 },
        { name: "Max", age: 26 }
      ]
    })
  }
<Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.nameHandler.bind(this, "Sondre")} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameHandler2}> I enjoy reading books </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />*/

export default App;
