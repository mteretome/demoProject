import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function AddTodo({ submitHandler }){
	const [text, setText] = useState('');
	const changeHandler = (val) => {
		setText(val);
	}

	return (
		<View>
		<View style={styles.container}>
		<TextInput
			style={styles.inputText}
			placeholder="write a to do..."
			onChangeText={changeHandler}

		/>
		{/*<TextInput
			style={styles.inputKey}
			placeholder="priority"
			onChangeText={changeHandler}

		/>*/}
		</View>
		<Button title='add to do' onPress={() => submitHandler(text)} color='pink'/>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	inputText: {
		marginBottom:10,
		paddingHorizontal:10,
		paddingVertical:10,
		flex: 2,
		borderBottomColor: 'pink',
		borderBottomWidth: 1,
		alignItems: 'center',
    	justifyContent: 'center'
	},
	inputKey: {
		marginBottom:10,
		paddingHorizontal:10,
		paddingVertical:10,
		flex:1,
		borderBottomColor: 'pink',
		borderBottomWidth: 1,
		alignItems: 'center',
    	justifyContent: 'center'
	}
});