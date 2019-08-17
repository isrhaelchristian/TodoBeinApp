import {createStackNavigator, createAppContainer} from 'react-navigation';

import Splash from './pages/splash';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';

const Routes = createStackNavigator({
  Splash,
  SignIn,
  SignUp,
  Main,
});

export default createAppContainer(Routes);
