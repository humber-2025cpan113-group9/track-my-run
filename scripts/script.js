document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;
  
    if (currentPage.includes("assessment.html")) {
      const form = document.getElementById("fitness-quiz");
  
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const goalSelect = document.querySelector('select[name="goal"]');
        const raceDay = document.getElementById("day").value;
        const goalTime = document.getElementById("goal-time").value;
  
        const goalValue = goalSelect?.value;
  
        if (!goalValue || !raceDay || !goalTime) {
          alert("Please fill in all fields");
          return;
        }
  
        localStorage.setItem("goal", goalValue);
        localStorage.setItem("raceDay", raceDay);
        localStorage.setItem("goalTime", goalTime);
  
        window.location.href = "results.html";
      });
    }
  
    if (currentPage.includes("results.html")) {
      const goal = localStorage.getItem("goal");
      const raceDay = localStorage.getItem("raceDay");
      const goalTime = localStorage.getItem("goalTime");
  
      if (!goal || !raceDay || !goalTime) return;
  
      const paceMinutes = parseInt(goalTime.split(":")[0]);
      const paceSeconds = parseInt(goalTime.split(":")[1]);
      const totalPaceMinutes = paceMinutes + paceSeconds / 60;
  
      const today = new Date();
      const race = new Date(raceDay);
      const weeks = Math.ceil((race - today) / (7 * 24 * 60 * 60 * 1000));
  
      const tableBody = document.getElementById("plan-body");
      const template = document.getElementById("plan-row-template");
  
      for (let i = 0; i < weeks; i++) {
        const start = new Date(today);
        start.setDate(today.getDate() + i * 7);
  
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
  
        const row = template.content.cloneNode(true);
        row.querySelector(".week-number").textContent = i + 1;
        row.querySelector(".date-range").textContent = `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
        row.querySelector(".target-pace").textContent = `${totalPaceMinutes.toFixed(2)} min/mile`;
  
        tableBody.appendChild(row);
      }
    }
  });
  
       