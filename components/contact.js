import React, { Component } from 'react';
import {Text, ScrollView, FlatList,} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
import {Card, Button,Icon} from 'react-native-elements';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['mayorjohnson@icloud.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        });
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card  title="Contact Information" wrapperStyle={{ margin: 10 }}>
                        <Text>
                            19185 Conley
                         </Text>
                        <Text>
                            Detroit, MI 48234
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            U.S.A.
                        </Text>
                        <Text>
                            Phone: 1-313-658-5907
                        </Text>
                        <Text>
                            Email: mayorjohnson@icloud.com
                        </Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#222', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>  
            </ScrollView>
        );
    }
}

export default Contact;