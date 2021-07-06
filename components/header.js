import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function Header(){
	return (
		<View style={styles.header}>
			<Text style={styles.title}> My To Do List</Text>
		</View>
		)
}

const styles = StyleSheet.create({
	header:{
		height: 90,
		paddingTop: 40,
		paddingBottom: 40,
		backgroundColor: 'pink',
		alignItems: 'center',
    	justifyContent: 'center',
	},
	title:{
		fontWeight: 'bold',
		color: 'white',
		fontSize: 40
	}
});