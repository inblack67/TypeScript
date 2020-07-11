export default class Auth{
    constructor(public user?: string, private password?: number) {
        this.user = user;
        this.password = password;
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