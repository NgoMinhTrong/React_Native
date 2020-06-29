import React,{Component} from 'react';

import { View, Animated, Button, Text, AppRegistry, StyleSheet } from 'react-native';


export default class Test extends Component {
   
    state = {
        badgeScale: new Animated.Value(0),
        textValue: 1,
    }
    add() {
        this.state.badgeScale.setValue(0)
        const newTextValue=++this.state.textValue
        this.setState({textValue:newTextValue})
        Animated.timing(
            this.state.badgeScale,
            {
                toValue: 1,
                duration: 500
            }
        ).start();
    }
    render() {
        
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'red' }}>
                    <Animated.View style={{
                        width: 50, height: 50, borderRadius: 50, backgroundColor: 'blue'
                        , position: 'absolute', top: 0, left: 0, justifyContent:'center',
                        alignItems:'center', borderColor: 'green', borderWidth: 1 ,
                        transform:[{
                            scale:this.state.badgeScale
                        }]
                        }}>
    <Text style={{ backgroundColor: 'transparent', color: 'white',}}>{this.state.textValue}</Text>
                    </Animated.View>
                </View>
                <Button title='click' onPress={() => this.add()}/>

              

            </View>
        )
    }
}