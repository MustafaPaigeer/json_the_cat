const request = require('request');
const breedName = process.argv.slice(2);

const options = {
  url: `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`,
  headers: {
    'User-Agent': 'request'
  }
};
  
request(options, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    if (body === '[]') {
      console.log(`Breed name ${breedName} not found`);
    }
    const data = JSON.parse(body);
    for (const item of data) {
      console.log(item.description);
    }
  } else {
    console.log(`error: ${error}`);
  }
});



