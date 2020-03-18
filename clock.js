const time = document.querySelector(".js-clock");
const timeContainer = time.querySelector(".js-clock-container")
const date = document.querySelector(".js-date")
const dateContainer = date.querySelector(".js-date-container")

function getTime() {
    const times = new Date()
    const minutes = times.getMinutes();
    const hours = times.getHours();
    const seconds = times.getSeconds();
    timeContainer.innerText = `${hours < 10 ?`0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
 }                  

function getDate(){
    const dates = new Date()
    const year = dates.getFullYear();
    const month = dates.getMonth() + 1;
    const day = dates.getDate(); 
    dateContainer.innerText = `${year}년 ${month}월 ${day}일`
}

function init() {
    getTime();
    getDate();
    setInterval(getTime, 1000);
    

}

init()

