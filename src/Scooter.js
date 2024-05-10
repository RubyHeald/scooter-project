class Scooter {
  constructor(station, user, serial, nextSerial, charge, isBroken){
    this.station = station //the station the scooter is located at, or null if checked out
    this.user = null//the User who checked out the Scooter, or null if docked
    this.serial = serial  //a number assigned sequentially from nextSerial
    this.nextSerial = nextSerial 
    this.charge = 100
    this.isBroken = false
  }
  static nextSerial = 1 //a static number which starts at 1 and increments each time a new serial number is assigned
  static getnextSerial(){
    return Scooter.nextSerial++
  }

  rent(user){
    user === this.user
    if (this.charge >20 +!this.isBroken){
      return "Check out Scooter"
    }
    else if (this.charge <20 || this.isBroken){
      throw new Error ("Scooter needs to charge or scooter needs repair")
    }
  }

  dock(station){
    station.user = null 
    this.user.push(station)
    return ("Scooter has been returned")
  }
  
  recharge(){
    const chargeTimer = setInterval
    this.charge = setInterval(() => {
      if (this.charge <100){
        this.charge += 10
        console.log ("Charge has increased by 10%", this.charge)
      }
      else if (this.charge >= 100)
      console.log( "charge compelte")
      {
        clearTimeout(setInterval)
      }
    },10000)
}

module.exports = Scooter
