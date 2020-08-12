var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/api/v1/parse', function (request, response) {
  const { data } = request.body;
  console.log("request body", data);
  let output = {
    firstName: '',
    lastName: '',
    clientId: ''
  };
  let clientId = '';
  let firstName = '';
  let lastName = '';
  let breakIndexArr = [];

  if (data && data.length > 0) {
    let newData = [];
    let newDataOutput = [];
    let getBreakIndex = 0;
    for (let i = 0; i <= data.length - 1; i++) {
      if ((data.charCodeAt(i) >= 65) && (data.charCodeAt(i) <= 90)) {
        newData.push(data[i]);
        getBreakIndex = 0;
      } else if (data.charCodeAt(i) === 48) {
        getBreakIndex = i;
        newData.push(data[i]);
        (getBreakIndex > 0) && newDataOutput.push(newData.join(''));
        console.log("newDataOutput ::::", newDataOutput);
        newData = [];
      } else {
        breakIndexArr.push(data[i]);
      }
    }
    clientId = breakIndexArr.join('');
    output.clientId = clientId;
  }

  response.send({
    Response: {
      statusCode: 200, data: {
        firstName: output.firstName,
        lastName: output.lastName,
        clientId: output.clientId
      }
    }
  });
});

app.post('/api/v2/parse', function (request, response) {
  console.log("request received", request);
  const { data } = request.body;
  console.log("request body", data);
  const newData = [];
  let output = {
    firstName: '',
    lastName: '',
    clientId: ''
  };

  if (data && data.length > 0) {
    for (let i = 0; i <= data.split('0').length; i++) {
      if (data.split('0')[i]) {
        newData.push(data.split('0')[i]);
      }
    }
  }
  console.log("newData:::", newData);
  output.firstName = newData[0];
  output.lastName = newData[1];
  output.clientId = newData[2];
  response.send({
    Response: {
      statusCode: 200, data: {
        firstName: output.firstName,
        lastName: output.lastName,
        clientId: output.clientId
      }
    }
  });
});

var port = 5000;

app.listen(port, function () {
  console.log('Server listening: http://localhost:' + port);
});