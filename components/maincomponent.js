import React, { Component } from 'react';
import About from './about';
import Home from './homecomponent';
import Contact from './contact';
import Services from './services';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';


const ServicesNavigator = createStackNavigator(
    {
        Services: { 
            screen: Services,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                name='list'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
            })
        }
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
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#222'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);



const AboutNavigator = createStackNavigator(
    {
        About: { screen: About}
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#222'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);



const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    }, 
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#222'
            },
            headerTintColor: '#222',
            headerTitleStyle: {
                color: '#888'
            },
            headerLeft: <Icon
            name='home'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
         style={styles.container}
         forceInset={{top: 'always', horizontal: 'never'}}
         >
         <View style={styles.drawerHeader}>
             <View style={{flex: 1}}>
                 <Image source={require('./images/IMG_5625.jpg')} style={styles.drawerImage} />
             </View>
             <View style={{flex: 2}}>
                 <Text style={styles.drawerHeaderText}>Nothing New</Text>
             </View>
         </View>
         <DrawerItems {...props} /> 
        </SafeAreaView>
    </ScrollView>
)


const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />    
                )
            }
        },
        About: { 
            screen: AboutNavigator, 
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />    
                )
            }
        },
        Services: { 
            screen: ServicesNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />    
                )
            }
         },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />    
                )
            }
         }
    },
    {
        drawerBackgroundColor: '#222',
        contentComponent: CustomDrawerContentComponent
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader:{
        backgroundColor:'#222',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;