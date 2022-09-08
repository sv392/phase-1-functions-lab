// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue > 42) {
        return someValue - 42
    } else {
        return 42 - someValue
    }
  }

  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    if (someValue > 42) {
        return (someValue - 42) * 264
    } else {
        return (42 - someValue) *264
    }
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
        return (start - destination) * 264
    } else {
        return (destination - start) *264
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let blockDistance = Math.abs(start - destination);
    let distanceTravelled = blockDistance * 264
    if (distanceTravelled <= 400) {
        return 0
    }
    else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02
    }
    else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }

  }