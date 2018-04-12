$.noConflict();
jQuery(document).ready(function($) {

 //question data
  var scienceQuestions = [
    {
      lesson: "Electricity",
      context: "This simple electrical circuit is made up of a battery, wire, light bulb and switch.",
      stem: "Which element controls the flow of electric charges?",
      image: "<img src ='sci0.jpg' class='answer-image'>",
      answers: [
        {
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
        }
      ]
    }, {
      lesson: "Electricity",
      context: "A student observed an event and said, 'That was caused by static electricity!'",
      stem: "What event did the student observe?",
      image: "<img src ='sci1.jpg' class='answer-image'>",
      answers: [
         {
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
        }
      ]
    }, {
      lesson: "Electricity",
      context: " If an electric circuit has a power source connected to devices, one after the other,",
      stem: " it is an example of",
      image: "<img src ='sci2.jpg' class='answer-image'>",
      answers: [
        {
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

        }
      ]
    }, {
      lesson: "Electricity",
      context: "<p></p>",
      stem: "How is electricity usually brought to your house?",
      image: "<img src ='sci3.jpg' class='answer-image'>",
      answers: [
        {
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
        }
      ]
    }, {
      lesson: "Electricity",
      context: "This simple electrical circuit is made up of a battery, wire, light bulb and switch.",
      stem: "Which element serves as the energy source of the circuit?",
      image: "<img src ='sci4.jpg' class='answer-image'>",
      answers: [
        {
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
        }
      ]
    }
  ];

  var mathQuestions = [
    {
      lesson: "Place Value Multiplication",
      context: "Question 1 After the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
      stem: "Which of the following best defines the Articles of Confederation?",
      answers: [
        {
          text: "The first constitution of the United States.",
          correct: true,
          feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
        }, {
          text: "The treaty that ended the American Revolution.",
          correct: false,
          feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
        }, {
          text: "The agreement between the U.S. And France to pay off war debts.",
          correct: false,
          feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
        }, {
          text: "The first American Bill of Rights.",
          correct: false,
          feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
        }
      ]
    }, {
      lesson: "Electricity",
      context: "Question 2 After the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
      stem: "Which of the following best defines the Articles of Confederation?",
      answers: [
        {
          text: "The first constitution of the United States.",
          correct: true,
          feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
        }, {
          text: "The treaty that ended the American Revolution.",
          correct: false,
          feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
        }, {
          text: "The agreement between the U.S. And France to pay off war debts.",
          correct: false,
          feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
        }, {
          letter: "d",
          text: "The first American Bill of Rights.",
          correct: false,

          feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
        }
      ]
    }, {
      lesson: "Electricity",
      context: " Question 3 After the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
      stem: "Which of the following best defines the Articles of Confederation?",
      answers: [
        {
          text: "The first constitution of the United States.",
          correct: true,
          feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
        }, {
          text: "The treaty that ended the American Revolution.",
          correct: false,
          feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
        }, {
          text: "The agreement between the U.S. And France to pay off war debts.",
          correct: false,
          feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
        }, {
          letter: "d",
          text: "The first American Bill of Rights.",
          correct: false,
          feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
        }
      ]
    }, {
      lesson: "Electricity",
      context: " Question 4 Question After the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
      stem: "Which of the following best defines the Articles of Confederation?",
      answers: [
        {
          text: "The first constitution of the United States.",
          correct: true,
          feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
        }, {
          text: "The treaty that ended the American Revolution.",
          correct: false,
          feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
        }, {
          text: "The agreement between the U.S. And France to pay off war debts.",
          correct: false,
          feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
        }, {
          letter: "d",
          text: "The first American Bill of Rights.",
          correct: false,
          feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
        }
      ]
    }, {
      lesson: "Electricity",
      context: "AQuestion 5 fter the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
      stem: "Which of the following best defines the Articles of Confederation?",
      answers: [
        {
          text: "The first constitution of the United States.",
          correct: true,
          feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
        }, {
          text: "The treaty that ended the American Revolution.",
          correct: false,
          feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
        }, {
          text: "The agreement between the U.S. And France to pay off war debts.",
          correct: false,
          feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
        }, {
          letter: "d",
          text: "The first American Bill of Rights.",
          correct: false,
          feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
        }
      ]
    }
  ];

    //--------------------------//
   //      Dom Elements
  //--------------------------//
  //Holder Divs
  var frameDiv = $("#frame");
  var questionDiv = $("#question");
  var questionHTML = $("<div>").attr({'id': 'questionText'});
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

  selectLast = function() {
    $(".selected").prev().addClass("selected");
    $(".selected").next().removeClass("selected");
  }
  var selectNext = function() {
    $(".selected").next().addClass("selected");
    $(".selected").prev().removeClass("selected");
  }


//----click handlers ----//

  sbSelectBtn.click(function() {
    $(".selected").click()
  });

  sbUp.click(function() {
    selectLast();
  })

  sbDwn.click(function() {
    selectNext();
  });

  sbRt.click(function() {
    selectNext();
    nextQhandler();
  });


  sbLft.click(function() {
    selectLast();
    lastQuestion();
  });

  sbMenuBtn.click(function() {
    frameDiv.empty();
    clearGlobals();
    renderMenu();
  });

  function nextQhandler(){
      if (currentLesson[1] != null){
        nextQuestion();
      }
    }

  function lastQhandler(){
      if (currentLesson[1] != null){
        lastQuestion();
      }
    }
  // document.onkeydown = function myFunction() {
  //   switch (event.keyCode) {
  //     case 38:
  //       console.log("Up key is pressed");
  //       selectLast();
  //       break;
  //     case 40:
  //       console.log("Down key is pressed");
  //       selectNext();
  //       break;
  //     case 37:
  //       selectLast();
  //       console.log("Right key is pressed");
  //       break;
  //     case 39:
  //       selectNext();
  //       console.log("left key is pressed");
  //       break;
  //     case 13:
  //       $(".selected").click();
  //       break;
  //   }
  // };
  // ---- Globals -----//

  var currentLesson = [];
  var questionCounter = 0;
  var currentMode = 0;
  var score = 0;
  var questionBank = [];
  var gotRight = [];
  var mistakes = [];
  var reviewLesson = [];
  var animationTimeout;

  var clearGlobals = function(){
    currentLesson = [];
    questionBank = [];
    questionCounter = 0;
    currentMode = 0;
    questionCount = 0;
    score = 0;
    gotRight = [];
    mistakes = [];
    reviewLesson = [];
  }

  function unbindThis(){
    $(this).off()
  }




  //----------------------------//
  //------- Menu Routing-------//
  //--------------------------//

  function renderMenu() {

    clearGlobals();
    // $(".answerBtn").off();

    clearTimeout(animationTimeout);
    console.log('renderMenu questionCounter', questionCounter)
    var mainMenu = $("<input type='image' ind='0' data = 'Math' value='large' class ='sbSubject selected' src='math.png'/>" + "<input type='image' ind='0' data = 'Science' value='large' class='sbSubject' src='science.png'/>");

    toggleFrame(mainMenu);

    changeHeading("Choose a Subject");

    // subjectMenuDiv = $("<div class='sbjdiv'>")
    //User Selects Subject, Append Subject Menu
    var subjectMenu = $("<h3 class='lessonTitle selected'></h3>");

    var mathSubjectMenu = $("<h4 class='menu-disabled'>Add-Subtract Whole Numbers</h4><h4 class='menu-disabled'>Multiply-Divide Whole Numbers</h4><h4 class='menu-disabled'>Compare and Order</h4>");

    var sciSubjectMenu = $("<h4 class='menu-disabled'>Add-Subtract Whole Numbers</h4><h4 class='menu-disabled'>Multiply-Divide Whole Numbers</h4><h4 class='menu-disabled'>Compare and Order</h4>");

    $('.sbSubject').click(function() {
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
        case "C":
          console.log("Make Test");
      }
    });
    //   User Selects Lesson, Append Lesson Menu
    //
    subjectMenu.click(function() {

      currentLessonTitle = titleText;
      console.log("Lesson Title Click");
      var titleText = $(this).text();
      renderLessonMenu(titleText);
      changeHeading("Choose a Mode");
    });

    function renderLessonMenu(titleText) {

      clearTimeout(animationTimeout);

      var lessonMenu = $("<h3>" + titleText + "</h3><br><h3 class='lessonMenuitem aclick selected' data='A'>A)Play Lesson</h5><h3 class='lessonMenuitem bclick' data='B'>B) Study</h3><h3 class='lessonMenuitem cclick' data='C'>C) Test</h3>");
      toggleFrame(lessonMenu);

      var lessonTitle = titleText.toLowerCase().replace(/\s+/g, '');
      var selectedAnimation = lessonTitle + ".mp4";

      $(".lessonMenuitem").click(function() {
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
      // $(".answerBtn").addClass('lessonBtn');
      //
      // $(".lessonBtn").click(function(){
      //   var choiceId = $(this).attr("value");
      //   console.log(choiceId);
      //   $("." + choiceId + "click").trigger("click");
      //
      // });
    };
  };

  renderMenu();

  //Play Animation
  function playAnimation(vid) {
    frameDiv.empty();
    var animation = $("<video id='animation' controls autoplay width='400'><source src=" + vid + " type='video/mp4'></video>");
    frameDiv.append(animation);
    animationTimeout = setTimeout(function(){
      animation.trigger('pause');
      renderMenu();
    }, 20000);
  };

  // Builds the Html for each question.
  function makeQuestion(inputQuestion) {

    console.log(questionCounter);
    console.log(currentLesson[0].lesson);
    questionHTML.html("");
    // var questionHTML = $("<div>").attr({"id": "questionText"});
    var stem = $("<a>" + inputQuestion.context + "</a>").addClass('questionStem').append("<p>").append("<p>" + inputQuestion.stem);
    var answerBank = [];
    var answers = inputQuestion.answers;
    var questionImage = $(inputQuestion.image);

    //if answer object is correct, gives it C class, else I (incorrect) class.
    answers.forEach(function(answer) {
      if (answer.correct) {
        var html = $("<a>" + answer.text + "</a>").addClass("answers").attr({value: "C", feedback: answer.feedback}).append("<br>");
        answerBank.push(html);
      } else {
        var html = $("<a>" + answer.text + "</a>").addClass("answers").attr({value: "I", feedback: answer.feedback}).append("<br>");
        answerBank.push(html);

      };
    });

    //randomize answers
    shuffle(answerBank);

    //assigns letter value to radomized answers
    $(answerBank[0]).attr({"id": "answa", "data-letter": "a"}).prepend("<a id='ansBtnA'><img class='answer-icon' src='iconA.png' id = 'iconA' alt='A) ' width='25' height='25'>");
    $(answerBank[1]).attr({"id": "answb", "data-letter": "b"}).prepend("<a id='ansBtnB'><img class='answer-icon' src='iconB.png' id = 'iconB' alt='B) ' width='25' height='25'>");;
    $(answerBank[2]).attr({"id": "answc", "data-letter": "c"}).prepend("<a id='ansBtnC'><img class='answer-icon' src='iconC.png' id = 'iconC'alt='C) ' width='25' height='25'> ");;
    $(answerBank[3]).attr({"id": "answd", "data-letter": "d"}).prepend("<a id='ansBtnD'><img class='answer-icon' src='iconD.png'id = 'iconD' alt='D) ' width='25' height='25'> ");;
    // ("<a id='ansBtnA'><img class='answer-icon' src='btn.png' alt='B) ' width='42' height='42'>");
    answerBank.forEach(function(answer) {

      $(stem).append(answer);
    });
    //
    // var questionNavLft = $("<img src='sbLeft.png' id='quesNavLeft' class='quesNav'>");
    // var questionNavRt = $("<img src='sbRight.png' id='quesNavRight' class='quesNav'>");

    questionHTML.append(stem);
    questionHTML.append(questionImage);


    toggleFrame(questionHTML);

  };


  $(".answerBtn").click(function() {
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
    console.log(answerChoice);
    console.log(btnId);

    var iconX = $("<img src='iconX.png' height='25 width ='25' class='x-icon'>");
    var iconY = $("<img src='iconY.png' height='25 width ='25' class='y-icon'>");

    switch (true) {
      case((correct === "C") && (currentMode >= 1)):
        gotRight.push(currentLesson[questionCounter]);
        score ++;
        nextQuestion();
        break;
      case((correct === "I") && (currentMode >= 1)):
        mistakes.push(currentLesson[questionCounter]);
        nextQuestion();
        break;
      case((correct === "C") && (currentMode < 1) && (unAnswered() === 0)):
        answerChoice.prepend(iconY);
        $(btnId).addClass("correct");
        toggleFeedback(feedbackText)
        break;
      case((correct === "I") && (currentMode < 1) && (unAnswered() === 0)):
        answerChoice.prepend(iconX);
        $(btnId).addClass("incorrect");
        toggleFeedback(feedbackText)
        break;
      case((correct === "C") && (unAnswered()) && (currentMode < 1)):

        answerChoice.prepend(iconY);
        gotRight.push(currentLesson[questionCounter]);
        score ;
        console.log(unAnswered() + "," + questionCounter);
        console.log("Pushed correct: " + gotRight[0]);
        toggleFeedback(feedbackText);
        break;
      case((correct === "I") && (unAnswered()) && (currentMode < 1)):
        answerChoice.prepend(iconX);
        mistakes.push(currentLesson[questionCounter]);
        console.log(unAnswered() + "," + questionCounter);
        console.log("Pushed wrong: " + gotRight[0]);
        toggleFeedback(feedbackText);
        break;
    }

  };

  var unAnswered = function() {
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
    frameDiv.append(feedbackDiv);
    questionHTML.hide();
    feedbackDiv.html("<div>" + feedbackText + "<h5 id='closeBtn' class='selected'>Close</h5><div>").addClass('feedback');
    $("#feedbackDiv").click(function() {
      $("#feedbackDiv").remove();
      questionHTML.show();
    })
  };

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
    } else{
      var firstQuestion = mistakes[0];
      makeQuestion(firstQuestion);
    }
  };


  function makeTest(inputLesson) {

    makeStudy(inputLesson);
    currentMode ++;
  };

  function nextQuestion() {
    if(unAnswered()){
      mistakes.push(mistakes.push(currentLesson[questionCounter]));
      console.log("pushed incorrect");
    }


      $(".incorrect").removeClass("incorrect");
      $("incorrect").removeClass("incorrect");
      // feedbackDiv.html('');
      questionCounter ++;
      console.log(questionCounter);
      if (questionCounter >= currentLesson.length) {
        studyScore();
      } else {
        makeQuestion(currentLesson[questionCounter])
      }


  }

  function lastQuestion() {
    $(".correct").removeClass("correct");
    $(".incorrect").removeClass("incorrect");
    makeQuestion(currentLesson[questionCounter - 1])
  }

  var reviewMistakes = function() {
    mistakes.forEach((ques) => {
      reviewLesson.push(ques);
    });
    questionCounter = 0;
    currentMode = 0;
    score = 0;
    mistakes = [];
    currentLesson = reviewLesson;
    console.log(currentLesson.length);
    makeQuestion(currentLesson[0]);
  }

  function studyScore() {
    var scoreDiv = $("<div>").attr({"id": "score-Div"});
    var mistakesTitle = "<h3>" + currentLesson[0].lesson + "</h3>";
    var finalScore = "<h3>Score: " + (
    gotRight.length / currentLesson.length) * 100 + "%</h3>";
    var reviewH3 = $("<h3 id='rev-mistakes'>").text("Review Mistakes").css("text-align", "right").click(reviewMistakes).addClass("selected");
    sbLft.removeClass('lastQ');
    sbRt.removeClass('nextQ');
    scoreDiv.append(mistakesTitle, finalScore, reviewH3);
    toggleFrame(scoreDiv);
    changeHeading("Scores");

  };

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
