function attachEventsListeners() {

    let buttons = Array.from(document.getElementsByTagName("input"));

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    let daysInput = document.getElementById("days");
    let hoursInput = document.getElementById("hours");
    let minutesInput = document.getElementById("minutes");
    let secondsInput = document.getElementById("seconds");

    let daysBtn = document.getElementById("daysBtn");
    let hoursBtn = document.getElementById("hoursBtn");
    let minutesBtn = document.getElementById("minutesBtn");
    let secondsBtn = document.getElementById("secondsBtn");

    for (const button of buttons) {
        if (button.type == "button") {
            button.addEventListener("click", onClick);
        }
    }

    function onClick(ev) {

        if (ev.target == daysBtn) {
            hoursInput.value = Number(daysInput.value) * ratios.hours;
            minutesInput.value = Number(daysInput.value) * ratios.minutes;
            secondsInput.value = Number(daysInput.value) * ratios.seconds;
        } else if (ev.target == hoursBtn) {
            daysInput.value = Number(hoursInput.value) / ratios.hours;
            minutesInput.value = Number(daysInput.value) * ratios.minutes
            secondsInput.value = Number(daysInput.value) * ratios.seconds;
        } else if (ev.target == minutesBtn) {
            daysInput.value = Number(minutesInput.value) / ratios.minutes;
            hoursInput.value = Number(daysInput.value) * ratios.hours
            secondsInput.value = Number(daysInput.value) * ratios.seconds;

        } else if (ev.target == secondsBtn) {
            daysInput.value = Number(secondsInput.value) / ratios.seconds;
            minutesInput.value = Number(daysInput.value) * ratios.minutes
            hoursInput.value = Number(daysInput.value) * ratios.hours;
        }
    }
}