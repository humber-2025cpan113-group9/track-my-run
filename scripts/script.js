document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  if (currentPage.includes("assessment.html")) {
    const form = document.getElementById("fitness-quiz");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const goalValue = parseFloat(document.getElementById("target-distance-select").value);
      const raceDay = document.getElementById("day").value;
      const goalHr = document.getElementById("goal-hours").value;
      const goalMin = document.getElementById("goal-min").value;

    

      if (!goalValue || !raceDay || goalHr === "" || goalMin === "") {
        alert("Please fill in all fields");
        return;
      }

      localStorage.setItem("goal", goalValue);
      localStorage.setItem("raceDay", raceDay);
      localStorage.setItem("goalHr", goalHr);
      localStorage.setItem("goalMin",goalMin);

      window.location.href = "results.html";
    });
  }

  if (currentPage.includes("results.html")) {
    const distance = parseFloat(localStorage.getItem("goal"));
    const raceDay = localStorage.getItem("raceDay");
    const goalHr = parseInt( localStorage.getItem("goalHr") );
    const goalMin = parseInt(localStorage.getItem("goalMin"));

    if (!distance || !raceDay || isNaN(goalHr) || isNaN(goalMin) ) return;

   const paceMin = (goalHr *60) +goalMin ;
   const basePace = paceMin / distance ;
  

    const today = new Date();
    const race = new Date(raceDay);
    const weeks = Math.ceil((race - today) / (7 * 24 * 60 * 60 * 1000));
    console.log(weeks)

    const startPace = (basePace*0.8) + basePace;
    const paceDecreasePerWeek = (startPace - basePace)/weeks;
    console.log(paceDecreasePerWeek);

    const tableBody = document.getElementById("plan-body");
    const template = document.getElementById("plan-row-template");

    for (let i = 0; i < weeks; i++) {
      const start = new Date(today);
      start.setDate(today.getDate() + i * 7);

      const end = new Date(start);
      end.setDate(start.getDate() + 6);

      
      const currentPace = startPace - (paceDecreasePerWeek *i);
      const paceInMiles = currentPace * 1.609;
      
      const row = template.content.cloneNode(true);
      row.querySelector(".week-number").textContent = i + 1;
      row.querySelector(".date-range").textContent = `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
      row.querySelector(".target-pace").textContent = `${paceInMiles.toFixed(2)} min/mile`;

      tableBody.appendChild(row);
    }
  }
});

     