import Auth from './producer';

const auth = new Auth('aman', 123);
auth.login();
console.log(auth.user);