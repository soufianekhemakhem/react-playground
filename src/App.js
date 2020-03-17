import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        id: 'aze',
        name: 'Wael',
        age: '24',
        list: "A"
      },
      {
        id: 'afd',
        name: 'Wassim',
        age: '22',
        list: "A"
      }
    ],
    showPersons: true,
    title: 'black'
  }

  generatePersonsList = (list) => {
    // let personsList = []

    // for (let i = 0; i < this.persons.length; i++) {
    //   personsList.push(
    //     <Person name={this.persons[i].name} age={this.persons[i].age} />
    //   )

    // }

    let array = this.state.persons.filter((person) => {
      return person.list == list
    })

    let personsList = array.map((person) => {
      return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        deleted={() => { this.deletePersonHandler(person.id) }}
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
      showPersons: !this.state.showPersons,
      title: this.state.showPersons ? 'red' : 'black'
    })
  }

  deletePersonHandler = (personId) => {
    const newPerson = [...this.state.persons]
    const index = newPerson.findIndex((person) => {
      return person.id == personId
    })
    newPerson.splice(index, 1)

    this.setState({
      persons: newPerson
    })
  }

  changeNameFromInputHandler = (person, newName) => {
    const newPersons = [...this.state.persons]  //copy data

    const index = newPersons.indexOf(person)
    newPersons[index].name = newName //make changes

    this.setState({
      persons: newPersons //update the state
    })

  }

  disableSwitchButton = () => {

    // return 0 => false
    // return >0 => true
    // ! => not

    return !this.state.persons.length

    // Or I can use the following 
    // 
    // if (this.state.persons.length === 0){
    //   return true
    // } else {
    //   return false
    // }

  }

  movePersonHandler = (person) => {
    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)

    // if (newPersons[index].list == 'A') {
    //   newPersons[index].list = 'B'
    // } else {
    //   newPersons[index].list = 'A'
    // }

    newPersons[index].list = newPersons[index].list == 'A' ? 'B' : 'A'

    this.setState({
      persons: newPersons
    })
  }



  //Hello world!!!

  render() {

    let personsListA = []
    let personsListB = []

    if (this.state.showPersons) {
      personsListA = this.generatePersonsList('A')
      personsListB = this.generatePersonsList('B')
    }

    return (
      <div className="App">
        <h1 style={{ color: this.state.title }}>
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