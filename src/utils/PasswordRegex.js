export default function getPasswordRegex() {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?_+-=|~]).{8,}$/;
}