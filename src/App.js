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
    personsB: [
      {
        id: 'afh',
        name: 'Sofien',
        age: '31'
      }]

  }

  generatePersonsList = (array) => {
    // let personsList = []

    // for (let i = 0; i < this.persons.length; i++) {
    //   personsList.push(
    //     <Person name={this.persons[i].name} age={this.persons[i].age} />
    //   )

    // }


    let personsList = array.map((person) => {
      return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        deleted={() => { this.deletePersonHandler(person) }}
        changed={(event) => { this.changeNameFromInputHandler(person, event.target.value) }}
        moved={() => { this.movePersonHandler(person) }}
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

  movePersonHandler = (person) => {
    let newPersonsA = [...this.state.personsA]
    let newPersonsB = [...this.state.personsB]

    let index = newPersonsA.indexOf(person)

    if (index >= 0) {
      newPersonsB.push(newPersonsA[index])
      newPersonsA.splice(index, 1)
    } else {
      index = newPersonsB.indexOf(person)
      newPersonsA.push(newPersonsB[index])
      newPersonsB.splice(index, 1)
    }

    this.setState({
      personsA: newPersonsA,
      personsB: newPersonsB
    })
  }

  render() {

    let personsListA = []
    let personsListB = []

    if (this.state.showPersons) {
      personsListA = this.generatePersonsList(this.state.personsA)
      personsListB = this.generatePersonsList(this.state.personsB)
    }

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
            {personsListB}
          </div>

        </div>

      </div>
    )
  }
}

export default App