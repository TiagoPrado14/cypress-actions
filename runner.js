const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImI5YzJhMDM0LThhMTYtNDNkMC04ZTkwLTQ2ODI4Y2ZkZTdjNS0xNjg0OTc0NjY5MDM1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNzRmZTg0NjgtYjFhNy00MjFjLTliMzctNjkzN2U1MGRhMzZmIiwidHlwZSI6InQifQ.XcViQSIqc6G5MGVfl-d3D5juV70gPILwGZzuAiViKtU'  

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
