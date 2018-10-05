class Customer {
	constructor(name){
		this.name = name;
	}

	buy(){
		console.log('Куплено');
	}
}

class childCustomer extends Customer{
	getPresent(){
		console.log('Шарик в подарок');
	}
}

const vasya = new Customer('Vasya');
vasya.buy();

const petya = new childCustomer('Petya');
petya.getPresent();
petya.buy();
