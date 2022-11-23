import React from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';

export default class ButtonInputPanel extends React.Component {
	constructor(props) {
		super(props);
		this.userAnswer = '';
		this.styles = StyleSheet.create({
			input: {
				width: 200,
				height: 40,
				margin: 12,
				borderWidth: 1,
				padding: 10,
				textAlign: 'center'
			  },
			  correctText: { 
				color: 'green',
				margin: 25,
			},
			incorrectText: {
				color: 'red',
				margin: 25,
			  },
		})

	}

	render() {
		return (
	
			// If the game is not playing, do not show the input but keep keyboard open
			<View style={this.styles.buttonInputPanel}>
				{this.props.gameState === 'menu' && (
					// <Button title="Start Game" onPress={this.props.startGame} />
					<Button title="Start Game" onPress={() => this.props.startGame('start')} />
				)}
				{this.props.gameState === 'game' && (
					<View> 
						<Button title="Submit Answer" onPress={() => this.props.onSubmitAnswer(this.userAnswer)} />
					
						<TextInput
						style={this.styles.input}
						placeholder="Enter your answer.."
						keyboardType='numeric'
						maxLength={2}
						onChange={e => this.userAnswer = e.nativeEvent.text}
						autoFocus={true}
						/>
					</View>
				)}
				{this.props.gameState === 'win' && (
					<View> 
						<Button title="Play Again" onPress={() => this.props.startGame('start')} />
					
						<Text style={this.styles.correctText}> You got the correct answer! </Text>
					</View>
				)}
				{this.props.gameState === 'lose' && (
					<View> 
						<Button title="Play Again" onPress={() => this.props.startGame('start')} />
					
						<Text style={this.styles.incorrectText}> Incorrect... </Text>

					</View>
				)}
			</View>
		)}	  	
}

