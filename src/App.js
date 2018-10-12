import React, { Component } from 'react';
import './App.css';

import * as characterArrs from './data.js';

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

class App extends Component {
  render() {
    return (
      <VillainTextBox />
    );
  }
}

class VillainTextBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      asA: "A ",
      characteristicOne: '',
      characteristicTwo: '',
      race: '',
      characterClass: '',
      characterGoal: '',
      characterMotivation: '',
      characterGender: '',
      villainString: ''
    }

    this.createVillain = this.createVillain.bind(this);
    this.createVillainStr = this.createVillainStr.bind(this);
    this.changePre = this.changePre.bind(this);
    this.removeDupe = this.removeDupe.bind(this);
  }

  createVillain() {
    this.setState({
      asA: "A ",
      characteristicOne: characterArrs.characteristicArr[randomNumber(characterArrs.characteristicArr.length)],
      characteristicTwo: characterArrs.characteristicArr[randomNumber(characterArrs.characteristicArr.length)],
      race: characterArrs.raceArr[randomNumber(characterArrs.raceArr.length)],
      characterClass: characterArrs.classArr[randomNumber(characterArrs.classArr.length)],
      characterGoal: characterArrs.goalArr[randomNumber(characterArrs.goalArr.length)],
      characterMotivation: characterArrs.motivationArr[randomNumber(characterArrs.motivationArr.length)],
      characterGender: characterArrs.genderArr[randomNumber(characterArrs.genderArr.length)]
    }, function() {this.changePre()})

  }

  changePre() {
    switch (this.state.characteristicOne[0]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        console.log("Vowel")
        this.setState({
          asA: 'An '
        }, function() {this.removeDupe()});
        break;
      default:
        console.log("Not Vowel")
        this.removeDupe()
    }

  }

  removeDupe() {
    if (this.state.characteristicOne === this.state.characteristicTwo) {
      this.setState({
        characteristicTwo: characterArrs.characteristicArr[randomNumber(characterArrs.characteristicArr.length)]
      }, function() {this.createVillainStr()})
    } else {
      this.createVillainStr();
    }
  }

  createVillainStr() {
    this.setState({
      villainString: `This ${this.state.characterGender} ${this.state.race} ${this.state.characterClass} is ${this.state.characteristicOne} and ${this.state.characteristicTwo}. Driven by ${this.state.characterMotivation} they seek ${this.state.characterGoal}.`
    });
  }


  render() {
    return  (
      <div className="villain-text-box">
        <h1 className="villain-text">Super Evil Bad Dude</h1>
        <button onClick={this.createVillain}>Create Villain</button>
        <h2>{this.state.villainString}</h2>
      </div>
    );
  }
}

export default App;
