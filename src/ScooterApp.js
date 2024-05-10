// require the User and Scooter classes - see where they can be used in ScooterApp.js

const User = require("./User")

class ScooterApp {
  constructor(stations, registeredUsers){
    this.stations ={
      station1: [],
      station2: [],
      station3: []
    } 

  this.registeredUsers = []
}
  registeredUser(username, password, age){
      
    if (age < 18) throw new Error ('too young to register')

    else if (this.registeredUsers.includes(username)){
      return "user has been registered"
    }
    else {
      new User (username, password, age)
      ScooterApp.registeredUser.push(new User)
    }
}

  loginUser(username, password){
    if (username === User.username && User.password === password){
      return ("user has been logged in")
    }
    else {
      return ("Username or password is inncorrect")
  }
}

  logoutUser(username){
    this.registeredUser = null
  if (!this.registeredUser){
    throw new Error ("no such user is logged in")
  }
  if (this.registeredUser.username === username){
       this.registeredUser.logout()
       console.log(`user ${User.username} is logged out`)
  }
}

  createScooter(station){
    if (!this.stations){
      throw new Error ("station does not exist")
    }
  }

  dockScooter(scooter, station){

    station.scooters.push(scooter)
    scooter.station = station.location

    if (station.scooter.includes(scooter)){
      throw new Error ("Scooter already at station")
    }
    if (!station){
      throw new Error ("no such station")
    }
  }

  rentScooter(scooter, user){


  }

  print(){
    console.log(`There are ${this.user.length} users`)
    console.log(`There are ${this.stations.length} stations`)
    console.log(`There are ${this.scooter.length} scooters`)
    }


  }

 



module.exports = ScooterApp
