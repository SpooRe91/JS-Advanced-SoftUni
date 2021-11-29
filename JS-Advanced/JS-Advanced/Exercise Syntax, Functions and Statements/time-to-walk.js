function timeToWalk(num1, num2, num3) {
    let steps = Number(num1);
    let meters = Number(num2);
    let speedInKm = Number(num3);


    let distanceMeters = steps * meters;
    let speedInMeters = speedInKm / 3.6;
    let time = distanceMeters / speedInMeters;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    

     console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);


    
}

timeToWalk(4000, 0.60, 5)