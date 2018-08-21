'use strict';

const EventEmitter = require('events');
const requestParser = require('../../src/lib/request-parser');

describe('request-parser', () => {
});

class FakeRequest extends EventEmitter {
  constructor(url, method = 'GET') {
    super();
    this.url = url;
    this.method = method;
  }
}
