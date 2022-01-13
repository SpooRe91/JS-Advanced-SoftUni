function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector("textarea").value);
      let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      let bestWorkersOutput = document.querySelector('#workers p');

      bestRestaurantOutput.textContent = '';
      bestWorkersOutput.textContent = '';

      let restInfo = {};
      let restaurant = '';
      let avg = 0;
      let currentName = '';

      for (let i = 0; i < input.length; i++) {
         restaurant = input[i].split("-")[0].trim();
         let workersInfo = input[i].split(' - ')[1].split(", ");

         if (!restInfo[restaurant]) {
            restInfo[restaurant] = {};
         }

         for (let j = 0; j < workersInfo.length; j++) {
            let worker = workersInfo[j].split(" ")[0];
            let salary = Number(workersInfo[j].split(" ")[1]);

            restInfo[restaurant][worker] = salary;
         }

         let arr2 = Object.values(restInfo[restaurant])
         let currentAvg = 0;

         for (const el of arr2) {
            currentAvg += el;
         }

         currentAvg = (currentAvg / arr2.length)

         if (avg < currentAvg) {
            avg = currentAvg
            currentName = restaurant;
         }
      }

      let bestSalary = Math.max(...(Object.values(restInfo[currentName])));

      Object.entries(restInfo[currentName])
         .sort((a, b) => {
            return b[1] - a[1];
         })
         .forEach((el) => {
            bestWorkersOutput.textContent += `Name: ${el[0]} With Salary: ${el[1]} `
         })

      bestRestaurantOutput.textContent = `Name: ${currentName} Average Salary: ${avg.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
   }
}