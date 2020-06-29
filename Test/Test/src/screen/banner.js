import React, { Component } from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pointer: 0,
            listImage: [
                {
                    url: 'http://192.168.183.1:8080/src/image/banner5.jpg'
                },
                {
                    url: 'http://192.168.183.1:8080/src/image/banner4.jpg'
                }
            ],
        }
    }
    changeImage() {
        let pointer = this.state.pointer;
        pointer = pointer + 1;
        if (pointer == this.state.listImage.length) {
            pointer = 0;
        }
        this.setState({
            pointer: pointer
        });
    }
    componentDidMount() {
        this._interval = setInterval(() => {
            this.changeImage();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Image
                        source={{ uri: this.state.listImage[this.state.pointer].url }}
                        style={{
                            height: 200,
                        }}>
                    </Image>
                </TouchableOpacity>
            </View >
        );
    }
}