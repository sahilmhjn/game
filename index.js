 var arr=["green","red","yellow","blue"];
 // what system has given
 var choice=[];
 // what user has clicked
 var userClicked=[];
 var level =0;
 var started= false;

 $(document).keypress(function(){
   // enters only when 
   if(choice.length==0){
      level++;
      //$("#level-title").text("Level " + level);
     nextSequence();
   }

});
 function nextSequence(){
   // as soon as nextSequence is called userClicked is reset
   userClicked=[];
   $("#level-title").text("Level "+level);
   level++;
    var randomNumber= Math.floor(Math.random()*4);
    var buttonChoose= randomNumber;
    choice.push(arr[buttonChoose]);
    $("#"+ arr[buttonChoose]).fadeOut(100).fadeIn(100);
    playSound(arr[buttonChoose]);
 }


 //User Click
 $(".btn").click(function(event){
    var userChosenColour = $(this).attr("id");
    $("#"+ userChosenColour).fadeOut(100).fadeIn(100);
    // console.log(userChosenColour);
    userClicked.push(userChosenColour);
    playSound(userChosenColour);
    animatePressed(userChosenColour);
    check(userClicked.length-1);
 });


 // to play sound
 function playSound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();
 }


 // blur animation
 function animatePressed(currentColor){
   $("#"+currentColor).addClass("pressed");
   setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
   },100);
 }
 // to check whether the choice is correct or not
 function check(index){
      if(choice[index]=== userClicked[index])
      console.log("correct");
      else{
         console.log("wrong");
         playSound("wrong");
         $("body").addClass("game-over");
         setTimeout(function(){
            $("body").removeClass("game-over");
           },100);
         
            $("h1").html("Game Over, Press Any Key to Restart");
         choice=[];
         level=0;
      } 
      if(choice.length=== userClicked.length &&choice[index]=== userClicked[index] ){
         setTimeout(function () {
            nextSequence();
          }, 1000);
      }
 }
