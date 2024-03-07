import type { TSignUp } from './types';
import SignUpComponent from './SignUp';
import Success from './Success';

const SignUp = SignUpComponent as TSignUp

SignUp.Success = Success;

export default SignUp;
