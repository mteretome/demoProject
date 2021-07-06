import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }){
	return (
		<TouchableOpacity onPress={()=>pressHandler(item.key)}>
		<View style={styles.item}>
			<AntDesign name="delete" size={16} color="pink" />
			<Text style={styles.itemText}>{item.text}</Text>
		</View>
		</TouchableOpacity>
		
	)
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		margin: 16,
		borderColor: 'pink',
		borderWidth: 1,
		borderStyle: 'dashed',
    	borderRadius: 10,
    	flexDirection: 'row'
	},
	itemText: {
		marginLeft: 10,
	}

});