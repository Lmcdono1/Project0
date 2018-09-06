$( document ).ready(function() {

//Initial Hide
$("#hide").ready(function(){
    $("#health").hide();
    $("#goals").hide();
    $("#workout").hide();
    $("#alert").hide();
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
    $("#alert").hide();
    event.preventDefault();

    var conceptName;
    // console.log("conceptName = "+ $("#answer1").find(":selected").text());
    if ($("#answer1").find(":selected").text() === "Yes") {
        conceptName = "Yes";
    }  
    //var conceptName = $("#answer2").find(":selected").text();
    // console.log("conceptName = "+ $("#answer2").find(":selected").text());
    if ($("#answer2").find(":selected").text() === "Yes") {
        conceptName = "Yes";
    }  
    //var conceptName = $("#answer3").find(":selected").text();
    // console.log("conceptName = "+ $("#answer3").find(":selected").text());
    if ($("#answer3").find(":selected").text() === "Yes") {
        conceptName = "Yes";
    }  
    //var conceptName = $("#answer4").find(":selected").text();
    // console.log("conceptName = "+ $("#answer4").find(":selected").text());
    if ($("#answer4").find(":selected").text() === "Yes") {
        conceptName = "Yes";
    }  
    //var conceptName = $("#answer5").find(":selected").text();
    // console.log("conceptName = "+ $("#answer5").find(":selected").text());
    if ($("#answer5").find(":selected").text() === "Yes") {
        conceptName = "Yes";
    }  
    if (conceptName === "Yes") {
        //alert("oh no!!");
        $("#health").fadeOut("slow");
        $("#alert").toggle("slow");
    } else {
        $("#health").toggle("slow");
        $("#goals").toggle("slow");
    }
    //$("#health").toggle("slow");
    //$("#goals").toggle("slow");

    
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

$("#continue").click(function(event) {
    $("#alert").toggle("slow");
    $("#goals").toggle("slow");
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