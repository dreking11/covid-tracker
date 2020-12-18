import React, { Component } from 'react';
import About from './about';
import Home from './homecomponent';
import Contact from './contact';
import Services from './services';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


const ServicesNavigator = createStackNavigator(
    {
        Services: { screen: Services}
    },
    {
        initialRouteName: 'Services',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#222'
            },
            headerTintColor: '#222',
            headerTitleStyle: {
                color: '#888'
            }
        }
    }
);



const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact}
    },
    {
        initialRouteName: 'Contact',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#222'
            },
            headerTintColor: '#222',
            headerTitleStyle: {
                color: '#888'
            }
        }
    }
);



const AboutNavigator = createStackNavigator(
    {
        About: { screen: About}
    },
    {
        initialRouteName: 'About',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#222'
            },
            headerTintColor: '#222',
            headerTitleStyle: {
                color: '#888'
            }
        }
    }
);



const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    }, 
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#222'
            },
            headerTintColor: '#222',
            headerTitleStyle: {
                color: '#888'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        About: { screen: AboutNavigator },
        Services: { screen: ServicesNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#222'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;