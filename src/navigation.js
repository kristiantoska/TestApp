import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import CardList from './screens/CardList';
import TransitionScreen from './screens/TransitionScreen';

const MainStack = createStackNavigator(
  {
    CardList: {
      screen: CardList,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity
            style={{ height: 30, width: 30, backgroundColor: 'red', marginLeft: 10 }}
            onPress={() => navigation.toggleDrawer(true)}
          />
        )
      })
    },
    TransitionScreen: {
      screen: TransitionScreen,
      navigationOptions: {
        header: null
      }
    },
    TransitionScreen2: {
      screen: TransitionScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    transitionConfig: (props, prevProps) => {
      return {
        containerStyle: { backgrounColor: 'transparent' },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;

          const width = layout.initWidth;

          const nextScreen = props && props.scene.route.routeName;
          const prevScreen = prevProps && prevProps.scene.route.routeName;

          if (nextScreen === 'TransitionScreen' || prevScreen === 'TransitionScreen') {
            const translateX = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [width, 0, 0]
            });

            const translateY = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [300, 0, 0]
            });

            return { transform: [{ translateX }, { translateY }] };
          } else {
            const translateX = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [width, 0, -width]
            });

            return { transform: [{ translateX }] };
          }
        }
      };
    }
  }
);

const AppNavigator = createDrawerNavigator(
  {
    Main: MainStack
  },
  {
    drawerType: 'slide'
  }
);

export default createAppContainer(AppNavigator);
