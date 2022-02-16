async function getInfo() {

    const timeTableElement = document.getElementById("buses");
    const stopNameElement = document.getElementById("stopName")
    const stopId = document.getElementById('stopId').value

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        timeTableElement.innerHTML =''
        stopNameElement.textContent = " Loading..."
        const resposnse = await fetch(url);

        if (resposnse.status != 200) {
            throw new Error("Stop ID not found")
        }
        const data = await resposnse.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const  liElement = document.createElement("li");
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timeTableElement.appendChild(liElement);
        })

    } catch (error) {
        stopNameElement.textContent = `${error.message}n`;
    }

}