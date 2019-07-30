import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD3dDT28YMX6XgXdZfs1MTEKjNI68A0Bo8',
            authDomain: 'authentication-b9fce.firebaseapp.com',
            databaseURL: 'https://authentication-b9fce.firebaseio.com',
            projectId: 'authentication-b9fce',
            storageBucket: '',
            messagingSenderId: '325630541773',
            appId: '1:325630541773:web:7b54cd485c209020'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;