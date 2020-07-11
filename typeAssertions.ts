// Type Assertions
let message = 'okay';
let message2 = '';

let endsWithY = message.endsWith('Y');
console.log(endsWithY);

// access intellisense of undefined vars
let test = (message2 as string).endsWith('');
let test2 = (<string>message2).endsWith('');
console.log(endsWithY);