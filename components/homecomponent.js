import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text>Home Component</Text>
                </View>
            </ScrollView>
        );
    }
}

export default Home;