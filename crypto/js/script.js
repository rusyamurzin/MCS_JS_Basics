let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const body = document.body;
let result = '';

for(crypt of crypto){
  result += ' <h1>' + crypt.name + '</h1> ';
  result += ' <p>' + crypt.price + '</p> ';
  result += ' <div> </div>';
}

body.innerHTML = result;

const divs = document.querySelectorAll('div');

for(let i = 0; i < crypto.length; i++){
  divs[i].style.height = '50px';
  divs[i].style.width = crypto[i].price+'px';
  divs[i].style.backgroundColor = 'rgb('+i*45+','+i*15+',110)';
}