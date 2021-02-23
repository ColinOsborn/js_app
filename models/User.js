const validator = require("validator");

let User = function(data) {
  this.data = data
  this.errors = []
}

User.prototype.cleanUp = function() {
 if(typeof(this.data.username) != "string") { this.data.username = "" }

 this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
 }
}

User.prototype.validate = function() {
 if(this.data.username == '') { this.errors.push("You must provide a username") }
 if(!validator.isEmail(this.data.email)) { this.errors.push("You must provide a valid email address") }
 if(this.data.password == '') { this.errors.push("You must enter a password") }
 if (this.data.password.length > 0 && this.password.length < 8) {this.errors.push("Password must be atleast 8 characters")}
 if (this.data.password.length > 100) {this.errors.push("Password cannot exceed 100 characters")}
}

User.prototype.register = function() {
  this.cleanUp()
  this.validate()
}

module.export = User