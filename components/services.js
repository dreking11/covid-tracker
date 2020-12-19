import React, { Component } from 'react';
import Home from './homecomponent';
import { Card, Icon } from 'react-native-elements';
import { View, Platform,Text, ScrollView, FlatList, } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class Services extends Component {
    static navigationOptions = {
        title: 'Services'
    }
    render() {
        return (
            <ScrollView>
                <Text style={{margin: 10}}>Hello World</Text>
            </ScrollView>
        );
    }
}

export default Services;