class User {
  constructor (username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }

login(password){

  if (this.password === password){
    return this.loggedIn = true
  }
  else (this.password = !password)
    throw new Error ("Incorrect password")

  }

logout(){
  return 'User logged out'
  }

}

module.exports = User
