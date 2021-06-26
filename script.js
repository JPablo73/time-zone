// Time Zone

function time() {
	var timeZone = "http://worldtimeapi.org/api/timezone"

	fetch(timeZone)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data)
		})
}
time()

// Time Zone-list of cities:
// Tokio
// Beijin
// Mumbai
// Cairo 
// Paris 
// Sao Paolo 
// New York
// Los Angeles



// Word Translator

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"accept-encoding": "application/gzip",
// 		"x-rapidapi-key": "731087d542msh4e208bf26768a2fp108983jsna4e8d1d5ba68",
// 		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
// 	},
// 	"data": {
// 		"q": "city",
// 		"target": "ar",
// 		"source": "en"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

//word translator- languages:
// const languages = {
// 	'zh-cn': 'Chinese',
// 	'fr': 'French',
// 	'de': 'German',
// 	'jw': 'Japanese',
// 	'ko': 'Korean',
// 	'es': 'Spanish'
// };




