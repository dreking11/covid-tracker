import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { FINISHED } from '../shared/finished';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/IMG_0603.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: FINISHED

       };
    }


    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.finished.filter(finished => finished.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;