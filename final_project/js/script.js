window.onload = function(){
	class Person{
		constructor(name){
			this.name = name;
			this.happiness = 0;
		}
		hasCat(){
			return this.happiness += 1;
		}
		hasRest(){
			return this.happiness +=1;
		}
		hasMoney(){
			return this.happiness +=1; 
		}
		isSunny(){
			const url = 'http://api.openweathermap.org/data/2.5/weather?q=Москва&appid=099715979800997fed902c8c415868c1';
			let xhr = new XMLHttpRequest();
			xhr.open('GET', url, false);
			xhr.send();
			let response = JSON.parse(xhr.responseText);
			if((response.main.temp - 273.5) > 15){
				this.happiness += 1;
			}
			return this.happiness;
		}
	}

	const form = document.forms[0];
	form.onsubmit = function(e){
		e.preventDefault();
		const name = form.elements.name.value;
		const hasCat = form.elements.cat.value;
		const hasRest = form.elements.rest.value;
		const hasMoney = form.elements.money.value;

		let person = new Person(name);

		if(hasCat == 'yes'){
			person.hasCat();
		}
		if(hasRest == 'yes'){
			person.hasRest();
		}
		if(hasMoney == 'yes'){
			person.hasMoney();
		}
		person.isSunny();

		const personName = document.querySelector('.personName');
		const icon = document.querySelector('.icon');

		personName.innerHTML = person.name + ':';
		if(person.happiness == 4){
			icon.innerHTML = '😁';
		}
		else if (person.happiness > 1){
			icon.innerHTML = '😐';
		}
		else{
			icon.innerHTML = '☹️';
		}

	};	
};