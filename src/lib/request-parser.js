'use strict';

//const url = require('url');
const queryString = require('querystring');

module.exports = (request) => {
  return new Promise((resolve, reject) => {
  //TODO: validate that request exists
  //TODO: validate that request.url exists
    request.parsedUrl = url.parse(request.url);
    if(!request.method.match(/POST|PUT|PATCH/)){
      return resolve(request);
    }
    let text = '';
    request.on('data', (buffer) => {
      text += buffer.toString();
    });
    request.on('end', () => {
      try{
        switch (request.headers['content-type']){
        case 'application/json': request.body = JSON.parse(text);
          break;
        default: request.body = text;
          break;
        }
        resolve(request);
      } catch(err){
        request.body = null;
        request.text = text;
        reject(err);
      }
    });
    request.on('err', reject);
  });
};
