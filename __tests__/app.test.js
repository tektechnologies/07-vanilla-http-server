'use strict';

const request = require('supertest');

const server = require('../src/app');
const app = require('../src/app');

describe('app', () => {
  it('responds with 404 for unknown path', () => {
    return request(app)
      .get('/404')
      .expect(404)
      .expect('Content-Type', 'text/html')
      .expect('Resource Not Found');
  });
});
