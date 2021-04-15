import React, { useState } from 'react';

// import React, { useState } from 'react';

// Components
import Card from './components/Card'
import Buttons from './components/Buttons'

// Data
import { deck } from './utils/Deck'

function App() {

  // Setting state using useState() Hook  


  const [initialDeck, setInitialDeck] = useState(deck)
  const [hand, setHand] = useState([])

  // Shuffles the Deck 

  const shuffle = () => {

    let array = [...initialDeck]

    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };

    setInitialDeck(array)
   
  };

  // Deals one card from the Deck

  const dealCard = () => {
    let cardsArray = initialDeck;
    const selectedCard = cardsArray[cardsArray.length - 1]
    const newCardsArray = cardsArray.filter(element => element.index !== selectedCard.index)
    setInitialDeck(newCardsArray)
    let cardsDealtArray = hand;
    cardsDealtArray.length < 52 &&
    cardsDealtArray.push(selectedCard);
    setHand(cardsDealtArray)
  };

  // Resets the Deck - Reloads page to rebuild ordered Deck

  const reset = () => { window.location.reload(false) }

  // Render function

    const dealtCardsArray = hand;


    return(

      <div>

        <div className="deck-container">
          {initialDeck && initialDeck.map((card, index) => {
            return (
              <div className="whole-card" key={index}>
                <Card suits={card.suit} card={card.value} color={card.color}/>
              </div>
            ); 
          })}
        </div>

        <Buttons state={initialDeck} handle={setInitialDeck} shuffle={shuffle} dealCard={dealCard} reset={reset} />

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

export default App;
