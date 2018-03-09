$(window).on("load", function () {

var searchTerm = "Trump"
var begin = "20100101"
var end = "20120101"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='e12fa294cce8469783662298ec2579fd'?q=" + searchTerm + "?begin_date=" + begin + "?end_date=" + end;

// set the variables to equal the inputs from the form

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});


});
// create an ajax call with the url using those variables

// find the data from the result and save in a variable to access later

// create a variable equal to the number of results in the input field

// for that number of results, create an ordered list item to display the headline and author