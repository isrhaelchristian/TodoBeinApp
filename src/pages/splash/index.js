import React, {Component} from 'react';
import {Text, View, AsyncStorage} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

export default class Splash extends Component {
  async componentDidMount() {
    const token = await AsyncStorage.getItem('@TodoBeinApp:token');
    if (token !== null) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Main'})],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'SignIn'})],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    return (
      <View>
        <Text> loading... </Text>
      </View>
    );
  }
}
