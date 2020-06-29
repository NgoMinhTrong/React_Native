import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, Button, TextInput,
	Animated, TouchableOpacity,
	Easing, Keyboard,
	Alert
} from 'react-native';
const url='192.168.183.1';

export default class register extends Component {
	// static navigationOptions = ({ navigation }) => ({
	// 	title: 'Register',
	// 	headerRight:
	// 		<TouchableOpacity
	// 			onPress={() => navigation.navigate('Home')}
	// 			style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
	// 			<Text style={{ color: '#ffffff' }}>Home</Text>
	// 		</TouchableOpacity>

	// });

	constructor(props) {
		super(props)
		this.state = {
			displayName:'',
			userName: '',
			userEmail: '',
			userPassword: '',
			time: new Animated.Value(0),
			searchBarFocused: false
		}
	}

	signup = () => {
		//alert('ok'); 
		const { displayName } = this.state;
		const { userName } = this.state;
		const { userEmail } = this.state;
		const { userPassword } = this.state;

		if (userName == '' || userPassword == '' || userEmail == ''||displayName=='') {
			Alert.alert('Thông Báo', "Vui Lòng Nhập Đầy Đủ Thông Tin", [
				{ text: 'Close', onPress: () => console.log('alert closed') }
			]);
		} else if (userName.length < 8) {
				Alert.alert('Thông Báo', "Tên Tài Khoản Phải Trên 8 Ký Tự", [
					{ text: 'Close', onPress: () => console.log('alert closed') }
				]);
			} else if (userPassword.length < 8) {
				Alert.alert('Thông Báo', "Mật Khẩu Phải Trên 8 Ký Tự", [
					{ text: 'Close', onPress: () => console.log('alert closed') }
				]);
			} else {

				fetch('http://'+url+'/register.php', {
					method: 'post',
					header: {
						'Accept': 'application/json',
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						name: userName,
						email: userEmail,
						password: userPassword,
						displayName:displayName,
					})

				})
					.then((response) => response.json())
					.then((responseJson) => {
						// alert(responseJson);
						Alert.alert(responseJson, 'Vui Lòng Chuyển Đến Đăng Nhập', [
							{
								text: 'OK', onPress: () => {
									this.props.navigation.navigate('User');

								}
								
							},{
								text: 'Cancel', onPress: () => console.log('hủy bỏ'), style: 'cancel' 
							}
						])

					})
					.catch((error) => {
						console.error(error);
					});

			}
	}
	componentDidMount() {
		// Animated.timing(
		// 	this.state.time,
		// 	{
		// 		toValue: 2,
		// 		duration: 1500,
		// 		easing: Easing.ease
		// 	}
		// ).start();
		this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
		this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
		this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
	}

	keyboardDidShow = () => {
		this.setState({ searchBarFocused: true })
	}

	keyboardWillShow = () => {
		this.setState({ searchBarFocused: true })
	}

	keyboardWillHide = () => {
		this.setState({ searchBarFocused: false })
	}

	render() {
		const opacity = this.state.time.interpolate({
			inputRange: [0, 1, 1.5, 2],
			outputRange: [0, 0, 0, 1]
		});
		const marginBottom = this.state.time.interpolate({
			inputRange: [0, 2],
			outputRange: [-800, 0]
		});

		return (
			<View style={styles.container}>
				<Animated.View style={{}}>
					<Text style={{
						color: '#fff',
						fontSize: 30,
						fontWeight: 'bold',
						fontStyle: 'normal',
						borderBottomWidth: 2, borderBottomColor: 'red'
					}}>Đăng Ký</Text>
				</Animated.View>
				<TextInput
					placeholder="Tên Hiện Thị"
					placeholderTextColor='#fff'
					style={styles.txtinput}
					underlineColorAndroid="transparent"
					onChangeText={displayName => this.setState({ displayName })}

				/>
				<TextInput
					placeholder="Tên Tài Khoản"
					placeholderTextColor='#fff'
					style={styles.txtinput}
					underlineColorAndroid="transparent"
					onChangeText={userName => this.setState({ userName })}

				/>

				<TextInput
					placeholder="Email"
					placeholderTextColor='#fff'
					style={styles.txtinput}
					underlineColorAndroid="transparent"
					onChangeText={userEmail => this.setState({ userEmail })}
				/>

				<TextInput
					placeholder="Mật Khẩu"
					placeholderTextColor='#fff'
					style={styles.txtinput}
					underlineColorAndroid="transparent"
					secureTextEntry={true}
					onChangeText={userPassword => this.setState({ userPassword })}
				/>
				{/* marginBottom */}
				<Animated.View style={{}}>
					<TouchableOpacity
						onPress={this.signup}
						style={{
							width: 250, padding: 10, backgroundColor: 'rgb(236,135,14)',
							alignItems: 'center', borderRadius: 20, marginTop: 20
						}}>
						<Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Tiếp Tục</Text>
					</TouchableOpacity>

				</Animated.View>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3A5fcd',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	txtinput: {
		width: 300,
		margin: 10,
		borderBottomColor: "#333",
		borderBottomWidth: 1,


	}
});

// AppRegistry.registerComponent('register', () => register);
