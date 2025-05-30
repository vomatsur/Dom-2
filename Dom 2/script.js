 //Dom 2


let net = document.createElement('h1');

document.querySelector('body').appendChild(net)

let b = prompt('your text');

let c = +prompt('1) katta harf \n 2) kichik harf');

if(c == 1){
    net.textContent = b.toUpperCase();
}
 else if (c == 2){
   net.textContent =b.toLowerCase();
}