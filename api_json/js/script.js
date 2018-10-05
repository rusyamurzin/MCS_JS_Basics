const form = document.forms[0];
const temp = document.querySelector('.temp');
const veter = document.querySelector('.veter');

form.onsubmit = function(e){
e.preventDefault();
const APIKey = '099715979800997fed902c8c415868c1';
const city = form.elements.City.value;
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;



let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if(xhr.status != 200){
	console.log(xhr.status + ' ' + xhr.statusText);
} else {
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	
		
		temp.innerHTML = DATA.main.temp - 273.5 + '*C';
		veter.innerHTML = DATA.wind.speed + 'm/s';
}
}