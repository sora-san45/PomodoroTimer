const b1 = document.getElementById("l1")
const b2 = document.getElementById("l2")
const b3 = document.getElementById("l3")
const mins = document.getElementById("minutes")
const secs = document.getElementById("seconds")
const start = document.getElementById("start")
const alarm = document.getElementById("alarm")

let initialSecs = 0;
let initialMins =25;

start.addEventListener("click", function () {
        countdownInterval = setInterval(countDown, 1000)
})

b1.addEventListener("click",function(){
    initialMins=25;
    initialSecs = 0;
    mins.innerHTML="25"
    secs.innerHTML="00"
    clearInterval(countdownInterval);
})

b2.addEventListener("click",function(){
    initialMins=5;
    initialSecs = 0;
    mins.innerHTML="05"
    secs.innerHTML="00"
    clearInterval(countdownInterval);
})

b3.addEventListener("click", function (){
    initialMins=15;
    initialSecs = 0;
    mins.innerHTML="15"
    secs.innerHTML="00"
    clearInterval(countdownInterval);
})

function countDown() {
    if (initialSecs === 0) {
        if (initialMins === 0) {
            clearInterval(countdownInterval);
            alarmOn()
            return;
        } else {
            initialMins--;
            initialSecs = 59;
        }
    } else {
        initialSecs--;
    }
    if (initialSecs >= 10) {
        secs.innerHTML = `${initialSecs}`
    }
    else if (initialSecs < 10 && initialSecs >= 0) {
        secs.innerHTML = `0${initialSecs}`
    }
    if(initialMins>=10){
        mins.innerHTML=`${initialMins}`
    }
    else if (initialMins < 10 && initialMins >= 0) {
        mins.innerHTML = `0${initialMins}`
    }
    

}

function alarmOn(){
    alarm.play()
}
