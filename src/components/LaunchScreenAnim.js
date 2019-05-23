import React from 'react';
import LottieView from 'lottie-react-native';

const LaunchScreenAnim = ({ onAnimationFinish }) => (
  <LottieView
    autoPlay
    loop={false}
    source={require('../assets/splash-animation.json')}
    style={{ backgroundColor: 'blue' }}
    onAnimationFinish={onAnimationFinish}
    resizeMode="cover"
  />
);

export default LaunchScreenAnim;
