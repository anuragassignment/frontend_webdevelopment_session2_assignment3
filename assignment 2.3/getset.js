var user = (function () {
    function user(username) {
        this.username = username;
    }
    Object.defineProperty(user.prototype, "Username", {
        get: function () {
            return this.username;
        },
        set: function (username) {
            this.username = username;
        },
        enumerable: true,
        configurable: true
    });
    user.prototype.userCheck = function () {
        if (this.username === usName) {
            alert("The username " + this.username + " is a vaild user");
        }
        else {
            usName ? alert("The username " + usName + " is not a valid user") : alert("username field was left blank. Please try again");
        }
    };
    return user;
}());
var John = new user("johndoe");
John.Username = "jdoe";
var usName = prompt("Enter your username Hint: " + John.Username);
John.userCheck();
//# sourceMappingURL=getset.js.map