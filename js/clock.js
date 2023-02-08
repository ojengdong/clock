var clock = document.querySelector('.time');

function getTime(){
    const time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    hour = ('00' + hour).slice(-2);
    minutes = ('00' + minutes).slice(-2);
    seconds = ('00' + seconds).slice(-2);

    // clock.innerHTML = `${hour<10 ? `0${hour}`:hour} : ${minutes<10 ? `0${minutes}` : minutes} : ${seconds<10 ? `0${seconds}`:seconds}`
    clock.innerHTML = `${hour} : ${minutes} : ${seconds}`;
}

function init(){
    setInterval(() => {
        getTime();
    }, 1000);
    // setInterval(getTime(), 1000);
}

init();