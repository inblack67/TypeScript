class Auth{
    // private user: string;
    // private password: number;

    // // ? optional params, all or none
    // constructor(user?: string, password?: number) {
    //     this.user = user;
    //     this.password = password;
    // }

    // autoinit and declare class fields
    constructor(public user?: string, private password?: number){
        // no need to this. crap
    }


    // get/set prvt fields
    get getUser(){
        return this.user;
    }

    set setUser(user){
        this.user = user;
    }

    login(){
        console.log(`${this.user} is now logged in`);
    }
}
let auth = new Auth('Aman', 123);
// auth.user = 'Hacker' // cant be hacked now
// I need public protect private
console.log(auth.getUser);
auth.setUser = 'Anonymous'
console.log(auth.getUser);

auth.login();