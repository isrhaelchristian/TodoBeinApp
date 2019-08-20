import {StyleSheet} from 'react-native';

import {colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  logo: {
    height: '25%',
    marginBottom: 40,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    marginBottom: 15,
    marginHorizontal: 20,
    fontSize: 16,
  },
  errorMessage: {
    textAlign: 'center',
    color: colors.error,
    fontSize: 16,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  successMessage: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 16,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: colors.primary,
    alignSelf: 'stretch',
    margin: 15,
    marginHorizontal: 20,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  signInLink: {
    padding: 10,
    marginTop: 20,
  },
  signInLinkText: {
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
