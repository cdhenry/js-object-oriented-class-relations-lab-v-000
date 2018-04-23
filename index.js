let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  passengers(){
    return store.passengers.filter(passenger => {
      return passenger.trips().filter(trip => {
        return trip.driverId === this.id;
      })
    })
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    })
  }
}

let passengerId = 0;
class Passenger{
  constructor(name){
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }

  drivers(){
    return store.drivers.filter(driver => {
      return driver.trips().filter(trip => {
        return trip.passengerId === this.id;
      })
    })
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    })
  }
}

let tripId = 0;
class Trip{
  constructor(driver, passenger){
    this.id = ++tripId;
    if (driver){
      this.driverId = driver.id;
    }
    if (passenger){
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId;
    }.bind(this))
  }

  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId;
    }.bind(this))
  }
}
