function attachEvents() {
    let btn = document.getElementById("submit");
    btn.addEventListener("click", onClick)
}
attachEvents();

const current = document.getElementById("current");
const upcoming = document.getElementById("upcoming")

const symbols = {
    'Sunny': '&#x2600;', // ☀
    'Partly sunny': '&#x26C5;', // ⛅
    'Overcast': '&#x2601;', // ☁
    'Rain': '&#x2614;', // ☂
    'Degrees': '&#176;' // °
};


async function onClick() {
    const inputValue = document.getElementById("location").value;

    const data = await getAllLocations();
    let names = [];
    for (const obj of data) {
        names.push(obj.name);
    }

    try {
        if (!names.includes(inputValue) ) {
            throw new Error()
        }
        let found = data.find(obj => obj.name == inputValue);
        document.getElementById("forecast").style.display = "block"
        let forecast = await getForecastToday(found.code)
        

        let upcForc = await get3DayForecast(found.code)

        current.innerHTML = `<div class="label">Current conditions</div>
        <div class="forecasts">
        <span class="condition symbol">${symbols[forecast.forecast.condition]}</span>
        <span class="condition">
        <span class="forecast-data">${forecast.name}</span>
        <span class="forecast-data">${forecast.forecast.low}&deg/${forecast.forecast.high}&deg</span>
        <span class="forecast-data">${forecast.forecast.condition}</span>
        </span>
        </div>`

        upcoming.innerHTML = `<div class="label">Theree-day forecast</div>
        <div class="forecast-info">
        <span class="upcoming">
        <span class="symbol">${symbols[upcForc.forecast[0].condition]}</span>
        <span class="forecast-data">${forecast.name}</span>
        <span class="forecast-data">${upcForc.forecast[0].low}&deg/${upcForc.forecast[0].high}&deg</span>
        <span class="forecast-data">${upcForc.forecast[0].condition}</span>
        </span>
        <span class="upcoming">
        <span class="symbol">${symbols[upcForc.forecast[1].condition]}</span>
        <span class="forecast-data">${forecast.name}</span>
        <span class="forecast-data">${upcForc.forecast[1].low}&deg/${upcForc.forecast[1].high}&deg</span>
        <span class="forecast-data">${upcForc.forecast[1].condition}</span>
        </span>
        <span class="upcoming">
        <span class="symbol">${symbols[upcForc.forecast[2].condition]}</span>
        <span class="forecast-data">${forecast.name}</span>
        <span class="forecast-data">${upcForc.forecast[2].low}&deg/${upcForc.forecast[2].high}&deg</span>
        <span class="forecast-data">${upcForc.forecast[2].condition}</span>
        </span>
        </div>`

    } catch (error) {
        current.innerHTML = "Error"
        upcoming.innerHTML = "Error"
    }
}

async function getAllLocations() {
    const url = "http://localhost:3030/jsonstore/forecaster/locations";

    const res = await fetch(url);
    const data = await res.json();

    let names = [];
    for (const obj of data) {
        names.push(obj.name);
    }

    return data
}

    async function getForecastToday(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        const res = await fetch(url);
        const data = await res.json();
        return data
    }

async function get3DayForecast(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`

        const res = await fetch(url);
        const data = await res.json();
        return data
    }