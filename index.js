const jsonfile = require('jsonfile')
const file = 'data.json'
jsonfile.readFile(file)
  .then(obj => console.dir(obj))
  .catch(error => console.error(error))
/*
  var jData={};
  $.getJSON('data.json', function(data) { 
    jData=data;
  }); 
*/

var item1 = {
    fname: 'rafael',
    lname: 'marques',
    age: '19'
}

var item2 = {
    fname: 'daniel',
    lname: 'marques',
    age: '19'
}

var items = [item1, item2];
/*
_.forEach(items => {
    console.log(value);
});
*/