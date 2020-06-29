import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, TouchableOpacity,
	TextInput, Button, Keyboard
	, FlatList, Image,ListItem
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import card from './image/icon/card.png';
import bill from './image/icon/bill.png';
import fb from './image/icon/fb.png';
import alarm from './image/icon/alarm.png';
import help from './image/icon/help.png';
import logout from './image/icon/logout.png';
import setting from './image/icon/setting.png';

const list = [
	{
		id: 1,
		title: 'Đăng Nhập',
		icon: <Image source={card} style={{ width: 30, height: 30 }}/>
	},
	{
		id: 2,
		title: 'Đăng Ký',
		icon: <Image source={bill} style={{ width: 30, height: 30 }}/>
	},
	{
		id: 3,
		title: 'Thông Báo',
		icon: <Image source={alarm} style={{ width: 30, height: 30 }}/>
	},
	{
		id: 4,
		title: 'Cài Đặt',
		icon: <Image source={setting} style={{ width: 30, height: 30 }}/>
	},
];

export default class slideMenuScreen extends Component {

	render() {

		return (
			<View style={styles.container}>

				<View style={{ justifyContent: 'center', flex: 0.8 / 8, flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, width: '100%' }}>

					<View style={{ alignItems: 'center', flex: 1.5 / 2,flexDirection:'row' ,justifyContent:'flex-start'}}>
						
						<TouchableOpacity style={{ height: '100%', justifyContent: 'center',marginLeft:'5%',alignItems: 'center',flexDirection:'row' }}
							onPress={() => this.props.navigation.closeDrawer()}
						>
							 {/* <Image source={Logoicon} style={{height:30,width:30,marginRight:'5%'}}></Image>  */}
							<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgb(0, 102, 255)' }}>M<Text style={{color:'black'}}>i</Text>m<Text style={{color:'black'}}>i</Text>Game</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

		);
	}
}

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			// justifyContent: 'center',
			// alignItems: 'center',
			// backgroundColor: 'lightblue',
		},

	});

// AppRegistry.registerComponent('slideMenuScreen', () => slideMenuScreen);
