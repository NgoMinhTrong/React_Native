import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class Thanks extends Component {
    static navigationOptions = {
        title: 'Cám ơn bạn đã đặt hàng',
    };
    render() {
        const dataBill = this.props.navigation.getParam('dataBill');
        const cart = this.props.navigation.getParam('cartBill');
        return (
            <View style={styles.container}>
                <ScrollView style={styles.cartScroll}>
                    <Text style={styles.cartProductText}>Thông tin giao hàng</Text>
                    <View style={styles.cartAddress}>
                        <View style={styles.cartCoverInput}>
                            <Text>
                                Tên khách hàng : {dataBill.name}
                            </Text>
                        </View>
                        <View style={styles.cartCoverInput}>
                            <Text>
                                Số điện thoại : {dataBill.phone}
                            </Text>
                        </View>
                        <View style={styles.cartCoverInput}>
                            <Text>
                                Địa chỉ : {dataBill.address}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cartReceipt}>
                        <Text style={styles.cartProductText}>Đơn hàng của bạn</Text>
                        {cart.products != null && cart.products.length > 0 ?
                            (cart.products.map((item, key) => {
                                return (
                                    <View key={key} style={styles.cartTag}>
                                        <View style={styles.cartCloseTag}>
                                        </View>
                                        <View style={styles.cartContent}>
                                            <View style={styles.cartImageView}>
                                                <Image style={styles.cartImage}
                                                    source={{ uri: item.image }} />
                                            </View>
                                            <View style={styles.cartInfo}>
                                                <Text
                                                    style={styles.cartName}>{item.name}</Text>
                                                <View style={styles.row}>
                                                    <Text
                                                        style={styles.cartPrice}>{item.price}</Text>
                                                    <Text>{item.quantity}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })) : <Text> Không có sản phẩm trong giỏ hàng</Text>}
                    </View>
                </ScrollView>
                <View style={styles.cartExtraInfo}>
                    <View style={styles.cartOrder}>
                        <TouchableOpacity style={styles.cartOrderTouch}
                            onPress={() => {
                                this.props.navigation.navigate('Home')
                            }}>
                            <Text style={styles.cartOrderText}>Quay về trang chủ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cartScroll: {
        backgroundColor: '#eee'
    },
    cartProductText: {
        fontSize: 14,
        textAlign: 'center',
        paddingVertical: 12,
        textTransform: 'uppercase',
    },
    /* Cart address */
    cartAddress: {
        padding: 15,
        backgroundColor: '#fff',
        marginTop: 10
    },
    cartCoverInput: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#eee',
        marginTop: 3,
        marginBottom: 3,
    },
    cartAddressIcon: {
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    cartInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#f1f1f1',
        color: '#424242',
    },
    /* Cart tag */
    cartTag: {
        position: 'relative',
        backgroundColor: '#fff',
        marginBottom: 10,
        marginHorizontal: 5,
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowColor: '#eee',
        shadowOpacity: 0.8
    },
    cartCloseTag: {
        position: 'absolute',
        right: '3%',
        top: '6%'
    },
    cartContent: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    cartImageView: {
        flex: 2,
    },
    cartImage: {
        resizeMode: 'cover',
        width: 80,
        height: 100
    },
    cartInfo: {
        flex: 4
    },
    cartName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartPrice: {
        color: '#B22222',
        fontSize: 16,
        fontWeight: 'bold'
    },
    /* Cart Extra Info */
    cartExtraInfo: {
        paddingTop: 8,
        paddingBottom: 15,
        borderTopColor: '#ddd',
        borderTopWidth: 1
    },
    cartProductInfo: {
        flexDirection: 'row',
        marginBottom: 15
    },
    cartProductRight: {
        flex: 4,
        marginHorizontal: 10
    },
    cartProductTitle: {
        fontStyle: 'italic',
        fontSize: 14
    },
    cartProductNum: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    cartQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    cartPriceTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cartSale: {
        flex: 2,
        marginHorizontal: 10
    },
    cartSaleInput: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
        paddingVertical: 3,
        paddingHorizontal: 10,
    },
    cartOrder: {
        marginHorizontal: 10,
        borderRadius: 4,
        shadowOpacity: 0.8,
        shadowColor: '#eee',
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 3
    },
    cartOrderText: {
        backgroundColor: '#f4511e',
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
})