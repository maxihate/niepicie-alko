// edycji nie będzie, bo droga okazała się źle zaplanowana, a w ogóle to jej nie było, wracam do pierwszego kwadracika
const counter = document.querySelector('.countdown-right');


function cpn() {

let targetDate = new Date(2020,0,30);
let startDate = new Date(2019,9,1);
let nowDate = Date.now();
let leftTime = Math.floor((targetDate - nowDate) / 1000);

let time = {
  "days": Math.floor((leftTime / 3600) / 24),
  "minutes": Math.floor(leftTime / 60) % 60,
  "hours": Math.floor(leftTime / 3600) % 24,
  "seconds": leftTime % 60
};

function threeSixMafia(num, type) {

    let numArr = num.toString().split("");
    let numLast = numArr[numArr.length-1];
    let numRegExp = new RegExp("(2|3|4)");
    let numMatch = (numLast.match(numRegExp)) ? (num > 14 || num < 11 ? true : false) : false;

    switch (type) {
      case "hours":
        return (numMatch ? "godziny" : (num === 1 ? "godzina" : "godzin"));
      case "minutes":
        return (numMatch ? "minuty" : (num === 1 ? "minuta" : "minut"));
      case "seconds":
        return (numMatch ? "sekundy" : (num === 1 ? "sekunde" : "sekund"));
      default:
        return undefined;
    }

}

counter.innerHTML = time.days + (time.days === 1 ? " dzien" : " dni")
  +"<br>" + time.hours + " " + threeSixMafia(time.hours, "hours")
  +"<br>" + time.minutes + " " + threeSixMafia(time.minutes, "minutes")
  +"<br>" + time.seconds  + " " + threeSixMafia(time.seconds, "seconds");
}

function pogonSzczecin() {

  cpn();

}

cpn();
setInterval(pogonSzczecin, 1000);
