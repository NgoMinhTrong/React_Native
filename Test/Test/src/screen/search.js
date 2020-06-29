import { SearchBar, Slider, SocialIcon, Tooltip } from 'react-native-elements';
import React from 'react';
import { View, Text } from 'react-native';


export default class App extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (

            <View style={{ flex: 1, }}>
                <SearchBar
                    placeholder="Tìm Kiếm..."
                    onChangeText={this.updateSearch}
                    value={search}
                    color='red'
                    // showLoading='true'
                    underlineColorAndroid='transparent'
                />
                {/* --------- */}
                 <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}
                /> 
                {/* --------- */}


                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text>không có sản phẩm nào</Text>
                </View>
                 {/* --------- */}
                  {/*<Text>Value: {this.state.value}</Text> */}
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                /> 


                <Tooltip popover={
                    <View style={{ witdh: 500 }}>
                        <SearchBar
                            placeholder="Tìm Kiếm..."
                            onChangeText={this.updateSearch}
                            value={search}
                            color='red'
                            showLoading='true'
                            underlineColorAndroid='transparent'
                            style={{ witdh: 500 }}

                        />
                    </View>
                }>
                   
                </Tooltip>

                <Tooltip popover={
                    <View style={{ witdh: 500 }}>
                        <SearchBar
                            placeholder="Tìm Kiếm..."
                            onChangeText={this.updateSearch}
                            value={search}
                            color='red'
                            showLoading='true'
                            underlineColorAndroid='transparent'
                            style={{ witdh: 500 }}

                        />
                    </View>

                }>
                    
                </Tooltip> 
                {/* ----- */}
            </View>



        );
    }
}
