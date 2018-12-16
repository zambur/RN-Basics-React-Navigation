import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, AsyncStorage, Dimensions, Image, ImageBackground, TextInput } from 'react-native';

class SignInScreen extends Component {

    signIn = async() => {
        await AsyncStorage.setItem('userToken', 'zach');

        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{ alignItems: 'center', width: Dimensions.get('window').width, height: 300}}
                    source={require('../assets/gray_circle_background.png')}
                >
                    <Text style={{ position: 'absolute', bottom: 30, fontWeight:'bold', fontSize: 34, color:'#7b63bd'}}> Sign In </Text>
                </ImageBackground>
                <TextInput
                    style={styles.textInput}
                    autoCorrect={false}
                    multiline={false}
                    placeholder="Email"
                    selectionColor='gray'
                />
                <TextInput
                    style={styles.textInput}
                    autoCorrect={false}
                    multiline={false}
                    placeholder="Password"
                    selectionColor='gray'
                />
                <TouchableHighlight
                    style={styles.signInButton}
                    underlayColor='rgba(255, 255, 255, 0.6)'
                    onPress={this.signIn}
                >
                    <Text style={ {color:'white', fontSize:16 }}> Login </Text>
                </TouchableHighlight>
                <Image
                    style={{ width: Dimensions.get('window').width, height: 150, position: 'absolute', bottom: 0}}
                    source={require('../assets/purple_circle_background.png')}
                />
            </View>
        );
    };
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    signInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        width: 250,
        height: 40,
        backgroundColor: '#7b63bd'
    },
    textInput: {
        borderRadius: 25,
        width: 250,
        height: 40,
        borderColor: '#7b63bd',
        borderWidth: 1,
        paddingLeft: 15,
        marginBottom: 10
    }
});
