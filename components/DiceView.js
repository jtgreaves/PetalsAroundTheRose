import { StyleSheet, Image, View } from 'react-native';
import React from 'react';

export default class DiceView extends React.Component {
	constructor(props) {
		super(props);

		this.styles = StyleSheet.create({
			diceView: {
				width: 350,
				height: 250,
				flexDirection: 'row',
				flexWrap: 'wrap',
				backgroundColor: '#ff0',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 50,
				marginBottom: 25
			},

			die: {
				width: 64,
				height: 64,
				margin: 5
			},
		})

		this.diceAssets = {
			0: require('../assets/dice_empty.png'),
			1: require('../assets/dice1.png'),
			2: require('../assets/dice2.png'),
			3: require('../assets/dice3.png'),
			4: require('../assets/dice4.png'),
			5: require('../assets/dice5.png'),
			6: require('../assets/dice6.png')
		}


	}

	render() {
		return (
			<View style={this.styles.diceView}>
				{this.props.dice.map((die, index) => {
					return (
						<Image
							key={index}
							style={this.styles.die}
							source={this.diceAssets[die]}
						/>
					)
				})}
			</View>
		)
	}
}
