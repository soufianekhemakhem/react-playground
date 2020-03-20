import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    personsA: [
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
    showPersons: true,
    personsB: []

  }

  generatePersonsList = () => {
    // let personsList = []

    // for (let i = 0; i < this.persons.length; i++) {
    //   personsList.push(
    //     <Person name={this.persons[i].name} age={this.persons[i].age} />
    //   )

    // }

    let personsList = this.state.personsA.map((person) => {
      return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        deleted={() => { this.deletePersonHandler(person) }}
        changed={(event) => { this.changeNameFromInputHandler(person, event.target.value) }}
      />
    })
    return personsList
  }

  switchNameHandler = () => {

    // Do not mutate the state directly!! use setState() 
    //
    // console.log('The button was clicked !!');
    // this.state.persons[0].name = "Jalel"

    const newPersons = [...this.state.personsA]  //copy data
    newPersons[0].name = 'Jalel' //make changes

    this.setState({
      personsA: newPersons //update the state
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

  deletePersonHandler = (person) => {
    const newPerson = [...this.state.personsA]
    const index = newPerson.indexOf(person)
    newPerson.splice(index, 1)

    this.setState({
      personsA: newPerson
    })
  }

  changeNameFromInputHandler = (person, newName) => {
    const newPersons = [...this.state.personsA]  //copy data

    const index = newPersons.indexOf(person)
    newPersons[index].name = newName //make changes

    this.setState({
      personsA: newPersons //update the state
    })

  }

  disableSwitchButton = () => {

    // return 0 => false
    // return >0 => true
    // ! => not

    return !this.state.personsA.length

    // Or I can use the following 
    // 
    // if (this.state.persons.length === 0){
    //   return true
    // } else {
    //   return false
    // }

  }

  render() {

    let personsListA = []

    if (this.state.showPersons)
      personsListA = this.generatePersonsList()

    return (
      <div className="App">
        <h1>
          Hello React World !!
        </h1>

        <button
          onClick={this.switchNameHandler}
          disabled={this.disableSwitchButton()}>
          Switch Name
        </button>

        <button onClick={this.togglePersonsHandler}> Toggle Persons</button>
        <button onClick={this.deletePersonHandler}> Delete Person</button>

        <div style={{ display: 'flex' }}>

          <div style={{ width: '50%' }}>
            <h2> List A </h2>
            {personsListA}
          </div>

          <div style={{ width: '50%' }} >
            <h2> List B </h2>
          </div>

        </div>

      </div>
    )
  }
}

export default App