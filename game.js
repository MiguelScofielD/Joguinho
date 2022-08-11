var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(".btn2").click(function() {
  $(".btn2").hide();
  $("#level-title").text("Level " + level);

  nextSequence();
});


$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  //var userChosenColour = $(this).attr("id");
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checar(userClickedPattern.length - 1);

});

function checar(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("sucesso");

    if (userClickedPattern.length === gamePattern.length) {

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function() {
        nextSequence();
      }, 1000);

    }
  } else {

    console.log("wrong");
    $(".btn2").html("Play Again").show();
    $("#level-title").text("GAME OVER!");
    level = 0;
    gamePattern = [];

  }
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(colour) {
  $("." + colour).addClass("pressed");

  setTimeout(function() {
    $("." + colour).removeClass('pressed');
  }, 100)
}

function nextSequence() {


  $("#level-title").text("Level " + level);
  level++;
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).addClass("pressed");

  setTimeout(function() {
    $("#" + randomChosenColour).removeClass('pressed');
  }, 100)

  playSound(randomChosenColour);


}
