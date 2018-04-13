$.noConflict();
jQuery(document).ready(function($) {

  //question data
  var scienceQuestions = [{
    lesson: "Electricity",
    context: "This simple electrical circuit is made up of a battery, wire, light bulb and switch.",
    stem: "Which element controls the flow of electric charges?",
    image: "<img src ='sci0.jpg' class='answer-image'>",
    answers: [{
      text: "the switch",
      correct: true,
      feedback: "<p>The switch controls the flow of electric charges.</p>"
    }, {
      text: "the wire",
      correct: false,
      feedback: "<p>The wire is the means of transfer from the energy source through the circuit.</p><p>What element of the circuit would control the electric charges?</p>"
    }, {
      text: "the light bulb",
      correct: false,
      feedback: "<p>The light bulb is the resistor that slows the flow of current.</p><p>What element of the circuit would control the electric charges?</p>"
    }, {
      text: "the battery",
      correct: false,
      feedback: "<p>The battery serves as the energy source.</p><p> What element of the circuit would control the electric charges?</p>"
    }]
  }, {
    lesson: "Electricity",
    context: "A student observed an event and said, 'That was caused by static electricity!'",
    stem: "What event did the student observe?",
    image: "<img src ='sci1.jpg' class='answer-image'>",
    answers: [{
      text: "lightning flashing in the sky",
      correct: true,
      feedback: "<p>Lightning is an example of static electricity. </p><p>In storm clouds, the positive particles gather near the top and the negative particles gather near the bottom. </p> <p>This static electricity is eventually released as lightning.</p>"
    }, {
      text: "the Sun's rays providing light",
      correct: false,
      feedback: "<p>The Sun's rays are not an example of static electricity. </p>Static electricity occurs when positive and negative charges do not balance.</p>"
    }, {
      text: "a flashlight shining in the dark",
      correct: false,
      feedback: "<p>A flashlight shining is an example of chemical energy transforming into light energy.</p><p>It is not an example of static electricity.</p>"
    }, {
      letter: "d",
      text: "a campfire crackling at night",
      correct: false,

      feedback: "<p>The crackle of a campfire is not caused by static electricity. </p><p>When positive and negative charges do not balance, static electricity occurs.</p>"
    }]
  }, {
    lesson: "Electricity",
    context: " If an electric circuit has a power source connected to devices, one after the other,",
    stem: " it is an example of",
    image: "<img src ='sci2.jpg' class='answer-image'>",
    answers: [{
      text: "a series circuit.",
      correct: true,
      feedback: "<p>A series circuit has a power source connected to devices, one after the other.</p><p>If the circuit is broken, none of the devices receives current.</p>"
    }, {
      text: "static electricity.",
      correct: false,
      feedback: "<p>Static electricity is an electric charge that gathers on an object instead of flowing through it as a current.</p>"
    }, {
      text: "a conductor.",
      correct: false,
      feedback: "<p>A conductor is a material that allows energy, such as heat, electricity, sound or light, to pass through it.</p>"
    }, {
      letter: "d",
      text: "a parallel circuit.",
      correct: false,
      feedback: "<p>A parallel circuit has a power source connected directly to two or more devices.</p><p>If the circuit is broken, only one device stops receiving current.</p>"

    }]
  }, {
    lesson: "Electricity",
    context: "<p></p>",
    stem: "How is electricity usually brought to your house?",
    image: "<img src ='sci3.jpg' class='answer-image'>",
    answers: [{
      text: "wires",
      correct: true,
      feedback: "<p>Electricity travels from place to place through wires.</p>"
    }, {
      text: "water",
      correct: false,
      feedback: "<p>Electricity is not carried by water.</p> It is harnessed in another way and brought to your house.</p>"
    }, {
      text: "air",
      correct: false,
      feedback: "<p>Electricity is not carried by air.</p><p>It is harnessed in another way and brought to your house.</p>",
    }, {
      letter: "d",
      text: "trucks",
      correct: false,
      feedback: "<p>Electricity is not carried by trucks.</p><p> Trucks can be used sometimes to carry special portable machines that can generate electricity.</p>"
    }]
  }, {
    lesson: "Electricity",
    context: "This simple electrical circuit is made up of a battery, wire, light bulb and switch.",
    stem: "Which element serves as the energy source of the circuit?",
    image: "<img src ='sci4.jpg' class='answer-image'>",
    answers: [{
      text: "the battery",
      correct: true,
      feedback: "<p>In the simple electrical circuit described, the battery serves as the energy source.</p>"
    }, {
      text: "the wire",
      correct: false,
      feedback: "<p>The wire is the means of energy transfer.</p><p> Which element provides the power?</p>"
    }, {
      text: "the switch",
      correct: false,
      feedback: "<p>In the simple electrical circuit described, the switch controls the flow of electric charges.</p><p> Which element provides the power?</p>"
    }, {
      letter: "d",
      text: "the light bulb",
      correct: false,
      feedback: "<p>In the simple electrical circuit described, the light bulb is the resistor that slows the flow of current.</p><p>Which element provides the power?</p>"
    }]
  }];

  var mathQuestions = [{
    lesson: "Place Value Multiplication",
    context: "There are 24 teams in a kickball contest. Each team has 12 players.",
    stem: "Which expression shows the total number of players?",
    image: "<img src ='img/ma0.png' class='answer-image'>",
    answers: [{
      text: "(24 x 10) + (24 x 2)",
      correct: true,
      feedback: "<img src='img/ma00.png' class='feedback-img' /><p>This expression shows the multiplication.</p>"
    }, {
      text: "(24 x 10) + (12 x 2)",
      correct: false,
      feedback: "<img src='img/ma00.png' /><p>Find the expression that shows this sum.</p>"
    }, {
      text: "(2 x 20) + (4 x 2)",
      correct: false,
      feedback: "<img src='img/ma00.png' /><p>Find the expression that shows this sum.</p>"
    }, {
      text: "(24 x 10) + (24 x 12)",
      correct: false,
      feedback: "<img src='img/ma00.png' /><p>Find the expression that shows this sum.</p>"
    }]
  }, {
    lesson: "Place Value Multiplication",
    context: "Jerome helps at his uncle's pet shop. The shop has 46 fish tanks with 12 fish in each tank.",
    stem: "How many fish are in all of the tanks together?",
    image: "<img src ='img/ma1.png' class='answer-image'>",
    answers: [{
      text: "552 fish",
      correct: true,
      feedback: "<img src='img/ma1c.png' />"
    }, {
      text: "382 fish",
      correct: false,
      feedback: "<img src='img/ma1i.png' />"
    }, {
      text: "632 fish",
      correct: false,
      feedback: "<img src='img/ma1i.png' />"
    }, {
      text: "452 fish",
      correct: false,
      feedback: "<img src='img/ma1i.png' />"
    }]
  }, {
    lesson: "Place Value Multiplication",
    context: "Each of the 3 children in the Carlton family collected 2,502 soda cans to recycle.<br />3 x 2,502 = ___",
    stem: "Which expression will find the total number of cans?<br />",
    image: "<img src ='img/ma2.png' class='answer-image'>",
    answers: [{
      text: "(3 x 2,000) + (3 x 500) + (3 x 2)",
      correct: true,
      feedback: "<img src='img/ma2c.png' />"
    }, {
      text: "(3 x 25) + (3 x 2)",
      correct: false,
      feedback: "<img src='img/ma2i.png' />"
    }, {
      text: "(2 x 2500) + (1 x 2)",
      correct: false,
      feedback: "<img src='img/ma2i.png' />"
    }, {
      letter: "d",
      text: "(3 x 2,000) + (3 x 50) + (3 x 2)",
      correct: false,
      feedback: "<img src='img/ma2i.png' />"
    }]
  }, {
    lesson: "Place Value Multiplication",
    context: " Farmer James plants 761 watermelon seeds each year. The expression below shows the amount he plants in 8 years.<br />8 x 761 = ___",
    stem: "Which expression can be used to fill in the blank?",
    image: "<img src ='img/ma3.png' class='answer-image'>",
    answers: [{
      text: "(8 x 700) + (8 x 60) + (8 x 1)",
      correct: true,
      feedback: "<img src='img/ma3c.png' />"
    }, {
      text: "(8 x 70) + (8 x 6) + (8 x 1)",
      correct: false,
      feedback: "<img src='img/ma3i.png' />"
    }, {
      text: "(8 x 76) + (8 x 1)",
      correct: false,
      feedback: "<img src='img/ma3i.png' />"
    }, {
      letter: "d",
      text: "(8 x 70) + (8 x 61)",
      correct: false,
      feedback: "<img src='img/ma3i.png' />"
    }]
  }, {
    lesson: "Place Value Multiplication",
    context: "The Sugar and Spice Bakery made 12 trays of cookies. Each tray holds 24 cookies.",
    stem: "How many cookies did the bakery make?",
    image: "<img src ='img/ma4.png' class='answer-image'>",
    answers: [{
      text: "288 cookies",
      correct: true,
      feedback: "<img src='img/ma4c.png' />"
    }, {
      text: "248 cookies",
      correct: false,
      feedback: "<img src='img/ma4c.png' />"
    }, {
      text: "1,284 cookies",
      correct: false,
      feedback: "<img src='img/ma4c.png' />"
    }, {
      letter: "d",
      text: "348 cookies",
      correct: false,
      feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
    }]
  }];

  setTimeout(function(){
    $("#lessonData").hide(3000)
  },7000);

  $('#info-button').on('click', function(){
    $('#lessonData').toggle(3000);
  });


  //--------------------------//
  //      Dom Elements
  //--------------------------//
  //Holder Divs
  var frameDiv = $("#frame");
  var questionDiv = $("#question");
  var questionHTML = $("<div>").attr({
    'id': 'questionText'
  });
  var feedbackDiv = $("<div id='feedbackDiv'>");
  var animationDiv = $("#animation");

  //arrow navigators
  var sbUp = $("#sbUp");
  var sbLft = $("#sbLft");
  var sbRt = $("#sbRt");
  var sbDwn = $("#sbDwn");

  var sbSelectBtn = $("#sbSelectBtn");
  var sbMenuBtn = $("#sbMenuBtn");

  var menuHeading = $("<h3>").addClass("menu-heading");
  var selectable = $(".selectable");
  var selected = $(".selected");



  //--------------------------//
  //-- DOM helper functions --//
  //--------------------------//
  function toggleFrame(show) {
    frameDiv.empty();
    frameDiv.append(show);
    show.show();
  }

  function changeHeading(newText) {
    frameDiv.prepend(menuHeading.text(newText));
  }

  selectLast = function () {
    $(".selected").prev().addClass("selected");
    $(".selected").next().removeClass("selected");
  };

  var selectNext = function () {
    $(".selected").next().addClass("selected");
    $(".selected").prev().removeClass("selected");
  };


  //----click handlers ----//

  sbSelectBtn.click(function () {
    $(".selected").click()
  });

  sbUp.click(function () {
    selectLast();
  });

  sbDwn.click(function () {
    selectNext();
  });

  sbRt.click(function () {
    selectNext();
    nextQhandler();
  });


  sbLft.click(function () {
    selectLast();
    lastQuestion();
  });

  sbMenuBtn.click(function () {
    frameDiv.empty();
    clearGlobals();
    renderMenu();
  });

  function nextQhandler() {
    if (currentLesson[1] != null) {
      nextQuestion();
    }
  }

  function lastQhandler() {
    if (currentLesson[1] != null) {
      lastQuestion();
    }
  }

  // ---- Globals -----//

  var currentLesson = []; 
  //array of questions. Right now just toggling between math/science
  var questionCounter = 0; 
  //questionCounter is used as the index of the question array to show. 
  var currentMode = 0; 
  //currentMode is 0 for study, 1 for test. 
  var gotRight = []; 
  //Correct Answer Holder
  var mistakes = [];
   //Incorrect Answers Holder
  var reviewLesson = []; 
  //Incorrect Answers are pushed here. Current Lesson can be set to reviewLesson
  var animationTimeout; 
  //Callback variable for ending the animation. Currently set to pause at 20sec and render menu. 

  //Clear it all out for next lesson. 
  var clearGlobals = function () {
    currentLesson = [];
    questionCounter = 0;
    currentMode = 0;
    questionCount = 0;
    gotRight = [];
    mistakes = [];
    reviewLesson = [];
  };

  //Had some issues with repeated click listeners. Kept this in here in case they pop up again.
  function unbindThis() {
    $(this).off();
  }


    //-----------------------------------//
   //------- Menu Rendering & Nav-------//
  //-----------------------------------//

  function renderMenu() {

    clearGlobals();
    // $(".answerBtn").off();

    clearTimeout(animationTimeout);
    console.log('renderMenu questionCounter', questionCounter)
    var mainMenu = $("<div class='main-menu'><input type='image' ind='0' data = 'Math' value='large' class ='sbSubject selected' src='math.png'/>" + "<input type='image' ind='0' data = 'Science' value='large' class='sbSubject' src='science.png'/>");

    var viewScores = $("<h4>View Scores</h4>").attr({
      "id": "view-scores",
      "data": 'Scores',
      'class': 'sbSubject'
    }).css({
      'width': '125px',
      'float': 'right',
      'margin-top': '-15px'
    });

    mainMenu.append(viewScores);

    toggleFrame(mainMenu);

    changeHeading("Choose a Subject");

    // subjectMenuDiv = $("<div class='sbjdiv'>")
    //User Selects Subject, Append Subject Menu
    var subjectMenu = $("<h3 class='lessonTitle selected'></h3>");

    var mathSubjectMenu = $("<h4 class='menu-disabled'>Add-Subtract Whole Numbers</h4><h4 class='menu-disabled'>Multiply-Divide Whole Numbers</h4><h4 class='menu-disabled'>Compare and Order</h4>");

    var sciSubjectMenu = $("<h4 class='menu-disabled'>Properties of Matter</h4><h4 class='menu-disabled'>Energy Forms</h4><h4 class='menu-disabled'> Forces and Motion</h4>");

    $('.sbSubject').click(function () {
      var selectedMenu = $(this).attr("data");
      console.log(selectedMenu);
      changeHeading("Choose a Lesson");
      switch (selectedMenu) {
        case "Math":
          subjectMenu.text("Place Value Multiplication");
          toggleFrame(subjectMenu);
          frameDiv.append(mathSubjectMenu)
          changeHeading("Choose a Lesson");
          break;
        case "Science":
          subjectMenu.text("Electricity")
          toggleFrame(subjectMenu);
          frameDiv.append(sciSubjectMenu);
          changeHeading("Choose a Lesson");
          break;
        case "Scores":
          toggleFrame($("<img src='img/scores.png' id='scores-table' />"));
          changeHeading("Scores");
      }
    });
  
    //   User Selects Lesson, Append Lesson Menu
    subjectMenu.click(function () {
      currentLessonTitle = titleText;
      console.log("Lesson Title Click");
      var titleText = $(this).text();
      renderLessonMenu(titleText);
      changeHeading("Choose a Mode");
    });

    function renderLessonMenu(titleText) {
      clearTimeout(animationTimeout);

      var lessonMenu = $("<h3>" + titleText + "</h3><br><h3 class='lessonMenuitem aclick selected' data='A'>Play Lesson</h5><h3 class='lessonMenuitem bclick' data='B'>Study</h3><h3 class='lessonMenuitem cclick' data='C'>Test</h3>");
      toggleFrame(lessonMenu);

      var lessonTitle = titleText.toLowerCase().replace(/\s+/g, '');
      var selectedAnimation = lessonTitle + ".mp4";

      $(".lessonMenuitem").click(function () {
        var lessonMi = $(this).attr('data');
        switch (lessonMi) {
          case "A":
            playAnimation(selectedAnimation);
            break;
          case "B":
            //
            console.log("make Study");
            makeStudy(titleText);
            break;
          case "C":
            console.log("Make Test");
            makeTest(titleText);
            break;
        }
      });  
  }
  }
  renderMenu();

  //Play Animation
  function playAnimation(vid) {
    frameDiv.empty();
    var animation = $("<video id='animation' controls autoplay width='400'><source src=" + vid + " type='video/mp4'></video>");
    frameDiv.append(animation);
    animationTimeout = setTimeout(function () {
      animation.trigger('pause');
      renderMenu();
    }, 20000);
  }

  // Builds the Html for each question.
  function makeQuestion(inputQuestion) {

    console.log(questionCounter);
    console.log(currentLesson[0].lesson);
    console.log("lesson length: " + currentLesson.length);
    questionHTML.html("");
    // var questionHTML = $("<div>").attr({"id": "questionText"});
    var stem = $("<a>" + inputQuestion.context + "</a>").addClass('questionStem').append("<p>").append("<p>" + inputQuestion.stem);
    var answerBank = [];
    var answers = inputQuestion.answers;
    var questionImage = $(inputQuestion.image);

    //if answer object is correct, gives it C class, else I (incorrect) class.
    answers.forEach(function (answer) {
      if (answer.correct) {
        var html = $("<a>" + answer.text + "</a>").addClass("answers").attr({
          value: "C",
          feedback: answer.feedback
        }).append("<br>");
        answerBank.push(html);
      } else {
        var html = $("<a>" + answer.text + "</a>").addClass("answers").attr({
          value: "I",
          feedback: answer.feedback
        }).append("<br>");
        answerBank.push(html);
      }
    });

    //randomize answers
    shuffle(answerBank);

    //assigns letter value to radomized answers
    $(answerBank[0]).attr({
      "id": "answa",
      "data-letter": "a"
    }).prepend("<a id='ansBtnA'><img class='answer-icon' src='iconA.png' id = 'iconA' alt='A) ' width='25' height='25'>");
    $(answerBank[1]).attr({
      "id": "answb",
      "data-letter": "b"
    }).prepend("<a id='ansBtnB'><img class='answer-icon' src='iconB.png' id = 'iconB' alt='B) ' width='25' height='25'>");;
    $(answerBank[2]).attr({
      "id": "answc",
      "data-letter": "c"
    }).prepend("<a id='ansBtnC'><img class='answer-icon' src='iconC.png' id = 'iconC'alt='C) ' width='25' height='25'> ");;
    $(answerBank[3]).attr({
      "id": "answd",
      "data-letter": "d"
    }).prepend("<a id='ansBtnD'><img class='answer-icon' src='iconD.png'id = 'iconD' alt='D) ' width='25' height='25'> ");;
    // ("<a id='ansBtnA'><img class='answer-icon' src='btn.png' alt='B) ' width='42' height='42'>");
    answerBank.forEach(function (answer) {

      $(stem).append(answer);
    }); 
    questionHTML.append(stem);
    questionHTML.append(questionImage);

    toggleFrame(questionHTML);
  }
  //end of makeQuestion()


  $(".answerBtn").click(function () {
    var choiceId = $(this).attr("value");
    var btnId = $(this).attr('id');
    checker(choiceId, btnId);
  });
  
  //Answer click handlers
  //If a button is clicked, pulls the letter value
  //Calls checker function, which pulls corresponsing answer feedback data from the DOM

  function checker(choiceId, btnId) {
    console.log('checker question count = ' + questionCounter);
    var answerChoice = $("#answ" + choiceId);
    var correct = answerChoice.attr("value");
    var feedbackText = answerChoice.attr("feedback");

  //Correct/Incorrect Icons
    var iconX = $("<img src='iconX.png' height='25 width ='25' class='x-icon'>");
    var iconY = $("<img src='iconY.png' height='25 width ='25' class='y-icon'>");

    //Messy Switch statement to handle whether to score a question and/or move on. 
    switch (true) {
      case ((correct === "C") && (currentMode >= 1)):
        gotRight.push(currentLesson[questionCounter]);
        nextQuestion();
        break;
      case ((correct === "I") && (currentMode >= 1)):
        mistakes.push(currentLesson[questionCounter]);
        nextQuestion();
        break;
      case ((correct === "C") && (currentMode < 1) && (unAnswered() === 0)):
        answerChoice.prepend(iconY);
        $(btnId).addClass("correct");
        toggleFeedback(feedbackText);
        break;
      case ((correct === "I") && (currentMode < 1) && (unAnswered() === 0)):
        answerChoice.prepend(iconX);
        $(btnId).addClass("incorrect");
        toggleFeedback(feedbackText);
        break;
      case ((correct === "C") && (unAnswered()) && (currentMode < 1)):
        answerChoice.prepend(iconY);
        gotRight.push(currentLesson[questionCounter]);
        console.log("Pushed correct");
        toggleFeedback(feedbackText);
        break;
      case ((correct === "I") && (unAnswered()) && (currentMode < 1)):
        answerChoice.prepend(iconX);
        mistakes.push(currentLesson[questionCounter]);
        console.log(unAnswered() + "," + questionCounter);
        console.log("Pushed wrong" + gotRight[0]);
        toggleFeedback(feedbackText);
        break;
    }
  }

  var unAnswered = function () {
    var answered = mistakes.length + gotRight.length;
    var questionCount = questionCounter + 1;
    if (answered < questionCount) {
      return true;
    } else if (answered >= questionCount) {
      return 0;
    }
  }

  //Toggle handler for diplaying/hiding feedback
  function toggleFeedback(feedbackText) {
    questionHTML.hide();
    frameDiv.append(feedbackDiv);

    feedbackDiv.html("<p>" + feedbackText + "<h5 id='closeBtn' class='selected'>Close</h5><div>").addClass('feedback');
    $("#feedbackDiv").click(function () {
      $("#feedbackDiv").remove();
      questionHTML.show();
    });
  }

  function makeStudy(inputLesson) {
    questionCounter = 0;
    currentMode = 0;
    console.log("makeStudy question counter" + questionCounter);
    sbLft.addClass('lastQ');
    sbRt.addClass('nextQ');
    $(".lessonBtn").removeClass("lessonBtn");
    if (inputLesson === "Electricity") {
      currentLesson = scienceQuestions;
      var firstQuestion = scienceQuestions[0];
      makeQuestion(firstQuestion);
    } else if (inputLesson === "Place Value Multiplication") {
      currentLesson = mathQuestions;
      var firstQuestion = mathQuestions[0];
      makeQuestion(firstQuestion);
    } else {
      var firstQuestion = mistakes[0];
      makeQuestion(firstQuestion);
    }
  }

  function makeTest(inputLesson) {
    makeStudy(inputLesson);
    currentMode++;
  }

  function nextQuestion() {
    if (unAnswered()) {
      mistakes.push(mistakes.push(currentLesson[questionCounter]));
      console.log("pushed incorrect");
    }
    $(".incorrect").removeClass("incorrect");
    $("incorrect").removeClass("incorrect");
    // feedbackDiv.html('');
    questionCounter++;

    if (questionCounter >= currentLesson.length) {
      studyScore();
    } else {
      makeQuestion(currentLesson[questionCounter]);
    }
  }

  function lastQuestion() {
    $(".correct").removeClass("correct");
    $(".incorrect").removeClass("incorrect");
    makeQuestion(currentLesson[questionCounter - 1]);
  }

  var reviewMistakes = function() { 
    //Push mistakes into a new lesson for review mistakes.
    mistakes.forEach(function(ques){
      reviewLesson.push(ques);
    });
    //reset counter, so iteration via nextQuestion() can continue
    questionCounter = 0;
    currentMode = 0;
    mistakes = [];
    currentLesson = reviewLesson;
    console.log(currentLesson.length);
    makeQuestion(currentLesson[0]);
  };

  //Calculates score after lesson, appends the score screen. 
  function studyScore() {
    var scoreDiv = $("<div>").attr({
      "id": "score-Div"
    });
    var mistakesTitle = "<h3>" + currentLesson[0].lesson + "</h3>";
    var finalScore = "<h3>Score: " + (
      gotRight.length / 5) * 100 + "%</h3>";
    var reviewH3 = $("<h3 id='rev-mistakes'>").text("Review Mistakes").css("text-align", "right").click(reviewMistakes).addClass("selected");
    sbLft.removeClass('lastQ');
    sbRt.removeClass('nextQ');
    scoreDiv.append(mistakesTitle, finalScore, reviewH3);
    toggleFrame(scoreDiv);
    changeHeading("Scores");
  }

  //--------------------------//
  //---- Helper Functions ----//
  //--------------------------//
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  
});