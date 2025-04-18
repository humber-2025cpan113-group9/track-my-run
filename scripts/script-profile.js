
// calendar for slider for distance
document.addEventListener("DOMContentLoaded", () => {
  const mileageSliders = document.querySelectorAll(".milage");

  mileageSliders.forEach(slider => {
    slider.value = slider.min;
    const day = slider.dataset.day;
    const display = document.getElementById(`${day}-distance`);

    slider.addEventListener("input", () => {
      display.textContent = `${slider.value} km`;
    });
  });
});

// profile progress slider
document.addEventListener("DOMContentLoaded", () => {
  const progressSliders = document.querySelectorAll(".days");

  progressSliders.forEach(slider => {
    slider.value = slider.min;
    const display = document.getElementById("days-completed");

    slider.addEventListener("input", () => {
      display.textContent = `${slider.value} days completed`;
    });
  });
});


document.getElementById("calendar-btn").addEventListener("click", function () {
  const workoutData = [];
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  let isValid = true;

  days.forEach(day => {
    const workoutSelectEl = document.querySelector(`#${day}-workout select`);
    const distanceInput = document.querySelector(`.milage[data-day="${day}"]`);

    const workout = workoutSelectEl.options[workoutSelectEl.selectedIndex].text;
    const distance = distanceInput.value;

    if (!workout || !distance) {
      isValid = false;
    }

    workoutData.push({
      day,
      workout,
      distance: `${distance} km`
    });
  });

  if (!isValid) {
    alert("Please make sure each day has a workout and distance.");
    return;
  }

  localStorage.setItem("weeklyWorkout", JSON.stringify(workoutData));
  alert("Workout plan saved successfully!");
});


