import React, { Component } from 'react';
import Home from './homecomponent';
import {Text, ScrollView, FlatList} from 'react-native';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact'
    }
    render() {
        return (
            <ScrollView>
                <Text style={{margin: 10}}>Hello World</Text>
            </ScrollView>
        );
    }
}

export default Contact;