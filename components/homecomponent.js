import React, { Component } from 'react';
import { View, Text,} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { FINISHED } from '../shared/finished';



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
                <RenderItem 
                item={this.state.finished.filter(finished => finished.featured)[1]}
                />
                <RenderItem 
                 item={this.state.finished.filter(finished => finished.featured)[3]}
                 />
            </ScrollView>
        );
    }
}

export default Home;