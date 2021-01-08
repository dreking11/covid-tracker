import React, { Component } from 'react';
import {Text, ScrollView, FlatList, Icon} from 'react-native';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class About extends Component {
    static navigationOptions = {
        title: 'About'
    }
    render() {
        return (
            <ScrollView>
                <Text style={{margin: 10}}>Hello World</Text>
            </ScrollView>
        );
    }
}

export default About;