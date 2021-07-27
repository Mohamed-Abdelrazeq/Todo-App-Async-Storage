import React, { useState } from 'react';
import { StyleSheet, Alert, View, FlatList ,Keyboard,TouchableWithoutFeedback} from 'react-native';
import AddTodo from './Components/addTodo';
import Header from './Components/header';
import TodoItem from './Components/todoItem';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
    { text: 'finish the app', key: '4' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text, setText) => {
      
      if (text === ''){
        Alert.alert('OOPS', "Todo can't be empty", [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);
      }else {
        setText('');
        setTodos(prevTodos => {
          return [
            { text, key: Math.random().toString() },
            ...prevTodos
          ];
        })
        Keyboard.dismiss();
      }
    };

  return (
    <TouchableWithoutFeedback
      onPress = {()=>{
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    paddingTop: 20,
  },
  list: {
    
  },
});