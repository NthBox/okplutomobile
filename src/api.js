
var rootUrl = 'http://localhost:8080';


module.exports = function() {
  var url = `${rootUrl}/api/users`;

  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      return json.users;
    });
}