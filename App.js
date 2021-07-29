import React, { useState , useEffect} from 'react';
import { StyleSheet, Alert, View, FlatList ,Keyboard,TouchableWithoutFeedback} from 'react-native';
import AddTodo from './Components/addTodo';
import Header from './Components/header';
import TodoItem from './Components/todoItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [todos, setTodos] = useState([]);
//////////////////////////////////////////////
  useEffect(()=>{
    getData();
  },[])
//////////////////////////////////////////////
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@todos', jsonValue)
      console.log("stored successfuly");
    } catch (e) {
      console.log("========================================");
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@todos')

      if(jsonValue != null){
        const parsedData = JSON.parse(jsonValue);
        setTodos(parsedData);
      }

    } catch(e) {
      console.log("fetch problem");
    }
  }
//////////////////////////////////////////////
  const deleteHandler = async (key) => {
    var newTodos;
    if(todos !== []){
      await setTodos(prevTodos => {
        newTodos = prevTodos.filter(todo => todo.key != key);
        return newTodos;
      });
      await storeData(newTodos);
    }
  };

  const submitHandler = async (text, setText) => {
      if (text === ''){
        Alert.alert('OOPS', "Todo can't be empty", [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);
      }else {
        var newTodos;
        setText('');
        setTodos(prevTodos => {
          newTodos =  [
            { text, key: Math.random().toString() },
            ...prevTodos
          ];
          return newTodos;
        })
        await storeData(newTodos);
        Keyboard.dismiss();
      }
    };
//////////////////////////////////////////////
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
                <TodoItem item={item} pressHandler={deleteHandler} />
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
    flex : 1,
    padding: 40,
    paddingTop: 20,
  },
  list: {
    flex : 1,
  },
});