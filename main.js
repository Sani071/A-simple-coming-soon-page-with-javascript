let endTime = new Date("Feb 14,2019 00:00:00").getTime();
let countDownFunc = setInterval(function () {
    let startTime = new Date().getTime();
    let distance = endTime - startTime;
    let days = Math.floor(distance / (1000 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((distance % (1000 * 60)) / 1000)

    document
        .querySelector("#demo")
        .innerHTML = days + "d " + hours + "h " + mins + "min " + secs + "sec";

    if (distance < 0) {
        document
            .querySelector("#demo")
            .innerHTML = "Happy Birthday"
    }
})