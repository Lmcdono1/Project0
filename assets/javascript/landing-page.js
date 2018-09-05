$( document ).ready(function() {

//Initial Hide
$("#hide").ready(function(){
    $("#health").hide();
    $("#goals").hide();
    $("#workout").hide();
});
//Get Started Button
$("#getStarted").click(function() {
    $("#landing").toggle("slow");
    $("#health").toggle("slow");
    // $("#hide").click(function(){
    //     $("#landing").hide();
    //     $("#workout").toggle("slow");
    //     $("#goals").toggle("slow");
    // });
  });

//Health Form Submission
$("#submitHealth").click(function(event) {
    event.preventDefault();
    console.log("hello");
    var conceptName = $("#answer1").find(":selected").text();
    console.log("conceptName = "+ conceptName);
    var conceptName = $("#answer2").find(":selected").text();
    console.log("conceptName = "+ conceptName);
    var conceptName = $("#answer3").find(":selected").text();
    console.log("conceptName = "+ conceptName);
    var conceptName = $("#answer4").find(":selected").text();
    console.log("conceptName = "+ conceptName);
    var conceptName = $("#answer5").find(":selected").text();
    console.log("conceptName = "+ conceptName);
    
    $("#health").toggle("slow");
    $("#goals").toggle("slow");

    
    // $("#hide").click(function(){
    //     $("#landing").hide();
    //     $("#health").toggle("slow");
    //     $("#workout").toggle("slow");
    // });
    //$("#workout").toggle("slow");
    //if (value="a"){
        //alert("Please consult a doctor before starting a fitness program!")
    //}
  });

//Goals Submission
$("#submitGoals").click(function(event) {
    event.preventDefault();
    $("#goals").toggle("slow");
    $("#workout").toggle("slow");
    //$("#hide").click(function(){
        //$("#landing").hide();
        //$("#health").toggle("slow");
        //$("#goals").toggle("slow");
    });
  //});


});