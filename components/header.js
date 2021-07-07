import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function Header(){

 const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    setCurrentDate(
      date + '/' + month 
    );
  }, []);

	return (
		<View style={styles.header}>
			<Text style={styles.title}> {currentDate}: To Do List</Text>
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