// https://swapi.dev/api/people

const axios = require('axios');
const url = 'https://swapi.dev/api/people';

// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    // handle success
    const results = response.data.results;
//   console.log(results);
    results.forEach( function(item) {
    	const name = item.name;
    	const birthdate = item.birth_year;
    	const gender = item.gender;
    	console.log('hello, my name is '+name+', i was born in '+birthdate+' and i am a '+gender+'.')
    }) 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


