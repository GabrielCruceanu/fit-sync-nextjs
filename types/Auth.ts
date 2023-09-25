export interface AuthError {
  errorName: string;
  title: string;
  message: string;
}
export enum AuthProvider {
  Google = 'google',
  Facebook = 'facebook',
}
