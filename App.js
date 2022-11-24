import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import ButtonInputPanel from './components/ButtonInputPanel';
import DiceView from './components/DiceView';
import { GameHandler } from './modules/GameHandler';

export default function App() {

  // Some of the things that I would normally be able to shove into an OO class in python 
  // is much more difficult in react, therefore, some things have been moved to useStates.

  const game = new GameHandler();
  const [gameState, setGameState] = useState('menu');
  const [currentDice, setCurrentDice] = useState([0, 0, 0, 0, 0, 0]);
  const [streak, setStreak] = useState(0);
  const [knightsVisible, showKnights] = useState(false);
  

  const handleStateChange = (reason, value) => {
    console.log("Recieved state request") 
    if (reason == 'start') {
      setCurrentDice(game.startGame())
      setGameState('game'); 
    } else if (reason == 'check') {
      if (game.checkAnswer(value, currentDice)) { 
        setGameState('win');
        setStreak(streak + 1);

        if (streak >= 5) { 
          showKnights(true);
        }
      } else { 
        setGameState('lose');
        setStreak(0)
        if (knightsVisible) { showKnights(false) }

      }
    }
  }

  return (
    <View style={styles.container}>
      <DiceView dice={currentDice} />

      <ButtonInputPanel startGame={() => handleStateChange('start')} gameState={gameState} onSubmitAnswer={(answer) => handleStateChange('check', answer)} />

      <Text style={styles.streak}>Your current streak is {streak}</Text>
      
      {knightsVisible && ( 
        <Text style={styles.knight}>You are a member of the knights of the rose! 🌹</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streak: { 
    margin: 25,
    fontWeight: 'bold',
  },
  knight: { 
    margin: 25,
    color: 'red',
    fontWeight: 'bold',
  }
});
