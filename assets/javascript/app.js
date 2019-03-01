// Start game on click
$('#start').on("click", function() {
    game.start();
  })
  
  var questions = [{
    question: "What is the capital of Sweden",
    answers:[" Stockholm ", " Helsinki ", " Copenhagen ", " Amsterdam "],
    correctAnswer: " Stockholm "
  }, {
    question: "What is the capital of Austria?",
    answers:[" Munich ", " Salzburg ", " Berlin ", " Vienna "],
    correctAnswer: " Vienna "
  }, {
    question: "What is the capital of Czech Republic?",
    answers:[" Sofia ", " Budapest ", " Prague ", " Zagreb "],
    correctAnswer: " Prague "
  },{
    question: "What is the capital of Spain?",
    answers:[" Barcelona ", " Lisabon ", " Seville ", " Madrid "],
    correctAnswer: " Madrid "
  }
];
     
  var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function() {
      game.counter--;
      $('#counter').html(game.counter);
      if(game.counter === 0){
        game.done();
      }
    },
    
    start: function(){
  //timer decrease time by 1 second
      timer = setInterval(game.countdown, 1000);
  // Put timer in html
      $('#subcontainer').prepend('<h2> Time Remaining: <span id="counter">20</span> Seconds </h2>')
  // remove start button
      $('#start').remove();
  // Put the questions and answers in the html
      for (var i =0; i < questions.length; i++){
        $('#subcontainer').append('<h3>' + questions[i].question + '</h3>')
        for (var j = 0; j < questions[i].answers.length; j++){
          $('#subcontainer').append('<input type="radio" class="radio" name="question-' + i + '"value="' + questions[i].answers[j] + '">  ' + questions[i].answers[j])
        }
      }
      $('.radio').on('click', function() {
        if($( "input:checked" ).length === 4 ) {
            game.done();
        }
      })
    },

    done: function(){
      $.each($('input[name="question-0"]:checked'), function(){
        if($(this) === questions[0].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-1"]:checked'), function(){
       if($(this).val() === questions[1].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
     });
     $.each($('input[name="question-2"]:checked'), function(){
       if($(this).val() === questions[2].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
     });
     $.each($('input[name="question-3"]:checked'), function(){
        if($(this).val() === questions[3].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
     });
     $.each($('input[name="question-4"]:checked'), function(){
        if($(this).val() === questions[4].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
     });
     this.result();
    },
    result: function(){
      clearInterval(timer);
      clockRunning = false;
      $('#subcontainer h2').remove();
      $('#subcontainer').html('<h2>Game over!</h2>');
      $('#subcontainer').append('<h3>Correct Answers: ' + game.correct + '</h3>');
      $('#subcontainer').append('<h3>Inorrect Answers: ' + game.incorrect + '</h3>');
    }
  //  closes game function 
  };