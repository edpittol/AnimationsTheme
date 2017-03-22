import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View,
         Text,
         StatusBar,
         Slider } from 'react-native';

// Actions
import { animationUpdate } from '~/entities/animations/actions';

// Styles
import globalStyles from '~/styles';
const { fontFamilyBold } = globalStyles;

// Custom components
import { CustomListView } from '../common';
import AnimationRow from './AnimationRow/view';
import { Animations } from './animations';

class AnimationsWindow extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(value) {
        this.props.animationUpdate({
            prop: 'duration',
            value: value
        })
    }

    renderRow(data) {
        return (
            <AnimationRow
                animation={data}
            />
        );
    }

    renderContent() {
        console.log('animations', Animations);
        return (
            <CustomListView
                data={Animations}
                renderRow={this.renderRow}
                styles={{ marginBottom: 65 }}
            />
        );
    }

    render() {
        return (
            <View
                style={{ flex: 1 }}
            >
                <StatusBar barStyle={'light-content'} />
                {this.renderContent()}
                <View
                    style={{ position: 'absolute', bottom: 0, paddingBottom: 10,  width: '100%', shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 0, }}
                >
                    <Slider
                        value={5000}
                        step={200}
                        minimumValue={3000}
                        maximumValue={7000}
                        onValueChange={this.onValueChange}
                        style={{ marginLeft: 10, marginRight: 10, paddingTop: 5 }}
                    />
                    <Text style={[fontFamilyBold, { alignSelf: 'center', fontSize: 20 }]}>
                        {this.props.duration}
                    </Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { duration } = state.animations;

    return { duration };
};

export default connect(mapStateToProps, { animationUpdate })(AnimationsWindow);
