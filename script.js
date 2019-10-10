const counter = document.querySelector('.countdown-right');


function cpn() {

let targetDate = new Date(2020,0,30);
let startDate = new Date(2019,9,1);
let nowDate = Date.now();
let leftTime = Math.floor((targetDate - nowDate) / 1000);

counter.innerHTML = Math.floor((leftTime / 3600) / 24) + " dni"
+"<br>" + Math.floor(leftTime / 3600) % 24 + " godziny"
+"<br>" + Math.floor(leftTime / 60) % 60 + " minuty"
+"<br>" + leftTime % 60 + " sekundy";

}

function pogonSzczecin() {

cpn();

}

cpn();
setInterval(pogonSzczecin, 1000);
