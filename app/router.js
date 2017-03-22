import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import animationsWindow from './components/animationsWindow/view';
import globalStyles from './styles';

const RouterComponent = () => {
    const { navigationBarStyle,
            titleStyle,
            fontFamilyBold } = globalStyles;

    return (
        <Router sceneStyle={{ paddingTop: 64 }}>
            <Scene
                key="main"
                navigationBarStyle={navigationBarStyle}
            >
                <Scene
                    key="animationsWindow"
                    component={animationsWindow}
                    title={'Animations'}
                    titleStyle={[titleStyle, fontFamilyBold]}
                    initial
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
