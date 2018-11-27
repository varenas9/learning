'use strict';
const axios = require('axios');
const compatibility = {
  'O-': ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-'],
  'O+': ['AB+', 'A+', 'B+', 'O+'],
  'B-': ['AB+', 'AB-', 'B+', 'B-'],
  'B+': ['AB+', 'B+'],
  'A-': ['AB+', 'AB-', 'A+', 'A-'],
  'A+': ['AB+', 'A+'],
  'AB-': ['AB+', 'AB-'],
  'AB+': ['AB+']
};
// const people = {
//   'Edwin': 'O-',
//   'Michelle': 'AB+',
//   'Owen': 'AB+',
//   'Jorge': 'B-',
//   'Josh': 'A+',
//   'Mike': 'O+',
//   'Lauren': 'O+'
// };


// const donors = {};

// for (const idx in people) {
//   const bloodType = people[idx];
//   const compatibleBloodType = compatibility[bloodType];

//   const canReceive = [];
//   for (const receivers in people) {
//     const receiverBloodType = people[receivers];
//     const positiveMatch = compatibleBloodType.includes(receiverBloodType);
//     if (positiveMatch && receivers !== idx) {
//       canReceive.push(receivers);
//     }
//   }
//   donors[idx] = canReceive;
// }

// console.log(donors);
function horse(response){
  const authorization = response.headers.authorization;
  const people = response.data;
  const donors = calculateDonors(people);


  return axios({
    url: 'https://jsconf.admios.com/blood-types',
    method: 'post',
    data: donors,
    headers: {'Authorization': authorization}
  });
}
axios.get('https://jsconf.admios.com/blood-types')
  .then((response) => {
    return horse(response);
  })
  .then((response) => {
    return horse(response);
  })
  .then((response) => {
    return horse(response);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    if (err.response.status === 404) {
      console.log('Not Found');
    }
  });

function calculateDonors(people) {
  const donors = {};

  for (const idx in people) {
    const bloodType = people[idx];
    const compatibleBloodType = compatibility[bloodType];

    const canReceive = [];
    for (const receivers in people) {
      const receiverBloodType = people[receivers];
      const positiveMatch = compatibleBloodType.includes(receiverBloodType);
      if (positiveMatch && receivers !== idx) {
        canReceive.push(receivers);
      }
    }
    donors[idx] = canReceive;
  }
  return donors;
}