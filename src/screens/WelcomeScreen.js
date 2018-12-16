import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#7b63bd', '#7b63bd', '#7b63bd', '#927ad4', '#a790e7', '#c2adfd']} style={styles.linearGradient}>
                    <Image
                        style={{ width: 300, height: 300}}
                        source={require('../assets/logo_white.png')}
                    />
                    <TouchableHighlight
                        style={styles.signInButton}
                        underlayColor='rgba(255, 255, 255, 0.6)'
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    >
                        <Text style={ {color:'#7b63bd', fontSize:16 }}> Login </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.signUpButton}
                        underlayColor='rgba(0, 0, 0, 0)'
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        <Text style={ {color:'white', fontSize:14 }}> Create an account </Text>
                    </TouchableHighlight>
                </LinearGradient>
            </View>
        );
    };
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    signInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 300,
        borderRadius: 25,
        width: 250,
        height: 40,
        backgroundColor: 'white'
    },
    signUpButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 40
    }
});
