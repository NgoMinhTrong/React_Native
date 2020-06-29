import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imgback from './image/icon/back.png';
export default class Detail extends Component {
    addToCart(product) {
        let productAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        }
        this.props.navigation.navigate('Cart', {
            product: productAdd
        });
    }
    render() {
        const product = this.props.navigation.getParam('product');
        return (
            <View style={styles.container}>
                
                <ScrollView style={styles.productDetail}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' ,}}>
                        <TouchableOpacity style={{ width: 50, height: 30, flexDirection: 'row' }} 
                            onPress={() => { this.props.navigation.navigate('Home')}}>
                        <Image source={imgback} style={{ width: 30, height: 30 }}/>
                        </TouchableOpacity>
                        <View style={{ flex: 1 / 3 }}></View>
                        <Text style={{ flex: 5 / 3, fontSize: 25, fontWeight: 'bold' }}>THÔNG TIN SẢN PHẨM</Text>
                        <View style={{ flex: 1 / 3 }}></View>
                        <View></View>
                    </View>
                
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: product.image }} style={styles.productDetailImg} />
                    </View>
                    <View style={styles.productDetailContent}>
                        <Text style={styles.productDetailName}>{product.name}</Text>
                        <Text style={styles.productDetailPrice}>{product.price} đ</Text>
                    </View>
                    <View style={styles.productDetailContent}>
                        <Text style={{ color: '#333', fontSize: 16, fontWeight: 'bold' }}>Giới Thiệu Sản Phẩm</Text>
                        <Text style={styles.productDetailInfo}>
                            {product.description}
                        </Text>
                    </View>
                </ScrollView>
                <View style={styles.bottomOption}>
                    <TouchableOpacity style={styles.cartTouch}
                        onPress={
                            () => {
                                this.addToCart(product)
                            }
                        }
                    >
                        <Text style={styles.cartText}>Thêm Vào Giỏ Hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productDetail: {
        marginTop: 1,
        backgroundColor: '#66CCFF'
    },
    productDetailImg: {
        resizeMode: 'cover',
        width: 600,
        height: 400,
    },
    productDetailContent: {
        marginVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        
    },
    productDetailName: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    productDetailPrice: {
        fontSize: 18,
        color: 'red'
    },
    productDetailInfo: {
        marginVertical: 10,
        fontSize: 15
    },
    /* Cart */
    bottomOption: {
        height: 50,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    cartTouch: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4511e'
    },
    cartText: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
    }
});