import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StatusBar, AsyncStorage, View, TouchableHighlight, Text, TextInput, Image} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

import api from '../../services/api';

import styles from './styles';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleEmailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignInPress = async () => {
    const {email, password} = this.state;

    if (email === 0 || password === 0) {
      this.setState(
        {error: 'Preencha usuário e senha para continuar!'},
        () => false,
      );
    } else {
      try {
        const response = await api.post('/sessions', {
          email,
          password,
        });

        await AsyncStorage.setItem('@TodoBeinApp:token', response.data.token);

        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'Main'})],
        });
        this.props.navigation.dispatch(resetAction);
      } catch (error) {
        this.setState({
          error: 'Houve um problema com o login, verifique suas credenciais!',
        });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image style={styles.logo}
          source={require('../../images/to-do-icon.png')}
          resizeMode="contain"
        />
        <TextInput style={styles.input}
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput style={styles.input}
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {this.state.error.length !== 0 && (
          <Text style={styles.errorMessage}>{this.state.error}</Text>
        )}
        <TouchableHighlight style={styles.button} onPress={this.handleSignInPress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.signUpLink} onPress={this.handleCreateAccountPress}>
          <Text style={styles.signUpLinkText}>Criar conta grátis</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
