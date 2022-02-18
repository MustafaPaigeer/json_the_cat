const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      if (body === '[]') {
        callback(null, `Breed name ${breedName} not found`);
      } else {
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };



