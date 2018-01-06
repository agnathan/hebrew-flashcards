// Import React
import React, { Component } from 'react';

// Import Firebase Database Libraries
import firebase from 'firebase/app';
import 'firebase/database';

import { Button, Typography } from 'material-ui'
import AddIcon from 'material-ui-icons/Add';

import { deepOrange } from 'material-ui/colors';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { brown, green } from 'material-ui/colors';

import './App.css';
import Card from './Components/Card/Card';
import DrawButton from './Components/DrawButton/DrawButton'
import AppMenubar from './Components/AppMenubar/AppMenubar'
// import { DB_CONFIG } from './Config/Firebase';

// import logo from './logo.svg';

const config = {
  apiKey: "AIzaSyD-pRW8KMDLKwsv63wB9YBpALq_EK-910E",
  authDomain: "hebrewquiz-709e4.firebaseapp.com",
  databaseURL: "https://hebrewquiz-709e4.firebaseio.com",
  projectId: "hebrewquiz-709e4",
  storageBucket: "hebrewquiz-709e4.appspot.com",
  messagingSenderId: "1095423357929"
}

const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

// const theme = createMuiTheme();

class App extends Component {

  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(config);
    this.database = this.app.database().ref().child('cards');

    this.updateCard = this.updateCard.bind(this)

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      // console.log(snap.val())
      currentCards.push({
        id: snap.key,
        english: snap.val().english,
        hebrew: snap.val().hebrew,
        comment: snap.val().comment
      })

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
    })
  }

  getRandomCard(currentCards) {
    var card = currentCards[
      Math.floor(Math.random() * currentCards.length)
    ];;
    return(card)
  }

  updateCard() {
    const currentCards = this.state.cards
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }


  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppMenubar onClick={this.updateCard}/>
          <div className="cardRow">
            <Card
              english={this.state.currentCard.english}
              hebrew={this.state.currentCard.hebrew}
              comment={this.state.currentCard.comment}
            />
          </div>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
