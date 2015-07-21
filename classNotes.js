var factorial = function(num) {
	var factVal = 1
	for (var i = 1; i <= num; i++) {
		factVal = factVal * i;
	}
  return factVal;
}

Single-page application: Twitter ex... doesnt load the whole page again

GET - look at/read info
POST - add new data
PUT - 
DELETE - remove existing data

Ajax Ex:

$(document).ready(function(e){
  e.preventDefault();
  $('#theButton').click(function(){
  	$.ajax({
  		method: 'GET',
  		url: '.......',
  		success: function(res){
  		  console.log(res);
  		  addDataToDom(res);
  		},
  		error: function(err){
  			console.log(err);
  		}
  	})
  })
function addDataToDom(arr){
	for(var i = 0; i < arr.length; i++){
		$('.theData' + (i + 1)).append(
			'<h1>' + arr[i].comName + '</h1>' +
			'<span>' + arr[i].sciName +'</span>'
		)
	}
}


});