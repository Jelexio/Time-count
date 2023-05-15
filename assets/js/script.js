const timeCountNode = document.querySelector(".flash-time-count");

function calcTimeCount() {
    let time = 3600;
    let timer = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timeCountNode.innerHTML = `${minutes + "m"} : ${seconds + "s"}`;
        time--;
        time < 0 ? clearInterval(timer) : true;
    }, 1000);
}
calcTimeCount();