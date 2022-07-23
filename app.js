const display = document.getElementById("display");
let select = document.getElementById("list");

let place = "";
var value;
const date = new Date();
let time = date.getHours();
let minute = date.getMinutes();
let currentTime = `${time}.${minute}`


function getData(){
    place = select.value;
    value = select.options[select.selectedIndex].text;
    if(place== 1 && currentTime<=17 && currentTime>=16 && currentTime<=21 && currentTime>=20 ){
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place==0){
        alert(`আপনি কোনো স্থান নির্বাচন করেন নি`)
        display.innerHTML= "স্থান নির্বাচন করুন";
    }
    else if(place== 2 && currentTime<=19 && currentTime>=18) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 3 && currentTime<=19 && currentTime>=18) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 4 && currentTime<=18 && currentTime>=17 && currentTime<=22 && currentTime>=21) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 5 && currentTime<=14 && currentTime>=13 && currentTime<=18 && currentTime>=17) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 6 && currentTime<=17 && currentTime>=16 && currentTime<=21 && currentTime>=20) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 7 && currentTime<=20 && currentTime>=19 && currentTime<=22 && currentTime>=21) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 8 && currentTime<=0 && currentTime>=0) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 9 && currentTime<=0 && currentTime>=0) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 10 && currentTime<=17 && currentTime>=16) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 11 && currentTime<=16 && currentTime>=15 && currentTime<=19 && currentTime>=18) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 12 && currentTime<=20 && currentTime>=19) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 13 && currentTime<=15 && currentTime>=14 && currentTime<=22 && currentTime>=21) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 14 && currentTime<=18 && currentTime>=17) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 15 && currentTime<=21 && currentTime>=20) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 16 && currentTime<=17 && currentTime>=16 && currentTime<=20 && currentTime>=19) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 17 && currentTime<=0 && currentTime>=0) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 18 && currentTime<=22 && currentTime>=21) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 19 && currentTime<=0 && currentTime>=0) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 20 && currentTime<=0 && currentTime>=0) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 21 && currentTime<=0 && currentTime>=0) {
        console.log(currentTime);
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    else if(place== 22 && currentTime<=0 && currentTime>=0) {
        display.innerHTML= `${value} এলাকায় লোডশেডিং চলছে`;
    }
    
    else{
        display.innerHTML = `${value} বিদ্যুত আছে`;
    }
    setTimeout(()=>{
    document.getElementById("list").value= "0";
    }, 300)
}
