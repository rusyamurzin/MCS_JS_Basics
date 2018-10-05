const form = document.forms[0];
const result = document.querySelector('.result');

form.elements.calculate.onclick = function(e){
	e.preventDefault();
	const rad = parseInt(form.elements.ugol.value) * Math.PI /180;
	result.innerHTML = Math.sin(rad);
}
