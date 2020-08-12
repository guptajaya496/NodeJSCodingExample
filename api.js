const axios = require('axios');
const response = require('express');

function getV1Data() {
  const url = "http://localhost:5000/api/v1/parse";
  const body = {
    data: "JOHN0000MICHAEL0009994567"
  };
  axios.post(url, body)
    .then((response) => {
      var result = response.data;
      console.log(result);
    },
      (error) => {
        console.log(error);
      })
}

getV1Data();

function getV2Data() {
  const url = "http://localhost:5000/api/v2/parse";
  const body = {
    data: "JOHN0000MICHAEL0009994567"
  };
  axios.post(url, body)
    .then((response) => {
      var result = response.data;
      console.log(result);
    },
      (error) => {
        console.log(error);
      })
}
// getV2Data();