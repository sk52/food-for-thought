var request = require('request');

var base_url = "http://localhost:3000"

describe("Welcome to Express", function(){
  it('contains welcome message', function(){
    request.get(base_url, function(error, response, body){
      expect(body).toContain('Welcome to Express');
    });
  });
});
