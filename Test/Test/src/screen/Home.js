import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Banner from './banner';
import imgcart from './image/icon/cart0.png';
import imghome from './image/icon/home0.png';
import imgsearch from './image/icon/search0.png';


export default class Home extends Component {
    // static navigationOptions = {
    //     title: '            THUÊ XE MÁY & DU LỊCH GIÁ RẼ - UY TÍNH',
    //  header:null,
    //  headerStyle: {
    //    backgroundColor: '#f4511e',
      
    //  },
    //  headerTintColor: 'red',
    //  headerTitleStyle: {
    //    fontWeight: 'bold',
       
    //  },
   
    // }

    constructor(props) {
        super(props);
        this.state = {
            listProduct: []
         };
    }

    //------------
    async buy(book) {
        Alert.alert('Thông Báo', 'Thêm Sản Phẩm Vào Giỏ Hàng?', [
            {
                text: 'Có', onPress: () => {
                    this.state.badgeScale.setValue(0)
                    const newTextValue = ++this.state.textValue
                    this.setState({ textValue: newTextValue })
                    Animated.timing(
                        this.state.badgeScale,
                        {
                            toValue: 1,
                            duration: 500
                        }
                    ).start();
                    if (book == '') {
                    } else {
                        fetch('http://'+url+'/addcartview.php', {
                            method: 'post',
                            header: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                name: book.name,
                                image: book.image,
                                price: book.price,
                                description: book.description,
                            })
                        })
                            .then((response) => response.json())
                            .then((responseJson) => {
                                //alert(responseJson);
                                this.loadcartview();
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    }
                }
            },
            { text: 'Không', onPress: () => console.log('hủy bỏ'), style: 'cancel' }
        ])



        // this.props.navigation.navigate('Buy', { bookitem: '' }) ;
    }
    PureComponent() {
        this.loadcartview();
       
    }
    loadcartview() {
        fetch('http://'+url+'/cartview/countcartview.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    count: responseJson,
                });
            });


    }
    //-----------------------
    componentDidMount() {
        fetch('http://192.168.183.1:8080/listbooks.php')
            .then((response) => response.json())
            .then((responseJson) => {
                 this.setState({
                       listProduct: responseJson,
                 });
             });
        }
//-----------------------------------------------------------------
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 0.8 / 5, justifyContent: "center", alignItems: "center" }}
                        onPress={() => { this.props.navigation.openDrawer() }}>
                        <Image source={imghome}></Image>
                    </TouchableOpacity>
                    <View style={{ flex: 3.2 / 5, flexDirection: 'row' }} >
                        <View style={{ flex: 9 / 10 }} >
                            <TouchableOpacity style={[styles.input, { justifyContent: 'center' }]} 
                            onPress={()=>{this.props.navigation.navigate('Search') }}>
                                <Text>Tìm Kiếm...</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ flex: 2 / 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} >
                        <Image source={imgsearch}></Image>
                        </TouchableOpacity>
                    </View>
                   <TouchableOpacity style={{ flex: 0.8 / 5, justifyContent: "center", alignItems: "center" }}
                        onPress={() => { this.props.navigation.navigate('Buy')}}>
                        <Image source={imgcart}></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.banner}>
                    <Banner/>
                </View>
                <View style={styles.listProduct}>
                    <FlatList
                        data={this.state.listProduct}
                        renderItem={({ item }) => (
                            <View style={styles.productView} >
                                <TouchableOpacity style={styles.productTouch}>
                                    <Image source={{ uri: item.image }} style={styles.productImage} />
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productPrice}>{item.price}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.detailTouch}
                                    onPress={() => { this.props.navigation.navigate('Detail', {product : item}) }}
                                >
                                    <Text style={styles.chitiet}>Chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        numColumns={3}
                    />
                </View>
            </View>
        )
    }
}
// Định dạng styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1 / 10,
        backgroundColor: '#0D8FE9',
        flexDirection:'row'
    },
    banner: {
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    chitiet: {
        backgroundColor: '#CCCC99',
    },
    listProduct: {
        flex: 7 / 8,
    },
    /* List product */
    listProduct: {
        flex: 1
    },
    productView: {
        flex: 1 / 3,
        borderRadius: 2,
        margin: 4,
        backgroundColor: '#66CCCC',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    productTouch: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: "100%",
        height: 120,
        marginTop: 5,
        marginBottom: 5,
    },
    productName: {
        fontSize: 15,
    },
    productPrice: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8
    },
    detailTouch: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#f9f9f9'
    },
    input: {
        flex: 9 / 10,
        height: '50%',
        backgroundColor: 'rgba(255,255,255,0.4)',
        width: '96%',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 5,
        marginLeft: 5,
    },
})