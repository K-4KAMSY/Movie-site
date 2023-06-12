const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=adc6a3d860e3e1f0fad49cb250c0d3a1&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=adc6a3d860e3e1f0fad49cb250c0d3a1&query=";

const main = document.getElementById("section"); 
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url) {
	fetch(url).then(res=>res.json()).then(function(data) {
		console.log(data.results);	
		data.results.forEach(element=>{
		
			const div_Card = document.createElement('div');
			div_Card.setAttribute('class', 'card');
			
			const div_row = document.createElement('div');
			div_row.setAttribute('class', 'row');
			
			const div_Column = document.createElement('div');
			div_Column.setAttribute('class', 'column');
			
			const image = document.createElement('img');
			image.setAttribute('class', 'thumbnail');
			image.setAttribute('id', 'image');
			
			const title = document.createElement('h3');
			title.setAttribute('id', 'title');
			
			const center = document.createElement('center');
			
		
			title.innerHTML =`${element.title}`;
			image.src = IMG_PATH + element.poster_path;
			
			center.appendChild(image);
			div_Card.appendChild(center);
			div_Card.appendChild(title);
			div_Column.appendChild(div_Card);
			div_row.appendChild(div_Column);
			main.appendChild(div_row);
		
		});	
	});
  }

form.addEventListener("submit",(e)=>{
	e.preventDefault();
	main.innerHTML = ''; 
	
	const searchItem = search.value;
	
	if (searchItem){
		returnMovies(SEARCHAPI + searchItem);
		search.value = "";
	}
  });



