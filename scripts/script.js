document.querySelectorAll('.add-to-calendar').forEach(button => {
    button.addEventListener('click', function () {
        const workoutCard = this.closest('.items');
        const workoutTitle = workoutCard.dataset.title;

        // Prompt user to select a day
        const day = prompt("Which day do you want to add this workout to? (e.g., Monday, Tuesday...)");

        if (!day) return;

        // Save to localStorage
        let schedule = JSON.parse(localStorage.getItem("schedule")) || {};
        schedule[day.toLowerCase()] = workoutTitle;
        localStorage.setItem("schedule", JSON.stringify(schedule));

        alert(`${workoutTitle} added to your calendar for ${day}`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const schedule = JSON.parse(localStorage.getItem("schedule")) || {};

    Object.entries(schedule).forEach(([day, workout]) => {
        const input = document.getElementById(`${day}-workout`);
        if (input) input.value = workout;
    });
});

