/*
    Custom List View components
    Create by Francisco on 16/01/2017
    Props:
        data => Object / Array
        renderRow => Function
        styles => array
*/

import React, { Component } from 'react';
import { View,
         ListView } from 'react-native';

// Project defaults
import styles from './CustomListViewStyles';

const { mainContainer } = styles;

class CustomListView extends Component {

    componentWillMount() {
        console.log('DATA', this.props.data);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(this.props.data);
    }

    render() {
        return (
            <View
                style={[mainContainer, this.props.styles]}
            >
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.props.renderRow}
                />
            </View>
        );
    }
}

export { CustomListView };
