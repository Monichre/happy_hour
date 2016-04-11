$(document).ready(function(){
	console.log("im working!");

var term = {
	q: 'happy hour',
};



function search(term){
	console.log(term);
	console.log("im workong");

	$.ajax({
		url: "https://api.twitter.com/1.1/search/tweets.json" + $.param(term),
		dataType: 'jsonp',
		success: function(data) {
			for (i in data['results']){
				$('.tweets-container').append(
					'<li>' + data['results'][i]['text'] + '</li>');
			}
		}
	});
}




	$('#submit').click(function(){
		search(term);

	});

});