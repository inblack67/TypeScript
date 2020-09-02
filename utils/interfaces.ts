interface Auth {
    user: string,
    password: number,
    // login: () => void   // signature of fn
}

const login = (credentials: Auth) => console.log(credentials);

login({ user: 'Aman', password: 123 });