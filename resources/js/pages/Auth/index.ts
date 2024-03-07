import { TAuth } from './types';
import AuthComponent from './Auth';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = AuthComponent as TAuth;

Auth.SignIn = SignIn;
Auth.SignUp = SignUp;

export default Auth;
