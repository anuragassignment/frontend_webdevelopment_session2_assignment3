class user {
    private username: string;
    constructor(username: string) {
        this.username = username;
    }
    //sets the username 
    set Username(username: string) {
        this.username = username;
    }
    //gets the username 
    get Username(): string {
        return this.username;
    }
    //validates the username
    userCheck() {
        if (this.username === usName) {
            alert(`The username ${this.username} is a vaild user`);
        } else {
            usName ? alert(`The username ${usName} is not a valid user`) : alert(`username field was left blank. Please try again`);
        }
    }
}
//new instance John, of class user created
let John = new user("johndoe");
//username set for John
John.Username = "jdoe";
//prompt asks user to enter username
let usName = prompt(`Enter your username Hint: ${John.Username}`);
//userCheck method validates the username
John.userCheck();
