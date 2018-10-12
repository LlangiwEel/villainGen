import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const raceArr = ["dragonborn", "vampire", "goblin", "human", "dwarf", "elf", "half-elf", "half-orc", "gnoll", "ghost", "halfling"];
const classArr = ["barbarian", "bard", "druid", "ranger", "monk", "rogue", "sorcerer", "wizard"];
const goalArr = ["immortality", "love", "power", "recognition", "vengeance", "wealth"];
const motivationArr = ["achievement", "coercion", "conviction", "discord", "envy", "friendship", "guilt", "hate", "lust", "madness", "order"];
const characteristicArr = ["arrogant", "avaricious", "cruel", "duplicitous", "envious", "gluttonous", "intolerant", "lascivious", "mad", "logical", "manipulative", "direct", "nihilistic", "traditional", "obsessive", "capricious", "slothful", "organised", "vain", "vindictive"];
const genderArr = ["male", "female","male", "female","male", "female", "non-binary"];

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
      characteristicOne: characteristicArr[randomNumber(characteristicArr.length)],
      characteristicTwo: characteristicArr[randomNumber(characteristicArr.length)],
      race: raceArr[randomNumber(raceArr.length)],
      characterClass: classArr[randomNumber(classArr.length)],
      characterGoal: goalArr[randomNumber(goalArr.length)],
      characterMotivation: motivationArr[randomNumber(motivationArr.length)],
      characterGender: genderArr[randomNumber(genderArr.length)],
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
      characteristicOne: characteristicArr[randomNumber(characteristicArr.length)],
      characteristicTwo: characteristicArr[randomNumber(characteristicArr.length)],
      race: raceArr[randomNumber(raceArr.length)],
      characterClass: classArr[randomNumber(classArr.length)],
      characterGoal: goalArr[randomNumber(goalArr.length)],
      characterMotivation: motivationArr[randomNumber(motivationArr.length)],
      characterGender: genderArr[randomNumber(genderArr.length)]
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
        characteristicTwo: characteristicArr[randomNumber(characteristicArr.length)]
      }, function() {this.createVillainStr()})
    } else {
      this.createVillainStr();
    }
  }

  createVillainStr() {



    this.setState({
      villainString: `${this.state.asA} ${this.state.characteristicOne}, ${this.state.characteristicTwo}, ${this.state.characterGender} ${this.state.characterClass} motivated by ${this.state.characterMotivation} seeks ${this.state.characterGoal}`
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
