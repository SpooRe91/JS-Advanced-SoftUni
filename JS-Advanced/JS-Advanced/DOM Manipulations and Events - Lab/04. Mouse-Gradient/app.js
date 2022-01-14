function attachGradientEvents() {

    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mouseout', mouseOut);

    gradient.addEventListener('mousemove', mouseMove);

    function mouseMove(ev) {
        let power = ev.offsetX / (ev.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";

    }

    function mouseOut(ev) {
        document.getElementById('result').textContent = "";

    }
}