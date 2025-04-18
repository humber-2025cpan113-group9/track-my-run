document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;
  
    if (currentPage.includes("assessment.html")) {
      const form = document.getElementById("fitness-quiz");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const goal = document.querySelector('input[name="goal"]:checked')?.value;
        const raceDay = document.getElementById("day").value;
        const goalTime = document.getElementById("goal-time").value;
  
        if (!goal || !raceDay || !goalTime) {
          alert("Please fill in all fields");
          return;
        }
  
        const data = { goal, raceDay, goalTime };
        localStorage.setItem("trainingData", JSON.stringify(data));
        window.location.href = "results.html";
      });
    }
  
    if (currentPage.includes("results.html")) {
      
      const planBody = document.getElementById("plan-body");
      const rowTemplate = document.getElementById("plan-row-template");
  
      const data = JSON.parse(localStorage.getItem("trainingData"));
      if (!data) return;
  
      const today = new Date();
      const targetDate = new Date(data.raceDay);
      const weeks = Math.ceil((targetDate - today) / (7 * 24 * 60 * 60 * 1000));
  
      for (let i = 0; i < weeks; i++) {
        const row = rowTemplate.content.cloneNode(true);
        row.querySelector(".week-number").textContent = i + 1;
  
        const start = new Date(today);
        start.setDate(start.getDate() + i * 7);
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        row.querySelector(".date-range").textContent = `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  
        row.querySelector(".target-pace").textContent = `${(10 - i * 0.2).toFixed(2)} min/mile`;
        planBody.appendChild(row);
      }
    }
  });
  