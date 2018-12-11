// Code your solution in this file!
const driverName = function(driverObj){
  console.log(driverObj.name);
}


const logDriverNames = function(drivers){
  drivers.forEach(driverName);
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driverObj){
    if (location === driverObj.hometown){
      console.log(driverObj.name);
    };
  });
}

const driversByRevenue = function(drivers){
  driversCopy = [...drivers];
  return driversCopy.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
}
const driversByName = function(drivers){
  driversCopy = [...drivers];
  return driversCopy.sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
}
const totalRevenue = function(drivers){
  return drivers.reduce(function(totalRev, driver){
    return totalRev + driver.revenue;
  },0);
}
const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length;
}
