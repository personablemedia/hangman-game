window.onload = function () {

  var championBoxers  = ["ali", "duran", "marvelous", "miketyson", "sugarrayleonard"];

  var championBoxersPhoto = ["assets/images/ali.gif","assets/images/duran.gif",
  "assets/images/marvalous.gif","assets/images/tyson.gif", "assets/images/SRL.gif"];

  var getHint ;           // Word getHint
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives = 10;             // Lives
  var counter = 0 ;           // Count correct guesses
  var space;              // Number of spaces in word '-'
  var wins = 0;

  // Get elements
  var showLives = document.getElementById("myLives");
  var showWins = document.getElementById("myWins");
  var showGuesses = document.getElementById("myGuesses");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  // Play
  getWord = function () {
    if (wins < championBoxers.length) {
      word = championBoxers[wins];
      $("#clue img").attr("src", championBoxersPhoto[wins]);
    }

    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    console.log(word.length);
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      guess.innerHTML = "_";
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  //Reset
  document.getElementById('reset').onclick = function() {
    reset();
  };

  reset = function() {
    lives = 10;
    guesses = [ ];
    counter = 0;
    space = 0;
    $("#clue img").attr("src", "assets/images/gloves.jpg");
  };

  //Hint
  document.getElementById('hint').onclick = function() {
    //display the boxers gif image
    $("#clue img").attr("src", championBoxersPhoto[wins]);
  };

  document.onkeyup = function(event) {
    console.log(guesses);
    if (guesses == '') {
      getWord();
      canvas();
    } else {
      check(event.key);
    }
  };

 check = function (newGuess) {
    var guess = newGuess;
    showGuesses = document.getElementById("myGuesses");
    showGuesses.append(guess);
    showGuesses.innterHTML = showGuesses;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        guesses[i].innerHTML = guess;
        counter += 1;
      }
    }
    var j = (word.indexOf(guess));
    if (j === -1) { lives -= 1;
      animate(lives);
    }
    livesRemaining();
  };

  // Show lives
   livesRemaining = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over! Press any key to play again.";
      reset();
    }
    if (counter == word.length) {
      showLives.innerHTML = "You Win! Press any key to play again.";
      wins += 1;
      showWins.innerHTML = "Wins:" + wins;
      reset();
    }
  };


  // Animate man
  var animate = function (lives) {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  // Animate man
  //create Canvas
  //tutorial on w3 schools about Canvas
  //draw the cursor where to go and draw the line
  //draw circles  context.stroke draws the line

   // Hangman
  canvas =  function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
  };

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  }

   frame1 = function() {
     draw (0, 150, 150, 150);
   };

   frame2 = function() {
     draw (10, 0, 10, 600);
   };

   frame3 = function() {
     draw (0, 5, 70, 5);
   };

   frame4 = function() {
     draw (60, 5, 60, 15);
   };

   torso = function() {
     draw (60, 36, 60, 70);
   };

   rightArm = function() {
     draw (60, 46, 100, 50);
   };

   leftArm = function() {
     draw (60, 46, 20, 50);
   };

   rightLeg = function() {
     draw (60, 70, 100, 100);
   };

   leftLeg = function() {
     draw (60, 70, 20, 100);
   };

   head = function(){
     myStickman = document.getElementById("stickman");
     context = myStickman.getContext('2d');
     context.beginPath();
     context.arc(60, 25, 10, 0, Math.PI*2, true);
     context.stroke();
   }

   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];

     };
