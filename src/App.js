import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { thisExpression } from '@babel/types';

class App extends Component {
    state = { loggedIn: false };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {thisExpression.renderContent()}
            </View>
        );
    }
}

export default App;