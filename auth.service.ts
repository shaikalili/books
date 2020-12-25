export class AuthService{
    loggedIn=false;

    

    logIn(){
        this.loggedIn=true;
    }

    logOut(){
        this.loggedIn=false;
    }
}