import React, { Component } from 'react';
import './App.css';

const ARTTYPES = "http://localhost:4000/api/v1/arttypes"
const ARTADJECTIVES = "http://localhost:4000/api/v1/words"


class IdeaGenerator extends Component {
  constructor(props){
    super(props)
    this.state= {
      mediums: [],
      chosenMedium: "",
      artAdjectives: [],
      chosenAdjectives: [],
      clicked: "Generate Idea!",
    }
  }

  componentDidMount(){
    fetch(ARTTYPES)
    .then(res => res.json())
    .then(res => this.setState({
      mediums: res.map(obj => obj.name)
    }))

    fetch(ARTADJECTIVES)
    .then(res => res.json())
    .then(res => {
      this.setState({
      artAdjectives: res.map(obj => obj.name)
    })})

  }

  handleClick = (event) => {
    let newArray = []
    let filteredNumbers = []
    for (let i=0; i<5; i++){
      let newNumber = Math.floor(Math.random() * this.state.artAdjectives.length)
      if (filteredNumbers.find(number => number === newNumber) === undefined){
        filteredNumbers.push(newNumber)
        newArray.push(this.state.artAdjectives[newNumber])
      }
      else {
        i--
      }
    }
    this.setState({
      chosenMedium: this.state.mediums[Math.floor(Math.random() * this.state.mediums.length)],
      chosenAdjectives: newArray,
      clicked: "Generate a New Idea!"
    })
  }

  render() {
    return (
      <div className="Ideas">
      <button className="button" id="ideaGenerate" onClick={this.handleClick}>{this.state.clicked}</button>
      <br/><br/>
      {this.state.chosenMedium === ""
      ?
      null
      :
        <div>
        <h2>Your Project Should Have: </h2>
        <div className="mediumType"><span className="subtitles">Medium:</span> {this.state.chosenMedium}</div>
        <div className="wordDescriptor"><span className="subtitles">Adjective 1:</span> {this.state.chosenAdjectives[0]}</div>
        <div className="wordDescriptor"><span className="subtitles">Adjective 2:</span> {this.state.chosenAdjectives[1]}</div>
        <div className="wordDescriptor"><span className="subtitles">Adjective 3:</span> {this.state.chosenAdjectives[2]}</div>
        <div className="wordDescriptor"><span className="subtitles">Adjective 4:</span> {this.state.chosenAdjectives[3]}</div>
        <div className="wordDescriptor"><span className="subtitles">Adjective 5:</span> {this.state.chosenAdjectives[4]}</div>
        </div>
      }
      </div>
    )
  }
}

export default IdeaGenerator;
