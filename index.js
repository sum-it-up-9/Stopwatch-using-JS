let hr = min = sec = "0" + 0,startTimer;

// fetching the stop, start and reset butttons from html
const startBtn = document.querySelector(".start"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");


//adding the eventlisteners to the buttons
//when clicked on start button start function will be called and likewise for stop and reset button
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);


//start function has a setinterval of 1000 ms which is 1sec, at every 1 sec  this function will run
function start() {
startBtn.classList.add("active");
stopBtn.classList.remove("stopActive");

startTimer = setInterval(()=>{
    sec++;
    sec = sec < 10 ? "0" + sec : sec;

    //when sec value become 60, min value will be increased to 1
    if(sec == 60){
        min++;
        min = min < 10 ? "0" + min : min;
        sec = "0" + 0;
    }

    //when min value become 60, hr value will be increased to 1
    if(min == 60){
        hr++;
        hr = hr < 10 ? "0" + hr : hr;
        min = "0" + 0;
    }
    //at each function call of setinterval, updated value of sec,hr,min will be updated in the DOM using putvalue function
    putValue();
    },1000); 

}


//after clicking on stop. setinterval function will be stopped suing clearinterval
function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}


//reset will clear the interval and update the values to zero in the dom
function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = "0" + 0;
    putValue();
}

function putValue() {       
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}