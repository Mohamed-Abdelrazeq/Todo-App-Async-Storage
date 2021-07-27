import React , {useState} from 'react';
import {StyleSheet , View , TextInput ,Button} from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [ text , setText ] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                placeholder="New Task"
                onChangeText={changeHandler}
                style={Styles.input}
            />
            <Button color='coral' onPress={() => submitHandler(text, setText)} title='add todo' />
        </View>
    );
}

const Styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})