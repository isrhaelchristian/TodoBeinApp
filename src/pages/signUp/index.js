import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import api from '../../services/api';
import {StackActions, NavigationActions} from 'react-navigation';

import styles from './styles';

export default class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      error: '',
      success: '',
    };
  }

  handleUsernameChange = username => {
    this.setState({username});
  };

  handleEmailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  handleBackToLoginPress = () => {
    this.props.navigation.goBack();
  };

  handleSignUpPress = async () => {
    const {username, email, password} = this.state;

    if (email.length === 0 || password.length === 0 || username.length === 0) {
      this.setState(
        {error: 'Preencha todos os campos para continuar!'},
        () => false,
      );
    } else {
      try {
        await api.post('/users', {
          username: username,
          email: email,
          password: password,
        });

        this.setState({
          success: 'Conta criada com sucesso! Redirecionando para o login',
          error: '',
        });

        setTimeout(this.goToLogin, 2500);
      } catch (_err) {
        this.setState({
          error:
            'Houve um problema com o cadastro, verifique os dados preenchidos!',
        });
      }
    }
  };

  goToLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'SignIn'})],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image
          style={styles.logo}
          source={require('../../images/to-do-icon.png')}
          resizeMode="contain"
        />
        {this.state.success.length !== 0 && (
          <Text style={styles.successMessage}>{this.state.success}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={this.state.username}
          onChangeText={this.handleUsernameChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
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
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSignUpPress}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.signInLink}
          onPress={this.handleBackToLoginPress}>
          <Text style={styles.signInLinkText}>Voltar ao login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
