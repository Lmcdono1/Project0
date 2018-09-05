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


function generateReps(){
    var reps = 0;
    var sets = 0;
    
    if $("#fitness-goals").val() == "pl"){
        reps = Math.floor(Math.random() * 6);
        sets = Math.floor(Math.random() * 6);
    }
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
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing", "Plank"];
    $(".day-1").append(generateWorkout());
}

// if days = 2 && workout == powerlifting
// create a full body work out with 10 exercises ( warm up, cool down?)
//      include squats, bench, deadlift

if ($("#days-per-week").val() == 2 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Lunges", "Shoulder Press, Barbell", "Bent Over Rowing", "Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Rack Deadlift", "Pull-ups", "Dips", "Bulgarian Split Squat", "Barbell Ab Rollout"];
    $(".day-2").append(generateWorkout());
}

// if days = 3 && workout == powerlifting
// create three full body works out with 6 exercises ( warm up, cool down?)
//      include squats, bench, deadlift

if ($("#days-per-week").val() == 3 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Barbell Lunges", "Benchpress Dumbbells", "Romanian Deadlift", "Close-grip Lat Pull Down", "Biceps Curls With Dumbbell", "Triceps Extensions on Cable With Bar", "Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Pull-ups", "Rack Deadlift", "Bench Press", "Squats", "Tricep Extensions on Cable", "Preacher Curls", "Barbell Ab Rollout"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Arnold Shoulder Press", "Front Squats", "Biceps Curls with Barbell", "Standing Calf Raises", "Hanging Leg Raises"];
    $(".day-3").append(generateWorkout());
}

// if days = 4 && workout == powerlifting
// create 4 work out with 5 exercises ( warm up, cool down?)
//      include squats, bench, deadlift

if ($("#days-per-week").val() == 4 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Low Box Squat - Wide Stance", "Bench Press", "Front Squats", "Pull-ups", "Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Squat", "Bench Press", "Deadlifts", "Barbell Rollout"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Squat", "Bench Press", "Shoulder Press, Barbell", "Bent Over Rowing", "Hanging Leg Raises"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Weighted Step-Ups", "Bench Press Narrow Grip", "Deadlifts", "Cable Woodchoppers"];
    $(".day-4").append(generateWorkout());
}

// if days = 5 && workout == powerlifting
// create 5 work outs with  two squat days, 2 bench days, and one deadlift day
if ($("#days-per-week").val() == 5 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Deadlifts", "Barbell Lunges", "Good Mornings", "Leg Curls (laying)", "Leg Extension", "Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Barbell Ab Rollout"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Front Squats", "Barbell Lunges", "Pistol Squat", "Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension", "Hanging Leg Raises"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Tricep Dumbbell Kickback"];
    $(".day-5").append(generateWorkout());
}

// if days = 6 && workout == powerlifting
// create 6 work outs with two squat days, 2 bench days, and 2 deadlift days

if ($("#days-per-week").val() == 6 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Barbell Lunges", "Weighted Step Up", "Leg Curls (laying)", "Leg Extension", "Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Barbell Ab Rollout"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat","Barbell Lunges", "Weighted Step Up", "Leg Curls (laying)", "Leg Extension", "Plank"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Tricep Dumbbell Kickback"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
    $(".day-6").append(generateWorkout());
}


// if days = 7 && workout == powerlifting
// create 6 work outs where two days are relatively light and one day is an active recovery day
if ($("#days-per-week").val() == 7 && $("#fitness-goals").val() == "pl") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Barbell Lunges", "Weighted Step Up", "Leg Curls (laying)", "Leg Extension", "Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Barbell Ab Rollout"];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Squat","Barbell Lunges", "Weighted Step Up", "Leg Curls (laying)", "Leg Extension", "Plank"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises", "Tricep Dumbbell Kickback"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Underhand Lat Pull Down", "Biceps Curls with Barbell"];
    $(".day-6").append(generateWorkout());

    $(".day-7").append("<h2>Day 7 - Stretch, Sleep, Eat, Recover. Don't work out every day.<h2>");
 
}

// -----------------------------------------------------------------------------------------------------------
// if days = 1 && workout == bodybuilding
// display alert "You should really consider working out more than 1 day per week to make progress"
// create a full body work out with 10 exercises ( warm up, cool down?)
//include squats, bench, deadlift
if ($("#days-per-week").val() == 1 && $("#fitness-goals").val() == "bb") {
    alert("You should really consider working out more than 1 day per week to make progress");

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bulgarian Split Squats","Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Lateral Raises",  "Pull-ups", "Bentover Dumbbell Rows", "Biceps Curls with Dumbbell", "Hammercurls", "Plank", "Side Plank"];
    $(".day-1").append(generateWorkout());
}

// if days = 2 && workout == bodybuilding
if ($("#days-per-week").val() == 2 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bulgarian Split Squats","Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Lateral Raises",  "Pull-ups", "Bentover Dumbbell Rows", "Biceps Curls with Dumbbell", "Hammercurls", "Plank", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Front Squats","Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension","Sitting Calf Raises", "Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Tricep Extensions on Cable", "Arnold Shoulder Press", "Facepull", "Front Raises", "Tricep Dumbbell Kickback", "Shrugs, Barbells", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Biceps Curl with Cable","Hammercurls on Cable", "Hanging Leg Raises", "Cable Woodchoppers" ];
    $(".day-2").append(generateWorkout());
}

// if days = 3 && workout == bodybuilding
if ($("#days-per-week").val() == 3 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Good Mornings", "Barbell Lunges","Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension", "standing Calf Raises","Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Bent Over Rowing", "Lat Pull Down (Straight Back)", "Biceps Curls with Dumbbell", "Plank", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Front Squats", "Leg Curls (laying)", "Leg Extension", "Bench Press", "Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Barbell", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback",  "Pull-ups", "Rowing, T-bar", "Wide-grip Pulldown", "Biceps Curl with Cable","Hammercurls on Cable", "Barbell Ab Rollout", "Hanging Leg Raises" ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Low Box Squat - Wide Stance", "Weighted Step-ups", "Pause Bench", "Close-grip Bench Press", "Push Ups", "Fly With Cable", "Arnold Shoulder Press", "Facepull", "Tricep Dumbbell Kickback",  "Deadlifts", "Shrugs, Barbells", "Bentover Dumbbell Rows", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Biceps Curl with Cable","Hammercurls on Cable", "Cable Woodchoppers", "Trunk Rotation With Cable", "Flutter Kicks" ];
    $(".day-3").append(generateWorkout());
}


// if days = 4 && workout == bodybuilding
if ($("#days-per-week").val() == 4 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Speed Deadlifts", "Plank", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Push Ups", "Fly With Cable", "Tricep Extensions on Cable", "Tricep Dumbbell Kickback","Bent Over Rowing", "Bentover Dumbbell Rows", "Long-Pulley (low Row)", "Rowing, T-bar", "Biceps Curl with Cable","Hammercurls on Cable", "Barbell Ab Rollout", "Trunk Rotation With Cable",  ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Front Squats","Barbell Lunges", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Trunk Rotation With Cable", "Flutter Kicks" ];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Incline Bench Press","Tricep Dips", "Incline Dumbbell Flye","Shoulder Press, Barbell", "Arnold Shoulder Press", "Facepull", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback", "Shrugs, Barbells", "Pull-ups","Lat Pull Down (Straight Back)", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Hammercurls", "Hanging Leg Raises" ];
    $(".day-4").append(generateWorkout());
}

// if days = 5 && workout == bodybuilding
if ($("#days-per-week").val() == 5 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Front Squats","Low Box Squat - Wide Stance", "Bulgarian Split Squats", "Barbell Hack Squats", "Good Mornings", "Barbell Lunges","Pistol Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Barbell Ab Rollout", "Side Plank", "Planks" ];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press","Pause Bench", "Incline Bench Press", "Close-grip Bench Press", "Tricep Dips", "Push Ups","Incline Dumbbell Flye", "Fly With Cable", "Flutter Kicks" ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Bentover Dumbbell Rows","Chin-ups","Underhand Lat Pull Down", "Hanging Leg Raises", "Cable Woodchoppers", "Trunk Rotation With Cable"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Incline Bench Press", "Incline Dumbbell Flye", "Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Lateral Raises","Front Raises", "Cable Woodchoppers", "Side Plank"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Close-grip Bench Press","Tricep Extensions on Cable", "Tricep Dumbbell Kickback","Chin-ups", "Biceps Curls with Barbell", "Biceps Curl with Cable","Hammercurls on Cable", "Plank", "Barbell Ab Rollout", "Hanging Leg Raises", "Flutter Kicks" ];
    $(".day-5").append(generateWorkout());
}

// if days = 6 && workout == bodybuilding
if ($("#days-per-week").val() == 6 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Leg Presses (narrow)","Barbell Lunges", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell","Plank" ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bentover Dumbbell Rows","Rowing, T-bar","Biceps Curls with Dumbbell","Hammercurls", "Hanging Leg Raises"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Front Squats", "Bulgarian Split Squats","Pistol Squat","Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Cable Woodchoppers"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback","Trunk Rotation With Cable"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups","Lat Pull Down (Straight Back)","Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curl with Cable","Hammercurls on Cable", "Barbell Ab Rollout" ];
    $(".day-6").append(generateWorkout());

}

// if days = 7 && workout == bodybuilding
if ($("#days-per-week").val() == 7 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bulgarian Split Squats","Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Lateral Raises",  "Pull-ups", "Bentover Dumbbell Rows", "Biceps Curls with Dumbbell", "Hammercurls", "Plank", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell","Plank" ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bentover Dumbbell Rows","Rowing, T-bar","Biceps Curls with Dumbbell","Hammercurls", "Hanging Leg Raises"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Front Squats", "Bulgarian Split Squats","Pistol Squat","Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Cable Woodchoppers"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback","Trunk Rotation With Cable"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups","Lat Pull Down (Straight Back)","Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curl with Cable","Hammercurls on Cable", "Barbell Ab Rollout" ];
    $(".day-6").append(generateWorkout());


    $(".day-7").append("<h2>Day 7 - Stretch, Sleep, Eat, Recover. Don't work out every day.<h2>");
}

// ----------------------------------------------------------------------------------------------------

// if days = 1 && workout == general fitness
if ($("#days-per-week").val() == 1 && $("#fitness-goals").val() == "gf") {
    alert("You should really consider working out more than 1 day per week to make progress");

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Front Squats","Low Box Squat - Wide Stance", "Bulgarian Split Squats", "Barbell Hack Squats", "Good Mornings", "Barbell Lunges","Pistol Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Bench Press","Pause Bench", "Incline Bench Press", "Close-grip Bench Press", "Tricep Dips", "Push Ups","Incline Dumbbell Flye", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Barbell", "Shoulder Press, Dumbbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback",  "Deadlifts", "Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Bentover Dumbbell Rows","Chin-ups","Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Pendelay Rows", "Rowing, T-bar", "Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Biceps Curls with Dumbbell", "Biceps Curl with Cable","Hammercurls on Cable", "Hammercurls", "Plank", "Barbell Ab Rollout", "Hanging Leg Raises", "Cable Woodchoppers", "Side Plank", "Trunk Rotation With Cable", "Flutter Kicks" ];
    $(".day-1").append(generateWorkout());
}

// if days = 2 && workout == general fitnes
if ($("#days-per-week").val() == 2 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Bulgarian Split Squats","Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Lateral Raises",  "Pull-ups", "Bentover Dumbbell Rows", "Biceps Curls with Dumbbell", "Hammercurls", "Plank", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Front Squats","Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension","Sitting Calf Raises", "Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Tricep Extensions on Cable", "Arnold Shoulder Press", "Facepull", "Front Raises", "Tricep Dumbbell Kickback", "Shrugs, Barbells", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Biceps Curl with Cable","Hammercurls on Cable", "Hanging Leg Raises", "Cable Woodchoppers" ];
    $(".day-2").append(generateWorkout());
}

// if days = 3 && workout == general fitness
if ($("#days-per-week").val() == 3 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat", "Good Mornings", "Barbell Lunges","Leg Presses (narrow)", "Leg Curls (laying)", "Leg Extension", "standing Calf Raises","Bench Press", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell", "Bent Over Rowing", "Lat Pull Down (Straight Back)", "Biceps Curls with Dumbbell", "Plank", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Front Squats", "Leg Curls (laying)", "Leg Extension", "Bench Press", "Incline Bench Press", "Tricep Dips", "Incline Dumbbell Flye", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Barbell", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback",  "Pull-ups", "Rowing, T-bar", "Wide-grip Pulldown", "Biceps Curl with Cable","Hammercurls on Cable", "Barbell Ab Rollout", "Hanging Leg Raises" ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Low Box Squat - Wide Stance", "Weighted Step-ups", "Pause Bench", "Close-grip Bench Press", "Push Ups", "Fly With Cable", "Arnold Shoulder Press", "Facepull", "Tricep Dumbbell Kickback",  "Deadlifts", "Shrugs, Barbells", "Bentover Dumbbell Rows", "Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Biceps Curl with Cable","Hammercurls on Cable", "Cable Woodchoppers", "Trunk Rotation With Cable", "Flutter Kicks" ];
    $(".day-3").append(generateWorkout());
}

// if days = 4 && workout == general fitness
if ($("#days-per-week").val() == 4 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Speed Deadlifts", "Plank", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Push Ups", "Fly With Cable", "Tricep Extensions on Cable", "Tricep Dumbbell Kickback","Bent Over Rowing", "Bentover Dumbbell Rows", "Long-Pulley (low Row)", "Rowing, T-bar", "Biceps Curl with Cable","Hammercurls on Cable", "Barbell Ab Rollout", "Trunk Rotation With Cable",  ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Front Squats","Barbell Lunges", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Trunk Rotation With Cable", "Flutter Kicks" ];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Incline Bench Press","Tricep Dips", "Incline Dumbbell Flye","Shoulder Press, Barbell", "Arnold Shoulder Press", "Facepull", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback", "Shrugs, Barbells", "Pull-ups","Lat Pull Down (Straight Back)", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Hammercurls", "Hanging Leg Raises" ];
    $(".day-4").append(generateWorkout());
}


// if days = 5 && workout == general fitness
if ($("#days-per-week").val() == 5 && $("#fitness-goals").val() == "bb") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Front Squats","Low Box Squat - Wide Stance", "Bulgarian Split Squats", "Barbell Hack Squats", "Good Mornings", "Barbell Lunges","Pistol Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Barbell Ab Rollout", "Side Plank", "Planks" ];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press","Pause Bench", "Incline Bench Press", "Close-grip Bench Press", "Tricep Dips", "Push Ups","Incline Dumbbell Flye", "Fly With Cable", "Flutter Kicks" ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Bentover Dumbbell Rows","Chin-ups","Underhand Lat Pull Down", "Hanging Leg Raises", "Cable Woodchoppers", "Trunk Rotation With Cable"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Incline Bench Press", "Incline Dumbbell Flye", "Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Lateral Raises","Front Raises", "Cable Woodchoppers", "Side Plank"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Close-grip Bench Press","Tricep Extensions on Cable", "Tricep Dumbbell Kickback","Chin-ups", "Biceps Curls with Barbell", "Biceps Curl with Cable","Hammercurls on Cable", "Plank", "Barbell Ab Rollout", "Hanging Leg Raises", "Flutter Kicks" ];
    $(".day-5").append(generateWorkout());
}

// if days = 6 && workout == general fitness
if ($("#days-per-week").val() == 6 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Leg Presses (narrow)","Barbell Lunges", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell","Plank" ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bentover Dumbbell Rows","Rowing, T-bar","Biceps Curls with Dumbbell","Hammercurls", "Hanging Leg Raises"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Front Squats", "Bulgarian Split Squats","Pistol Squat","Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Cable Woodchoppers"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback","Trunk Rotation With Cable"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups","Lat Pull Down (Straight Back)","Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curl with Cable","Hammercurls on Cable", "Barbell Ab Rollout" ];
    $(".day-6").append(generateWorkout());
}

// if days = 7 && workout == general fitness
if ($("#days-per-week").val() == 7 && $("#fitness-goals").val() == "gf") {

    $(".day-1").append("<h2>Day 1<h2>");
    exercises = ["Squat","Leg Presses (narrow)","Barbell Lunges", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises", "Side Plank"];
    $(".day-1").append(generateWorkout());

    $(".day-2").append("<h2>Day 2<h2>");
    exercises = ["Bench Press", "Incline Bench Press", "Tricep Dips", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Dumbbell","Plank" ];
    $(".day-2").append(generateWorkout());

    $(".day-3").append("<h2>Day 3<h2>");
    exercises = ["Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bentover Dumbbell Rows","Rowing, T-bar","Biceps Curls with Dumbbell","Hammercurls", "Hanging Leg Raises"];
    $(".day-3").append(generateWorkout());

    $(".day-4").append("<h2>Day 4<h2>");
    exercises = ["Front Squats", "Bulgarian Split Squats","Pistol Squat","Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Cable Woodchoppers"];
    $(".day-4").append(generateWorkout());

    $(".day-5").append("<h2>Day 5<h2>");
    exercises = ["Shoulder Press, Barbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback","Trunk Rotation With Cable"];
    $(".day-5").append(generateWorkout());

    $(".day-6").append("<h2>Day 6<h2>");
    exercises = ["Speed Deadlifts", "Shrugs, Barbells", "Pull-ups","Lat Pull Down (Straight Back)","Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curl with Cable","Hammercurls on Cable", "Barbell Ab Rollout" ];
    $(".day-6").append(generateWorkout());

    $(".day-7").append("<h2>Day 7 - Stretch, Sleep, Eat, Recover. Don't work out every day.<h2>");
}

$(".day-1").append("<h2>Day 1<h2>");
exercises = ["Squat","Front Squats","Low Box Squat - Wide Stance", "Bulgarian Split Squats", "Barbell Hack Squats", "Good Mornings", "Barbell Lunges","Pistol Squat", "Leg Presses (narrow)", "Weighted Step-ups", "Leg Curls (laying)", "Leg Extension","Standing Calf Raises","Sitting Calf Raises", "Bench Press","Pause Bench", "Incline Bench Press", "Close-grip Bench Press", "Tricep Dips", "Push Ups","Incline Dumbbell Flye", "Fly With Cable", "Tricep Extensions on Cable", "Shoulder Press, Barbell", "Shoulder Press, Dumbbell", "Arnold Shoulder Press", "High Pull", "Facepull", "Lateral Raises","Front Raises", "Tricep Dumbbell Kickback",  "Deadlifts", "Speed Deadlifts", "Shrugs, Barbells", "Pull-ups", "Bent Over Rowing", "Bentover Dumbbell Rows","Chin-ups","Lat Pull Down (Straight Back)", "Long-Pulley (low Row)", "Pendelay Rows", "Rowing, T-bar", "Wide-grip Pulldown", "Underhand Lat Pull Down", "Biceps Curls with Barbell", "Biceps Curls with Dumbbell", "Biceps Curl with Cable","Hammercurls on Cable", "Hammercurls", "Plank", "Barbell Ab Rollout", "Hanging Leg Raises", "Cable Woodchoppers", "Side Plank", "Trunk Rotation With Cable", "Flutter Kicks" ];
$(".day-1").append(generateWorkout());

   
    