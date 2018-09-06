// get the API 
// create a variable to hold the exercises that you want to grab from it
var queryURL = "https://wger.de/api/v2/exercise/?format=json&limit=530&language=2&status=2";

var exercises = [];



var fitnessGoal = "";
var daysPerWeek = 0;
var reps = 0;
var sets = 0;

$("#answer7").change(function () {
    fitnessGoal = $(this).children(":selected").attr("value");
    console.log(fitnessGoal);
});

$("#answer6").change(function () {
    daysPerWeek = $(this).children(":selected").attr("value");
    console.log(daysPerWeek);
});

// create a function to query the api 
function generateWorkout(day) {

   var workoutContainer = $("<div>");

    var workoutButton = $("<button class='accordion'></button>");
    var workoutDiv = $("<div class='panel'>");

    workoutContainer.append(workoutButton);
    workoutContainer.append(workoutDiv);

    workoutButton.append(day);

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
                    exerciseDiv.append(generateReps());
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
                        equipmentDiv.append(equipment[exercise.equipment[m]].name + " \n");
                    }
                    for (var n = 0; n < exerciseImage.length; n++) {

                        if (exercise.id == exerciseImage.id) {
                            equipmentDiv.append(equipment[exercise.equipment[n]].name + " \n");
                        }
                    }
                }
            }
        }
    })
    return workoutContainer;
}


function generateReps() {



    if (fitnessGoal == "pl") {

        reps = Math.floor(Math.random() * 3) + 3;
        sets = Math.floor(Math.random() * 3) + 3;
        console.log("sets: " + sets);
        console.log("reps: " + reps);
    }

    if (fitnessGoal == "bb") {
        reps = Math.floor(Math.random() * 6) + 6;
        sets = Math.floor(Math.random() * 3) + 3;
    }
    if (fitnessGoal == "gf") {
        reps = 10;
        sets = 3;
    }

    return "<p>Perform " + sets + " sets of " + reps + " reps. </p>"
}

// ---------------------------------------------------------------------------------------------------------
// if days = 1 && workout == powerlifting{
// display alert "You should really consider working out more than 1 day per week to make progress"
// create a full body work out with 10 exercises ( warm up, cool down?)
//
//      include squats, bench, deadlift
// }

function mainProgram() {


    console.log("daysPerWeek: " + daysPerWeek);
    console.log("Fitness goal: " + fitnessGoal);
    if (daysPerWeek == 1 && fitnessGoal === "pl") {
        alert("You should really consider working out more than 1 day per week to make progress");

        // $(".day-1").append("<h2>Day 1<h2>");
        exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing", "Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

    }

    // if days = 2 && workout == powerlifting
    // create a full body work out with 10 exercises ( warm up, cool down?)
    //      include squats, bench, deadlift

    if (daysPerWeek == 2 && fitnessGoal == "pl") {

        exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing", "Plank"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Squat", "Bench Press", "Rack Deadlift", "Pull-ups", "Dips", "Bulgarian Split Squat", "Barbell Ab Rollout"];
        $(".day-2").append(generateWorkout("Day-2"));

    }

    // if days = 3 && workout == powerlifting
    // create three full body works out with 6 exercises ( warm up, cool down?)
    //      include squats, bench, deadlift

    if (daysPerWeek == 3 && fitnessGoal == "pl") {

        exercises = ["Barbell Lunges", "Benchpress Dumbbells", "Romanian Deadlift", "Close-grip Lat Pull Down", "Biceps Curls With Dumbbell", "Triceps Extensions on Cable With Bar", "Plank"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Pull-ups", "Rack Deadlift", "Bench Press", "Squats", "Tricep Extensions on Cable", "Preacher Curls", "Barbell Ab Rollout"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Shrugs, Barbells", "Arnold Shoulder Press", "Front Squats", "Biceps Curls with Barbell", "Standing Calf Raises", "Hanging Leg Raises"];
        $(".day-3").append(generateWorkout("Day-3"));
       

    }

    // if days = 4 && workout == powerlifting
    // create 4 work out with 5 exercises ( warm up, cool down?)
    //      include squats, bench, deadlift

    if (daysPerWeek == 4 && fitnessGoal == "pl") {

        exercises = ["Low Box Squat - Wide Stance", "Bench Press", "Front Squats", "Pull-ups", "Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

        exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Rollout"];
        $(".day-2").append(generateWorkout("Day-2"));

        exercises = ["Squat", "Bench Press", "Shoulder Press, Barbell", "Bent Over Rowing", "Hanging Leg Raises"];
        $(".day-3").append(generateWorkout("Day-3"));
       

        exercises = ["Weighted Step-Ups", "Bench Press Narrow Grip", "Deadlifts", "Cable Woodchoppers"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);

    }

    // if days = 5 && workout == powerlifting
    // create 5 work outs with  two squat days, 2 bench days, and one deadlift day
    if (daysPerWeek == 5 && fitnessGoal == "pl") {

        exercises = ["Squat", "Deadlifts", "Barbell Lunges", "Good Mornings", "Leg Curls (laying)", "Leg Extension", "Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Barbell Ab Rollout"];
        $(".day-2").append(generateWorkout("Day-2"));

        exercises = ["Front Squats", "Barbell Lunges", "Pistol Squat", "Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension", "Hanging Leg Raises"];
        $(".day-3").append(generateWorkout("Day-3"));
       

        exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);

        exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Tricep Dumbbell Kickback"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);

    }

    // if days = 6 && workout == powerlifting
    // create 6 work outs with two squat days, 2 bench days, and 2 deadlift days

    if (daysPerWeek == 6 && fitnessGoal == "pl") {

        exercises = ["Squat", "Barbell Lunges", "Weighted Step Up", "Leg Curls (laying)", "Leg Extension", "Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Barbell Ab Rollout"];
        $(".day-2").append(generateWorkout("Day-2"));

        exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
        $(".day-3").append(generateWorkout("Day-3"));
       

        exercises = ["Squat", "Barbell Lunges", "Weighted Step Up", "Leg Curls (laying)", "Leg Extension", "Plank"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);

        exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Tricep Dumbbell Kickback"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);

        exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
        $(".day-6").append(generateWorkout("Day-6"));
        // $(".day-6").prepend(workoutButton);

    }


    // if days = 7 && workout == powerlifting
    // create 6 work outs where two days are relatively light and one day is an active recovery day
    if (daysPerWeek == 7 && fitnessGoal == "pl") {

        exercises = ["Squat", "Barbell Lunges", "Weighted Step Up", "Leg Curls (laying)", "Leg Extension", "Plank"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Barbell Ab Rollout"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
        $(".day-3").append(generateWorkout("Day-3"));
       


        exercises = ["Squat", "Barbell Lunges", "Weighted Step Up", "Leg Curls (laying)", "Leg Extension", "Plank"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);


        exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Tricep Dumbbell Kickback"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);


        exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
        $(".day-6").append(generateWorkout("Day-6"));
        // $(".day-6").prepend(workoutButton);


        $(".day-7").append("<h2>Day 7 - Stretch, Sleep, Eat, Recover. Don't work out every day.<h2>");

    }

    // -----------------------------------------------------------------------------------------------------------
    // if days = 1 && workout == bodybuilding
    // display alert "You should really consider working out more than 1 day per week to make progress"
    // create a full body work out with 10 exercises ( warm up, cool down?)
    //include squats, bench, deadlift
    if (daysPerWeek == 1 && fitnessGoal == "bb") {
        alert("You should really consider working out more than 1 day per week to make progress");

        exercises = ["Squat", "Bulgarian Split Squats", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Lateral Raises", "Pull-ups", "Bentover Dumbbell Rows", "Biceps Curls with Dumbbell", "Hammercurls", "Plank", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

    }

    // if days = 2 && workout == bodybuilding
    if (daysPerWeek == 2 && fitnessGoal == "bb") {

        exercises = ["Squat", "Bulgarian Split Squats", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Lateral Raises", "Pull-ups", "Bentover Dumbbell Rows", "Biceps Curls with Dumbbell", "Hammercurls", "Plank", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Front Squats", "Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension", "Sitting Calf Raises", "Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Tricep Extensions on Cable", "Arnold Shoulder Press", "Facepull", "Front Raises", "Tricep Dumbbell Kickback", "Shrugs, Barbells", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Biceps Curl with Cable", "Hammercurls on Cable", "Hanging Leg Raises", "Cable Woodchoppers"];
        $(".day-2").append(generateWorkout("Day-2"));

    }

    // if days = 3 && workout == bodybuilding
    if (daysPerWeek == 3 && fitnessGoal == "bb") {

        exercises = ["Squat", "Good Mornings", "Barbell Lunges", "Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension", "standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Bent Over Rowing", "Lat Pull Down (Straight Back)", "Biceps Curls with Dumbbell", "Plank", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

        exercises = ["Front Squats", "Leg Curls (laying)", "Leg Extension", "Bench Press", "Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Barbell", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Pull-ups", "Rowing, T-bar", "Wide-grip Pulldown", "Biceps Curl with Cable", "Hammercurls on Cable", "Barbell Ab Rollout", "Hanging Leg Raises"];
        $(".day-2").append(generateWorkout("Day-2"));

        exercises = ["Low Box Squat - Wide Stance", "Weighted Step-ups", "Pause Bench", "Close-grip Bench Press", "Push Ups", "Fly With Cable", "Arnold Shoulder Press", "Facepull", "Tricep Dumbbell Kickback", "Deadlifts", "Shrugs, Barbells", "Bentover Dumbbell Rows", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Biceps Curl with Cable", "Hammercurls on Cable", "Cable Woodchoppers", "Trunk Rotation With Cable", "Flutter Kicks"];
        $(".day-3").append(generateWorkout("Day-3"));
       

    }


    // if days = 4 && workout == bodybuilding
    if (daysPerWeek == 4 && fitnessGoal == "bb") {

        exercises = ["Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Speed Deadlifts", "Plank", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Push Ups", "Fly With Cable", "Tricep Extensions on Cable", "Tricep Dumbbell Kickback", "Bent Over Rowing", "Bentover Dumbbell Rows", "Long-Pulley (low Row)", "Rowing, T-bar", "Biceps Curl with Cable", "Hammercurls on Cable", "Barbell Ab Rollout", "Trunk Rotation With Cable", ];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Front Squats", "Barbell Lunges", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Trunk Rotation With Cable", "Flutter Kicks"];
        $(".day-3").append(generateWorkout("Day-3"));
       


        exercises = ["Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Shoulder Press, Barbell", "Arnold Shoulder Press", "Facepull", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Shrugs, Barbells", "Pull-ups", "Lat Pull Down (Straight Back)", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Hammercurls", "Hanging Leg Raises"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);

    }

    // if days = 5 && workout == bodybuilding
    if (daysPerWeek == 5 && fitnessGoal == "bb") {

        exercises = ["Squat", "Front Squats", "Low Box Squat - Wide Stance", "Bulgarian Split Squats", "Barbell Hack Squats", "Good Mornings", "Barbell Lunges", "Pistol Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Barbell Ab Rollout", "Side Plank", "Planks"];
        $(".day-1").append(generateWorkout("Day-1"));

        exercises = ["Bench Press", "Pause Bench", "Incline Bench Press", "Close-grip Bench Press", "Tricep Dips", "Push Ups", "Incline Dumbbell Flye", "Fly With Cable", "Flutter Kicks"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Bentover Dumbbell Rows", "Chin-ups", "Underhand Lat Pull Down", "Hanging Leg Raises", "Cable Woodchoppers", "Trunk Rotation With Cable"];
        $(".day-3").append(generateWorkout("Day-3"));
       

        exercises = ["Incline Bench Press", "Incline Dumbbell Flye", "Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Lateral Raises", "Front Raises", "Cable Woodchoppers", "Side Plank"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);


        exercises = ["Close-grip Bench Press", "Tricep Extensions on Cable", "Tricep Dumbbell Kickback", "Chin-ups", "Biceps Curls with Barbell", "Biceps Curl with Cable", "Hammercurls on Cable", "Plank", "Barbell Ab Rollout", "Hanging Leg Raises", "Flutter Kicks"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);

    }

    // if days = 6 && workout == bodybuilding
    if (daysPerWeek == 6 && fitnessGoal == "bb") {

        exercises = ["Squat", "Leg Presses (narrow)", "Barbell Lunges", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Plank"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bentover Dumbbell Rows", "Rowing, T-bar", "Biceps Curls with Dumbbell", "Hammercurls", "Hanging Leg Raises"];
        $(".day-3").append(generateWorkout("Day-3"));
       


        exercises = ["Front Squats", "Bulgarian Split Squats", "Pistol Squat", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Cable Woodchoppers"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);


        exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Trunk Rotation With Cable"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);


        exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Lat Pull Down (Straight Back)", "Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curl with Cable", "Hammercurls on Cable", "Barbell Ab Rollout"];
        $(".day-6").append(generateWorkout("Day-6"));
        // $(".day-6").prepend(workoutButton);


    }

    // if days = 7 && workout == bodybuilding
    if (daysPerWeek == 7 && fitnessGoal == "bb") {

        exercises = ["Squat", "Bulgarian Split Squats", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Lateral Raises", "Pull-ups", "Bentover Dumbbell Rows", "Biceps Curls with Dumbbell", "Hammercurls", "Plank", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Plank"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bentover Dumbbell Rows", "Rowing, T-bar", "Biceps Curls with Dumbbell", "Hammercurls", "Hanging Leg Raises"];
        $(".day-3").append(generateWorkout("Day-3"));
       


        exercises = ["Front Squats", "Bulgarian Split Squats", "Pistol Squat", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Cable Woodchoppers"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);


        exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Trunk Rotation With Cable"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);


        exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Lat Pull Down (Straight Back)", "Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curl with Cable", "Hammercurls on Cable", "Barbell Ab Rollout"];
        $(".day-6").append(generateWorkout("Day-6"));
        // $(".day-6").prepend(workoutButton);



        $(".day-7").append("<h2>Day 7 - Stretch, Sleep, Eat, Recover. Don't work out every day.<h2>");
    }

    // ----------------------------------------------------------------------------------------------------

    // if days = 1 && workout == general fitness
    if (daysPerWeek == 1 && fitnessGoal == "gf") {
        alert("You should really consider working out more than 1 day per week to make progress");

        exercises = ["Squat", "Front Squats", "Low Box Squat - Wide Stance", "Bulgarian Split Squats", "Barbell Hack Squats", "Good Mornings", "Barbell Lunges", "Pistol Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Bench Press", "Pause Bench", "Incline Bench Press", "Close-grip Bench Press", "Tricep Dips", "Push Ups", "Incline Dumbbell Flye", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Barbell", "Shoulder Press, Dumbbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Deadlifts", "Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Bentover Dumbbell Rows", "Chin-ups", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Pendelay Rows", "Rowing, T-bar", "Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Biceps Curls with Dumbbell", "Biceps Curl with Cable", "Hammercurls on Cable", "Hammercurls", "Plank", "Barbell Ab Rollout", "Hanging Leg Raises", "Cable Woodchoppers", "Side Plank", "Trunk Rotation With Cable", "Flutter Kicks"];
        $(".day-1").append(generateWorkout("Day-1"));

    }

    // if days = 2 && workout == general fitnes
    if (daysPerWeek == 2 && fitnessGoal == "gf") {

        exercises = ["Squat", "Bulgarian Split Squats", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Lateral Raises", "Pull-ups", "Bentover Dumbbell Rows", "Biceps Curls with Dumbbell", "Hammercurls", "Plank", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));



        exercises = ["Front Squats", "Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension", "Sitting Calf Raises", "Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Tricep Extensions on Cable", "Arnold Shoulder Press", "Facepull", "Front Raises", "Tricep Dumbbell Kickback", "Shrugs, Barbells", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Biceps Curl with Cable", "Hammercurls on Cable", "Hanging Leg Raises", "Cable Woodchoppers"];
        $(".day-2").append(generateWorkout("Day-2"));

    }

    // if days = 3 && workout == general fitness
    if (daysPerWeek == 3 && fitnessGoal == "gf") {

        exercises = ["Squat", "Good Mornings", "Barbell Lunges", "Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension", "standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Bent Over Rowing", "Lat Pull Down (Straight Back)", "Biceps Curls with Dumbbell", "Plank", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Front Squats", "Leg Curls (laying)", "Leg Extension", "Bench Press", "Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Barbell", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Pull-ups", "Rowing, T-bar", "Wide-grip Pulldown", "Biceps Curl with Cable", "Hammercurls on Cable", "Barbell Ab Rollout", "Hanging Leg Raises"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Low Box Squat - Wide Stance", "Weighted Step-ups", "Pause Bench", "Close-grip Bench Press", "Push Ups", "Fly With Cable", "Arnold Shoulder Press", "Facepull", "Tricep Dumbbell Kickback", "Deadlifts", "Shrugs, Barbells", "Bentover Dumbbell Rows", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Biceps Curl with Cable", "Hammercurls on Cable", "Cable Woodchoppers", "Trunk Rotation With Cable", "Flutter Kicks"];
        $(".day-3").append(generateWorkout("Day-3"));
       


    }

    // if days = 4 && workout == general fitness
    if (daysPerWeek == 4 && fitnessGoal == "gf") {

        exercises = ["Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Speed Deadlifts", "Plank", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Push Ups", "Fly With Cable", "Tricep Extensions on Cable", "Tricep Dumbbell Kickback", "Bent Over Rowing", "Bentover Dumbbell Rows", "Long-Pulley (low Row)", "Rowing, T-bar", "Biceps Curl with Cable", "Hammercurls on Cable", "Barbell Ab Rollout", "Trunk Rotation With Cable", ];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Front Squats", "Barbell Lunges", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Trunk Rotation With Cable", "Flutter Kicks"];
        $(".day-3").append(generateWorkout("Day-3"));
       


        exercises = ["Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Shoulder Press, Barbell", "Arnold Shoulder Press", "Facepull", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Shrugs, Barbells", "Pull-ups", "Lat Pull Down (Straight Back)", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Hammercurls", "Hanging Leg Raises"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);

    }


    // if days = 5 && workout == general fitness
    if (daysPerWeek == 5 && fitnessGoal == "bb") {

        exercises = ["Squat", "Front Squats", "Low Box Squat - Wide Stance", "Bulgarian Split Squats", "Barbell Hack Squats", "Good Mornings", "Barbell Lunges", "Pistol Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Barbell Ab Rollout", "Side Plank", "Planks"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Bench Press", "Pause Bench", "Incline Bench Press", "Close-grip Bench Press", "Tricep Dips", "Push Ups", "Incline Dumbbell Flye", "Fly With Cable", "Flutter Kicks"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Bentover Dumbbell Rows", "Chin-ups", "Underhand Lat Pull Down", "Hanging Leg Raises", "Cable Woodchoppers", "Trunk Rotation With Cable"];
        $(".day-3").append(generateWorkout("Day-3"));
       


        exercises = ["Incline Bench Press", "Incline Dumbbell Flye", "Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Lateral Raises", "Front Raises", "Cable Woodchoppers", "Side Plank"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);


        exercises = ["Close-grip Bench Press", "Tricep Extensions on Cable", "Tricep Dumbbell Kickback", "Chin-ups", "Biceps Curls with Barbell", "Biceps Curl with Cable", "Hammercurls on Cable", "Plank", "Barbell Ab Rollout", "Hanging Leg Raises", "Flutter Kicks"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);

    }

    // if days = 6 && workout == general fitness
    if (daysPerWeek == 6 && fitnessGoal == "gf") {

        exercises = ["Squat", "Leg Presses (narrow)", "Barbell Lunges", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));


        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Plank"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bentover Dumbbell Rows", "Rowing, T-bar", "Biceps Curls with Dumbbell", "Hammercurls", "Hanging Leg Raises"];
        $(".day-3").append(generateWorkout("Day-3"));
       


        exercises = ["Front Squats", "Bulgarian Split Squats", "Pistol Squat", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Cable Woodchoppers"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);


        exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Trunk Rotation With Cable"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);


        exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Lat Pull Down (Straight Back)", "Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curl with Cable", "Hammercurls on Cable", "Barbell Ab Rollout"];
        $(".day-6").append(generateWorkout("Day-6"));
        // $(".day-6").prepend(workoutButton);

    }

    // if days = 7 && workout == general fitness
    if (daysPerWeek == 7 && fitnessGoal == "gf") {

        exercises = ["Squat", "Leg Presses (narrow)", "Barbell Lunges", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Side Plank"];
        $(".day-1").append(generateWorkout("Day-1"));

        exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Plank"];
        $(".day-2").append(generateWorkout("Day-2"));


        exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bentover Dumbbell Rows", "Rowing, T-bar", "Biceps Curls with Dumbbell", "Hammercurls", "Hanging Leg Raises"];
        $(".day-3").append(generateWorkout("Day-3"));
       


        exercises = ["Front Squats", "Bulgarian Split Squats", "Pistol Squat", "Leg Curls (laying)", "Leg Extension", "Standing Calf Raises", "Sitting Calf Raises", "Cable Woodchoppers"];
        $(".day-4").append(generateWorkout("Day-4"));
        // $(".day-4").prepend(workoutButton);


        exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Front Raises", "Tricep Dumbbell Kickback", "Trunk Rotation With Cable"];
        $(".day-5").append(generateWorkout("Day-5"));
        // $(".day-5").prepend(workoutButton);


        exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Lat Pull Down (Straight Back)", "Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curl with Cable", "Hammercurls on Cable", "Barbell Ab Rollout"];
        $(".day-6").append(generateWorkout("Day-6"));
        // $(".day-6").prepend(workoutButton);


        $(".day-7").append("<h2>Day 7 - Stretch, Sleep, Eat, Recover. Don't work out every day.<h2>");

    }

}

$(function () {

    $("#submitGoals").on("click", function () {
        mainProgram();
    });
});