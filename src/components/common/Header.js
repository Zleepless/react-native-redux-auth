import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#24A500',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 200 },
        shadowOpacity: 0.2,
        elevation: 20,
        position: 'relative'
    },
    textStyle: {
        fontSize: 40
    }
};

export { Header };