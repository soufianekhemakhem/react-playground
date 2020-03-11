import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        id: 'aze',
        name: 'Wael',
        age: '24'
      },
      {
        id: 'afd',
        name: 'Wassim',
        age: '22'
      }
    ],
    showPersons: true
  }

  generatePersonsList = () => {
    // let personsList = []

    // for (let i = 0; i < this.persons.length; i++) {
    //   personsList.push(
    //     <Person name={this.persons[i].name} age={this.persons[i].age} />
    //   )

    // }

    let personsList = this.state.persons.map((person) => {
      return <Person
        name={person.name}
        age={person.age}
        key={person.id}
      />
    })
    return personsList
  }

  changeNamesHandler = () => {

    // Do not mutate the state directly!! use setState() 
    //
    // console.log('The button was clicked !!');
    // this.state.persons[0].name = "Jalel"

    const newPersons = [...this.state.persons]  //copy data
    newPersons[0].name = 'Jalel' //make changes

    this.setState({
      persons: newPersons //update the state
    })

  }

  togglePersonsHandler = () => {
    // if (this.state.showPersons) {
    //   this.setState({
    //     showPersons: false
    //   })
    // } else {
    //   this.setState({
    //     showPersons: true
    //   })
    // }

    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {

    let personsList = []

    if (this.state.showPersons)
      personsList = this.generatePersonsList()

    return (
      <div className="App">
        <h1>
          Hello React World !!
        </h1>
        <button onClick={this.changeNamesHandler}> change names</button>
        <button onClick={this.togglePersonsHandler}> toggle Persons</button>
        {personsList}
      </div>
    )
  }
}

export default App