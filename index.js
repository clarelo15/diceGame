function start(){
  // Player1
  var randomNumber1 = Math.random() * 6;
  randomNumber1 = Math.floor(randomNumber1) + 1;
  console.log(randomNumber1);

  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
  var image1 = document.querySelector(".img1");

  image1.setAttribute("src", randomDiceImage1);


  // Player2
  var randomNumber2 = Math.random() * 6;
  randomNumber2 = Math.floor(randomNumber2) + 1;
  console.log(randomNumber2);

  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  var image2 = document.querySelector(".img2");

  image2.setAttribute("src", randomDiceImage2);


  //Compare 2 players
  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
    var sound = new Audio("sound/ding.mp3");
    sound.play();
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
    var sound = new Audio("sound/ding.mp3");
    sound.play();
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }

}
