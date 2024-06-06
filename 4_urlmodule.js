//URL Module - Handling Url's

var url = require('url');
var adrs = 'http://localhost:8080/venky'

var q = url.parse(adrs,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

