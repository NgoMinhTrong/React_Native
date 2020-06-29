import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, TouchableOpacity,
    TextInput, Button, Keyboard
    , FlatList, Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import Icon from '../icon/index';
import { ThemeProvider, Avatar, Badge, ListItem } from 'react-native-elements';
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
        title: 'Quản Lý Thẻ/Tài Khoản',
        icon: <Image source={card} style={{ width: 30, height: 30 }}/>
    },
    {
        id: 2,
        title: 'Tài Khoản Liên Kết',
        icon: <Image source={fb} style={{ width: 30, height: 30 }}/>
    },
    {
        id: 3,
        title: 'Hóa Đơn',
        icon: <Image source={bill} style={{ width: 30, height: 30 }}/>
    },
    {
        id: 4,
        title: 'Thông Báo',
        icon: <Image source={alarm} style={{ width: 30, height: 30 }}/>
    },
    {
        id: 5,
        title: 'Trợ Giúp',
        icon: <Image source={help} style={{ width: 30, height: 30 }}/>
    },
    {
        id: 6,
        title: 'Cài Đặt',
        icon: <Image source={setting} style={{ width: 30, height: 30 }}/>
    },
    {
        id: 7,
        title: 'Đăng Xuất',
        icon: <Image source={logout} style={{ width: 30, height: 30 }}/>
    },

];



export default class slideMenuScreen extends Component {
    login(item) {
        if (item.id == 7) {
            this.props.navigation.navigate('Drawer');
        } else if (item.id == 1) {
            // this.props.navigation.navigate('Router');
        }

    }

    renderItem = ({ item }) => (

        <ListItem

            title={item.title}
            leftIcon={item.icon}
            onPress={() => this.login(item)}
            bottomDivider
            chevron
            containerStyle={{}}
        />

    )

   
    render() {
        
        return (
            <View style={styles.container}>

                <View style={{ justifyContent: 'center', flex: 2 / 8, flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, width: '100%' }}>

                    <View style={{ alignItems: 'center', flex: 1.5 / 2, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('InforUser')}>
                            <View
                                style={{
                                    height: 80,
                                    width: 80,
                                    borderRadius: 50,
                                    borderColor: 'white',
                                    borderWidth: 3,
                                    overflow: 'hidden',

                                    marginLeft: 10
                                }}
                            >
                                <Image
                                    source={usericon}
                                    style={{ flex: 1, width: null, height: null }}
                                />
                            </View>{/*
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgb(0, 102, 255)', marginLeft: 10 }}>
                            Ngô Minh Trọng</Text>*/}
                            {/* </TouchableOpacity> */}
                        </TouchableOpacity>
                    </View>




                </View>


                <View style={{ flex: 7.2 / 8 }}>

                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                        style={{}}

                    />


                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

});


