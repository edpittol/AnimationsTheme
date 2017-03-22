import React, { Component } from 'react';
import { View,
         Text,
         Animated,
         TouchableOpacity } from 'react-native';
import Animation from 'lottie-react-native';
import { connect } from 'react-redux';

// Project defaults
import styles from './styles';
import globalStyles from '~/styles';

const { viewStyle,
        animationStyle,
        titleStyle } = styles;
const { fontFamilyBold } = globalStyles;

class AnimationRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
        };
        this.startAnimation = this.startAnimation.bind(this);
    }

    startAnimation() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: this.props.duration,
        // }).start();
        // Make infinite animations
        }).start(() => {
            // Recursive call to keep the animations going
            this.setState({ progress: new Animated.Value(0) });
            this.startAnimation();
        });
    }

    render() {
        return (
            <TouchableOpacity
                style={viewStyle}
                onPress={this.startAnimation}
            >
                <Animation
                    style={animationStyle}
                    source={this.props.animation}
                    progress={this.state.progress}
                />
                <Text
                    style={[fontFamilyBold, titleStyle]}
                >
                    {this.props.animation.name || 'No name'}
                </Text>
            </TouchableOpacity>
        );
    }
}


const mapStateToProps = (state) => {
    const { duration } = state.animations;

    return { duration };
};

export default connect(mapStateToProps)(AnimationRow);
