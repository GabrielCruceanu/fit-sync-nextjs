export enum AuthError {
  InvalidLoginCredentials = 'Invalid login credentials',
  EmailNotConfirmed = 'Adresa de email nu a fost confirmata',
  UserAlreadyRegistered = 'Userul exista deja',
  EmailAlreadyRegistered = 'Adresa de email exista deja',
  UsernameInvalid = 'Caractere invalide, poti folosi doar "a-z" si "0-9"',
  UsernameIsNotAvailable = 'Numele de utilizator este luat.',
  InputRequired = 'Acest camp este obligatoriu',
  OnlyLetter = 'Caractere invalide sau prea putine, foloseste doar "a-z"',
  OnlyNumbers = 'Caractere invalide sau prea putine, foloseste doar "0-9"',
}
