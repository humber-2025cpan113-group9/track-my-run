// Validate new post form
function validateForm() {
    let goalDistance = document.getElementById("target-distance").value;
    let day = document.getElementById("day").value;
    let goalHour = document.getElementById("goal-hours").value;
    let goalMin = document.getElementById("goal-min").value;
    

    if (goalDistance === "" || day === "" ||goalHour === "" || goalMin === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    let quiz = document.getElementById("fitness-quiz");
    if(quiz){
        quiz.addEventListener("submit", function(event){
            if (!validateForm()){
                event.preventDefault();
                return;

            }

            let post= { 
                goalDistance: document.getElementById("target-distance").value,
                day: document.getElementById("day").value,
                goalHour: document.getElementById("goal-hours").value,
                goalMin: document.getElementById("goal-min").value
            };
            localStorage.setItem("newWorkout",JSON.stringify(post));
            windows.location.href = "assessment.html"
        });

    } else {
        console.error("quiz not found");
    }
});
