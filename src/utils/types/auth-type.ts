export interface TSignUpDataRequest {
  emailOrPhoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface TSignInDataRequest {
  emailOrPhoneNumber: string;
  password: string;
}
