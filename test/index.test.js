'use strict';

const test     = require('tape');
const nock = require('nock');
const postElastic = require('../lib/index');


test('send a post request', function(t){

	const url = 'http://theurl.com/manage/payload';
  const json = {table: 'test', payload: {id: 1, data: 'some data to save'}}
  const scope = nock('http://theurl.com')
          .persist()
          .post('/manage/payload')
          .reply(200, 'ok');
  postElastic(url, json, (error, response) => {

    t.equal(response, 'ok', "The json payload has been received");
    t.end()
  })
})
