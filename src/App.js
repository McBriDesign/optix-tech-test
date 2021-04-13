import React, { Component } from 'react';
// Components
import Card from './components/Card'
import Buttons from './components/Buttons'
// Data
import { deck } from './utils/Deck'

class App extends Component {

  // Setting State with Constructor

  constructor() {
    super();
    this.state = {
      cardsArray: deck,
      hand: [],
    };    
  };

  // Shuffles the Deck 

  shuffle = (array) => {

    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };

    this.setState({ cardsArray: array })
    return array;
  };

  // Deals one card from the Deck

  dealCard = () => {
    let cardsArray = this.state.cardsArray;
    const selectedCard = cardsArray[cardsArray.length - 1]
    const newCardsArray = cardsArray.filter(element => element.index !== selectedCard.index)
    this.setState({ cardsArray: newCardsArray })
    let cardsDealtArray = this.state.hand;
    cardsDealtArray.length < 52 &&
    cardsDealtArray.push(selectedCard);
    this.setState({ hand: cardsDealtArray })
  };

  // Resets the Deck - Reloads page to rebuild ordered Deck

  reset = () => { window.location.reload(false) }

  // Render function

  render() {

    const cardsArray = this.state.cardsArray;
    const dealtCardsArray = this.state.hand;

    return(

      <div>

        <div className="deck-container">
          {cardsArray && cardsArray.map((card, index) => {
            return (
              <div className="whole-card" key={index}>
                <Card suits={card.suit} card={card.value} color={card.color}/>
              </div>
            ); 
          })}
        </div>

        <Buttons state={this.state.cardsArray} shuffle={this.shuffle} dealCard={this.dealCard} reset={this.reset} />

        <div className="hand-container">
          {dealtCardsArray && dealtCardsArray.map((card, index) => {
            return (
              <div className="whole-card" key={index}>
                <Card suits={card.suit} card={card.value} color={card.color}/>
              </div>
            ); 
          })}
          
        </div>

      </div>

    )
  }
}

export default App;
