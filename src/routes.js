import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation';

import React from 'react';

import {TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Splash from './pages/splash';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import ToDo from './pages/main/toDo';
import InProgress from './pages/main/inProgress';
import Done from './pages/main/done';

const TodoRoutes = createMaterialTopTabNavigator(
  {
    ToDo,
    InProgress,
    Done,
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
      tabStyle: {
        height: 40,
      },
      style: {
        backgroundColor: '#f5f5f5',
      },
      labelStyle: {
        color: '#999',
        fontWeight: 'bold',
        fontSize: 14,
      },
      indicatorStyle: {
        backgroundColor: '#999',
      },
      upperCaseLabel: false,
    },
  },
);

const Routes = createStackNavigator(
  {
    Splash,
    SignIn,
    SignUp,
    Main: {
      screen: createAppContainer(TodoRoutes),
      navigationOptions: ({ navigation }) => ({
        title: 'MY TASKS',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#999',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
        headerRight: (
          <TouchableOpacity
            style={{paddingRight: 15}}
            onPress={() => {
              AsyncStorage.removeItem('@TodoBeinApp:token');
              const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'SignIn'})],
              });
              navigation.dispatch(resetAction);
            }}>
            <Icon name="logout" size={20} />
          </TouchableOpacity>
        ),
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

export default createAppContainer(Routes);
