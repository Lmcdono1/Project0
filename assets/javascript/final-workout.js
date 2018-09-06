// get the API 
// create a variable to hold the exercises that you want to grab from it
var queryURL = "https://wger.de/api/v2/exercise/?format=json&limit=530&language=2&status=2";

var exercises = [];

// create a function to query the api 
function generateWorkout() {

    var workoutDiv = $("<div>");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
           
            var exercise = response.results[i];
            // console.log(exercise);

            for (var j = 0; j < exercises.length; j++) {

                if (exercise.name == exercises[j]) {
                    var exerciseDiv = $("<div>");
                    var exerciseInfoDiv = $("<div>");
                    var exerciseCategoryDiv = $("<div>");
                    var muscleDiv = $("<div>");
                    var equipmentDiv = $("<div>");
                    var exerciseImage = $("<div>");

                    exerciseDiv.append("<span class=bold-font>Exercise: <span>");
                    exerciseInfoDiv.append("<span class=bold-font>Exercise Info: </span>");
                    exerciseCategoryDiv.append("<span class=bold-font>Exercise Category: </span>");
                    muscleDiv.append("<span class=bold-font>Muscle: </span>");
                    equipmentDiv.append("<span class=bold-font>Equipment: </span>");
                    exerciseImage.append("<img>");

                    workoutDiv.append(exerciseDiv);
                    workoutDiv.append(exerciseInfoDiv);
                    workoutDiv.append(exerciseCategoryDiv);
                    workoutDiv.append(muscleDiv);
                    workoutDiv.append(equipmentDiv);
                    workoutDiv.append(exerciseImage);

                    console.log(exercise);
                    exerciseDiv.append(exercise.name);
                    exerciseInfoDiv.append(exercise.description);
                    workoutDiv.append("----------------------------------------------------------------");

                    for (var k = 0; k < exerciseCategory.length; k++) {
                        if (exercise.category == exerciseCategory[k].id) {
                            exerciseCategoryDiv.append(exerciseCategory[k].name);
                        }
                    }
                    for (var l = 0; l < muscle.length; l++) {
                        if (exercise.muscles == muscle[l].id) {
                            muscleDiv.append(muscle[l].name + ", ");
                        }
                        if (exercise.muscles_secondary == muscle[l].id) {
                            muscleDiv.append(muscle[l].name + ", ");
                        }
                    }
                    for (var m = 0; m < exercise.equipment.length; m++) {
                        // console.log(exercise.equipment[m]);
                        equipmentDiv.append(equipment[exercise.equipment[m]].name + ", \n");
                    }
                    for (var n = 0; n < exerciseImage.length; n++) {

                        if (exercise.id == exerciseImage.id) {
                            equipmentDiv.append(equipment[exercise.equipment[n]].name + ", \n");
                        }
                    }
                }
            }
        }
    })
    return workoutDiv;
}

// ---------------------------------------------------------------------------------------------------------
// if days = 1 && workout == powerlifting{
// display alert "You should really consider working out more than 1 day per week to make progress"
// create a full body work out with 10 exercises ( warm up, cool down?)
//
//      include squats, bench, deadlift
// }

if ($("#days-per-week").val() == 1 && $("#fitness-goals").val() == "pl") {
    alert("You should really consider working out more than 1 day per week to make progress");

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());
}

// if days = 2 && workout == powerlifting
// create a full body work out with 10 exercises ( warm up, cool down?)
//      include squats, bench, deadlift

if ($("#days-per-week").val() == 2 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());
}

// if days = 3 && workout == powerlifting
// create three full body works out with 6 exercises ( warm up, cool down?)
//      include squats, bench, deadlift

if ($("#days-per-week").val() == 3 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());
}

// if days = 4 && workout == powerlifting
// create 4 work out with 5 exercises ( warm up, cool down?)
//      include squats, bench, deadlift

if ($("#days-per-week").val() == 4 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());
}

// if days = 5 && workout == powerlifting
// create 5 work outs with  two squat days, 2 bench days, and one deadlift day
if ($("#days-per-week").val() == 5 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());
}

// if days = 6 && workout == powerlifting
// create 6 work outs with two squat days, 2 bench days, and 2 deadlift days

if ($("#days-per-week").val() == 6 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-6").append(generateWorkout());
}


// if days = 7 && workout == powerlifting
// create 6 work outs where two days are relatively light and one day is an active recovery day
if ($("#days-per-week").val() == 7 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-6").append(generateWorkout());

    $(".day-7").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-7").append(generateWorkout()); 
}

// -----------------------------------------------------------------------------------------------------------
// if days = 1 && workout == bodybuilding
// display alert "You should really consider working out more than 1 day per week to make progress"
// create a full body work out with 10 exercises ( warm up, cool down?)
//include squats, bench, deadlift
if ($("#days-per-week").val() == 1 && $("#fitness-goals").val() == "bb") {
    alert("You should really consider working out more than 1 day per week to make progress");

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());
}

// if days = 2 && workout == bodybuilding
if ($("#days-per-week").val() == 2 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());
}

// if days = 3 && workout == bodybuilding
if ($("#days-per-week").val() == 3 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());
}


// if days = 4 && workout == bodybuilding
if ($("#days-per-week").val() == 4 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());
}

// if days = 5 && workout == bodybuilding
if ($("#days-per-week").val() == 5 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());
}

// if days = 6 && workout == bodybuilding
if ($("#days-per-week").val() == 6 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-6").append(generateWorkout());
}

// if days = 7 && workout == bodybuilding
if ($("#days-per-week").val() == 7 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-6").append(generateWorkout());

    $(".day-7").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-7").append(generateWorkout()); 
}

// ----------------------------------------------------------------------------------------------------

// if days = 1 && workout == general fitness
if ($("#days-per-week").val() == 1 && $("#fitness-goals").val() == "gf") {
    alert("You should really consider working out more than 1 day per week to make progress");

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());
}

// if days = 2 && workout == general fitnes
if ($("#days-per-week").val() == 2 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());
}

// if days = 3 && workout == general fitness
if ($("#days-per-week").val() == 3 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());
}

// if days = 4 && workout == general fitness
if ($("#days-per-week").val() == 4 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());
}


// if days = 5 && workout == general fitness
if ($("#days-per-week").val() == 5 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());
}

// if days = 6 && workout == general fitness
if ($("#days-per-week").val() == 6 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-6").append(generateWorkout());
}

// if days = 7 && workout == general fitness
if ($("#days-per-week").val() == 7 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-6").append(generateWorkout());

    $(".day-7").append("<h2>Day 6<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
    $(".day-7").append(generateWorkout()); 
}

$(".day-7").append("<h2>Day 6<h2>");
exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing"];
$(".day-7").append(generateWorkout()); 
