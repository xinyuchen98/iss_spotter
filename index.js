const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("174.3.225.124", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coordinates:' , coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 53.459, longitude: -113.5227 }, (error, responseList) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Responses:' , responseList);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  passTimes.forEach(function(element) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(element.risetime);
    console.log(`Next pass at ${datetime} for ${element.duration} seconds!`)
  });
});