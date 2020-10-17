const body = document.querySelector('body');
console.log(body);

// ! -> I assure you it wont be null
body!.innerHTML = 'yeah';
// or do runtime check
if(body){
    // ...
}

// typecasting
const form = document.querySelector('.form') as HTMLFormElement;
const select = document.querySelector('.select') as HTMLSelectElement;

form.addEventListener('submit', (e : Event) => {
    e.preventDefault();
    console.log(`submit fired!`)
})