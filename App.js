import { StatusBar } from 'expo-status-bar';
import React, { useState,} from 'react';
import { StyleSheet, Text, View, Button,  TextInput, FlatList, Alert} from 'react-native';
import Header from './components/header';
import ToDoItem from './components/ToDoItem';
import AddTodo from './components/addTodo';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [todos, setTodos] = useState([
      {text:'write a todo', key: '1'},
      {text:'write another todo', key: '2'}
    ]);

 const pressHandler = (key) => {
  setTodos((prevItems)=>{
    return prevItems.filter(item => item.key!=key);
  });
 }

 const submitHandler = (text) => {
  if(text.length>3){
    setTodos((prevItems)=> {
    return [
      {text: text, key: Math.random().toString() },...prevItems
    ]
  });
  } else {
    Alert.alert('OOPS!','Todos must be over 3 characters long',[
    {text: 'Understood', onPress: ()=> console.log('alert closed')}
    ]);
  }
  
 }


  return (
  
   <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      
      <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({item})=>(
          <ToDoItem item={item} pressHandler={pressHandler}/>
          )}
      />

      </View>
      <AddTodo submitHandler ={submitHandler} />
    </View>
   </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
  },
  content: {
    padding: 40,
    flex:1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
