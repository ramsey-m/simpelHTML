

/* <button onclick="stop()">stop time</button> */
const myInterval=setInterval(displayTime,1000);
function displayTime(){
    const date = new Date();
   return  date.toLocaleTimeString();
}
function stop(){
    clearInterval(myInterval);
}
console.log(myInterval);
