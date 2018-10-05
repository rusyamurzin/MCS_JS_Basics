const div = document.querySelector('div');
a = [];
for(let i = 1; i <= 100000; i++){
	if(i%6 == 0){
		a.push(i);
	}
}
div.innerHTML = a.join(' ');