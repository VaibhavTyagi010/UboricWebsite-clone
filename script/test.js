const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'wolf-amazon-data-scraper.p.rapidapi.com',
		'X-RapidAPI-Key': '54dffa8cd5msh57df86b0104f57cp142211jsn00eba23e51f3'
	}
};

fetch('https://wolf-amazon-data-scraper.p.rapidapi.com/search/kitchen?api_key=59ef84be287bba26357f5519b0058332', options)
	.then(response => response.json())
	.then(response => slide(response))
	.catch(err => slide(err));