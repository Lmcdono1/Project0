// get the API 
// create a variable to hold the exercises that you want to grab from it
var queryURL = "https://wger.de/api/v2/exercise/?format=json&limit=530&language=2&status=2";

var exercises = ["Squats", "Bench Press"];


// create a function to query the api 
// function generateWorkout(){

    // for (var i = 0; i < exercises.length; i++){
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            for(var i = 0 ; i < response.results.length; i++){

                var exercise = response.results[i];
                // console.log(exercise);

                for (var j = 0; j < exercises.length; j++){

                    if (exercise.name == exercises[j]){
                        console.log(exercise);
                        $(".workout").append(JSON.stringify(exercise));

                    }
                    
                }

                
                

            }
            
        })
    // }
    
// }




// if days = 1 && workout == powerlifting{
    // display alert "You should really consider working out more than 1 day per week to make progress"
    // create a full body work out with 10 exercises ( warm up, cool down?)
    //
    //      include squats, bench, deadlift

// }


// if days = 2 && workout == powerlifting
    // create a full body work out with 10 exercises ( warm up, cool down?)
    //      include squats, bench, deadlift

// if days = 3 && workout == powerlifting
    // create three full body works out with 6 exercises ( warm up, cool down?)
    //      include squats, bench, deadlift


// if days = 4 && workout == powerlifting
    // create 4 work out with 5 exercises ( warm up, cool down?)
    //      include squats, bench, deadlift

// if days = 5 && workout == powerlifting
    // create 5 work outs with  two squat days, 2 bench days, and one deadlift day

// if days = 6 && workout == powerlifting
    // create 6 work outs with two squat days, 2 bench days, and 2 deadlift days

// if days = 7 && workout == powerlifting
    // create 6 work outs where two days are relatively light and one day is an active recovery day






// if days = 1 && workout == bodybuilding
        // display alert "You should really consider working out more than 1 day per week to make progress"
    // create a full body work out with 10 exercises ( warm up, cool down?)
    //      include squats, bench, deadlift


// if days = 2 && workout == bodybuilding


// if days = 3 && workout == bodybuilding


// if days = 4 && workout == bodybuilding


// if days = 5 && workout == bodybuilding


// if days = 6 && workout == bodybuilding


// if days = 7 && workout == bodybuilding




// if days = 1 && workout == general fitness


// if days = 2 && workout == general fitnes


// if days = 3 && workout == general fitness


// if days = 4 && workout == general fitness


// if days = 5 && workout == general fitness


// if days = 6 && workout == general fitness


// if days = 7 && workout == general fitness



