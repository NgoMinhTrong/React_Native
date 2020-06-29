import React, { Component } from 'react';
import {
    View, TouchableOpacity, Alert,
    Easing, Text, Image, StyleSheet,
    TextInput, Animated, Button, SafeAreaView,
    TouchableNativeFeedback,
    Keyboard
} from 'react-native';
import { CheckBox, Badge, ThemeProvider, Input, SocialIcon } from 'react-native-elements';
//import logo from './properties/imgGame/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
const url = '192.168.183.1';

export default class login extends Component {
    // static navigationOptions = {
    //     title: 'User',
    // };
    constructor(props) {
        super(props)
        this.state = {
            time: new Value(0),
            animate: new Value(0),
            userEmail: '',
            userPassword: '',
            searchBarFocused: false,
            list: []
        }
    }

    login = () => {
        const { userEmail, userPassword } = this.state;
        if (userEmail == "" || userPassword == "") {
            Alert.alert('Thông Báo', "vui lòng nhập Email & PassWord đầy đủ", [
                { text: 'Ok', onPress: () => console.log('alert closed') }
            ]);

        }
        else {
           
            fetch('http://' + url + '/login.php', {
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    // lay data so sanh voi server
                    email: userEmail,
                    password: userPassword,
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson == "ok") {
                        
                        // dangw nhap thanh cong
                        Alert.alert('WellCome', 'Chào Mừng Bạn Đến với Chúng tôi', [{
                            text: 'Close', onPress: () => console.log('Close'), style: 'cancel'
                        }]);
                        this.props.navigation.navigate('DrawerUser', {
                            infoUser: this.state.list
                        });
                    } else {
                        Alert.alert('Thông Báo', 'Sai Tài Khoản Hoặc Mật Khẩu!', [{
                            text: 'Close', onPress: () => console.log('Close'), style: 'cancel'
                        }]);

                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        Keyboard.dismiss();
    }

    componentDidMount() {

        const b = Animated.timing(
            this.state.animate,
            {
                toValue: 2,
                duration: 1500,
                easing: Easing.liner,
            }
        ).start();
       
    }
    quen() {


        Alert.alert('Thông Báo', "Quên thì thôi chứ biết sao giờ :D", [
            { text: 'Close', onPress: () => console.log('alert closed') }
        ]);
    }

    render() {
        const marginTop = this.state.animate.interpolate({
            inputRange: [0, 2],
            outputRange: [-500, 0]
        });
        const opacity = this.state.animate.interpolate({
            inputRange: [0, 1, 1.5, 2],
            outputRange: [0, 0, 0, 1]
        });

        const marginBottom = this.state.animate.interpolate({
            inputRange: [0, 2],
            outputRange: [-800, 0]
        });
        return (
            <TouchableNativeFeedback>
                <SafeAreaView style={{ flex: 1 }} >
                    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>

                        <View style={styles.body}>
                            <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center', height: 50 }}>
                                <Animated.Image source={logo}
                                    style={{ height: '100%', width: '60%', marginBottom: 40, marginTop, opacity }}
                                >

                                </Animated.Image>

                            </View>
                            <View style={styles.textInput}>
                                <Input
                                    style={styles.textInput}
                                    placeholder="Tên đăng nhập \ Email"
                                    placeholderTextColor='#fff'
                                    autoCapitalize="none"
                                    onChangeText={userEmail => this.setState({ userEmail })}
                                    fontSize={17}
                                    leftIcon={
                                        <Icon
                                            name='user'
                                            size={20}
                                            color='white'
                                        />
                                    }
                                // returnKeyType='Next'

                                />
                            </View>
                            <View style={styles.textInput}>
                                <Input
                                    style={styles.textInput}
                                    placeholder='mật khẩu'
                                    placeholderTextColor='#fff'
                                    fontSize={17}
                                    // returnKeyType='go'
                                    secureTextEntry={true}
                                    onChangeText={userPassword => this.setState({ userPassword })}
                                    leftIcon={
                                        <Icon
                                            name='key'
                                            size={20}
                                            color='white'
                                        />
                                    }
                                />
                                <TouchableOpacity style={styles.quen} onPress={() => this.quen()}
                                >
                                    <Text style={{ color: '#00ff33' }}>Quên?</Text>
                                </TouchableOpacity>
                            </View>

                            <Animated.View style={{ marginBottom, opacity }}>
                                <TouchableOpacity style={styles.signInContainer}
                                    onPress={this.login}>
                                    <Text style={styles.signInTextStyle}>Đăng Nhập</Text>
                                </TouchableOpacity>


                            </Animated.View>
                        </View>

                    </View>
                </SafeAreaView>
            </TouchableNativeFeedback>

        );
    }
}

const styles = StyleSheet.create({
    //#0D8FE9

    headerTitle: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontSize: 20
    },
    backIconStyle: {
        width: 30,
        height: 30
    },
    body: {
        flex: 10,
        backgroundColor: '#3A5fcd',
        justifyContent: 'center'
    },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: 'transparent',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 2,



    },
    signInTextStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontWeight: '600',
        paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: 'rgb(236,135,14)',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },

    signInStyle: {
        flex: 3,
        marginTop: 50,
        fontSize: 18
    },
    quen: {
        position: 'absolute',
        left: '88%'
        , top: '19%',
    }
});
