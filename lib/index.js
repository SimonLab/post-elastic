'use strict';

const request = require('request');

module.exports = function (url, json, next) {

  const options = {
    uri: url,
    method: 'POST',
    json: json
  };

  request(options, function (error, response, body) {

    return next(error, body);
  });
}
