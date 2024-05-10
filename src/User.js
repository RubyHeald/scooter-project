class User {
  constructor (username, password, age, loggedIn){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = loggedIn
  }

login(password){

  if (this.password === password){
    return "User logged in"
  }
  else (this.password = !password)
    throw new Error ("Incorrect password")

  }

logout(){
  return 'User logged out'
  }
  
}

module.exports = User
