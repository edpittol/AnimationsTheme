/*
Custom component created by Francisco on 9th January 2017
Props:
    fontFamily - Font to be rendered
        * Ionicons
        * Entypo
        * FontAwesome
        * Foundation
        * MaterialIcons
        * Octicons
        * Zocial
    name - Icon name
    size - Size of the Icon
    color - Color of the icon
    style - Styles for the icon
        Accepts: backgroundColor
                 borderWidth
                 borderColor
                 borderRadius
                 padding
                 margin
                 color
                 fontSize
    onPress - Function to be called after click

About: In order to get this component to work you will have to import the font file to Xcode.
Source - https://github.com/oblador/react-native-vector-icons
*/
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './fontelloConfig.json';

class CustomIcon extends Component {

    componentWillMount() {
        switch (this.props.fontFamily) {
            case 'Ionicons':
                this.Icon = Ionicons;
                break;
            case 'Entypo':
                this.Icon = Entypo;
                break;
            case 'FontAwesome':
                this.Icon = FontAwesome;
                break;
            case 'Foundation':
                this.Icon = Foundation;
                break;
            case 'MaterialIcons':
                this.Icon = MaterialIcons;
                break;
            case 'Octicons':
                this.Icon = Octicons;
                break;
            case 'Zocial':
                this.Icon = Zocial;
                break;
            case 'MaterialCommunityIcons':
                this.Icon = MaterialCommunityIcons;
                break;
            case 'Fontello':
                this.Icon = createIconSetFromFontello(fontelloConfig);
                break;
            default:
                this.Icon = Ionicons;
        }
    }

    render() {
        return (
            <this.Icon
                name={this.props.name}
                size={this.props.size || 40}
                color={this.props.color || '#000'}
                style={this.props.style}
            />
        );
    }
}

export { CustomIcon };
