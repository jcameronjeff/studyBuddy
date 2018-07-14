$.noConflict();
jQuery(document).ready(function ($) {
  //question data
  var scienceQuestions = [
    {
      lesson: "Electricity",
      context: "This simple electrical circuit is made up of a battery, wire, light bulb and swi" +
          "tch.",
      stem: "Which element controls the flow of electric charges?",
      image: "<img src ='img/sci0.jpg' class='answer-image'>",
      answers: [
        {
          text: "the switch",
          correct: true,
          feedback: "<p>The switch controls the flow of electric charges.</p>"
        }, {
          text: "the wire",
          correct: false,
          feedback: "<p>The wire is the means of transfer from the energy source through the circuit." +
              "</p><p>What element of the circuit would control the electric charges?</p>"
        }, {
          text: "the light bulb",
          correct: false,
          feedback: "<p>The light bulb is the resistor that slows the flow of current.</p><p>What ele" +
              "ment of the circuit would control the electric charges?</p>"
        }, {
          text: "the battery",
          correct: false,
          feedback: "<p>The battery serves as the energy source.</p><p> What element of the circuit w" +
              "ould control the electric charges?</p>"
        }
      ]
    }, {
      lesson: "Electricity",

      context: "A student observed an event and said, 'That was caused by static electricity!'",
      stem: "What event did the student observe?",
      image: "<img src ='img/sci1.jpg' class='answer-image'>",
      answers: [
        {
          text: "lightning flashing in the sky",
          correct: true,
          feedback: "<p>Lightning is an example of static electricity. </p><p>In storm clouds, the po" +
              "sitive particles gather near the top and the negative particles gather near the " +
              "bottom. </p> <p>This static electricity is eventually released as lightning.</p>"
        }, {
          text: "the Sun's rays providing light",
          correct: false,
          feedback: "<p>The Sun's rays are not an example of static electricity. </p>Static electrici" +
              "ty occurs when positive and negative charges do not balance.</p>"
        }, {
          text: "a flashlight shining in the dark",
          correct: false,
          feedback: "<p>A flashlight shining is an example of chemical energy transforming into light" +
              " energy.</p><p>It is not an example of static electricity.</p>"
        }, {
          letter: "d",
          text: "a campfire crackling at night",
          correct: false,

          feedback: "<p>The crackle of a campfire is not caused by static electricity. </p><p>When po" +
              "sitive and negative charges do not balance, static electricity occurs.</p>"
        }
      ]
    }, {
      lesson: "Electricity",
      context: " If an electric circuit has a power source connected to devices, one after the o" +
          "ther,",
      stem: " it is an example of",
      image: "<img src ='img/sci2.jpg' class='answer-image'>",
      answers: [
        {
          text: "a series circuit.",
          correct: true,
          feedback: "<p>A series circuit has a power source connected to devices, one after the other" +
              ".</p><p>If the circuit is broken, none of the devices receives current.</p>"
        }, {
          text: "static electricity.",
          correct: false,
          feedback: "<p>Static electricity is an electric charge that gathers on an object instead of" +
              " flowing through it as a current.</p>"
        }, {
          text: "a conductor.",
          correct: false,
          feedback: "<p>A conductor is a material that allows energy, such as heat, electricity, soun" +
              "d or light, to pass through it.</p>"
        }, {
          letter: "d",
          text: "a parallel circuit.",
          correct: false,
          feedback: "<p>A parallel circuit has a power source connected directly to two or more devic" +
              "es.</p><p>If the circuit is broken, only one device stops receiving current.</p>"
        }
      ]
    }, {
      lesson: "Electricity",
      context: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
      stem: "How is electricity usually brought to your house?",
      image: "<img src ='img/sci3.jpg' class='answer-image'>",
      answers: [
        {
          text: "wires",
          correct: true,
          feedback: "<p>Electricity travels from place to place through wires.</p>"
        }, {
          text: "water",
          correct: false,
          feedback: "<p>Electricity is not carried by water.</p> It is harnessed in another way and b" +
              "rought to your house.</p>"
        }, {
          text: "air",
          correct: false,
          feedback: "<p>Electricity is not carried by air.</p><p>It is harnessed in another way and b" +
              "rought to your house.</p>"
        }, {
          letter: "d",
          text: "trucks",
          correct: false,
          feedback: "<p>Electricity is not carried by trucks.</p><p> Trucks can be used sometimes to " +
              "carry special portable machines that can generate electricity.</p>"
        }
      ]
    }, {
      lesson: "Electricity",

      context: "This simple electrical circuit is made up of a battery, wire, light bulb and swi" +
          "tch.",
      stem: "Which element serves as the energy source of the circuit?",
      image: "<img src ='img/sci4.jpg' class='answer-image'>",
      answers: [
        {
          text: "the battery",
          correct: true,
          feedback: "<p>In the simple electrical circuit described, the battery serves as the energy " +
              "source.</p>"
        }, {
          text: "the wire",
          correct: false,
          feedback: "<p>The wire is the means of energy transfer.</p><p> Which element provides the p" +
              "ower?</p>"
        }, {
          text: "the switch",
          correct: false,
          feedback: "<p>In the simple electrical circuit described, the switch controls the flow of e" +
              "lectric charges.</p><p> Which element provides the power?</p>"
        }, {
          letter: "d",
          text: "the light bulb",
          correct: false,
          feedback: "<p>In the simple electrical circuit described, the light bulb is the resistor th" +
              "at slows the flow of current.</p><p>Which element provides the power?</p>"
        }
      ]
    }
  ];

  var mathQuestions = [
    {
      lesson: "Place Value Multiplication",

      context: "There are 24 teams in a kickball contest. Each team has 12 players.",
      stem: "Which expression shows the total number of players?",
      image: "<img src ='img/ma0.png' class='answer-image'>",
      answers: [
        {
          text: "(24 x 10) + (24 x 2)",
          correct: true,
          feedback: "<img  src='./img/ma00.png' class='feedback-img' /><p>This expression shows the m" +
              "ultiplication.</p>"
        }, {
          text: "(24 x 10) + (12 x 2)",
          correct: false,
          feedback: "<img  src='./img/ma00.png' /><p>Find the expression that shows this sum.</p>"
        }, {
          text: "(2 x 20) + (4 x 2)",
          correct: false,
          feedback: "<img  src='./img/ma00.png' /><p>Find the expression that shows this sum.</p>"
        }, {
          text: "(24 x 10) + (24 x 12)",
          correct: false,
          feedback: "<img  src='./img/ma00.png' /><p>Find the expression that shows this sum.</p>"
        }
      ]
    }, {
      lesson: "Place Value Multiplication",

      context: "Jerome helps at his uncle's pet shop. The shop has 46 fish tanks with 12 fish in" +
          " each tank.",
      stem: "How many fish are in all of the tanks together?",
      image: "<img src ='img/ma1.png' class='answer-image'>",
      answers: [
        {
          text: "552 fish",
          correct: true,
          feedback: "<img  src='./img/ma1c.png' />"
        }, {
          text: "382 fish",
          correct: false,
          feedback: "<img  src='./img/ma1i.png' />"
        }, {
          text: "632 fish",
          correct: false,
          feedback: "<img  src='./img/ma1i.png' />"
        }, {
          text: "452 fish",
          correct: false,
          feedback: "<img  src='./img/ma1i.png' />"
        }
      ]
    }, {
      lesson: "Place Value Multiplication",

      context: "Each of the 3 children in the Carlton family collected 2,502 soda cans to recycl" +
          "e.<br />3 x 2,502 = ___",
      stem: "Which expression will find the total number of cans?<br />",
      image: "<img src ='img/ma2.jpg' class='answer-image'>",
      answers: [
        {
          text: "(3 x 2,000) + (3 x 500) + (3 x 2)",
          correct: true,
          feedback: "<img  src='./img/ma2c.png' />"
        }, {
          text: "(3 x 25) + (3 x 2)",
          correct: false,
          feedback: "<img  src='./img/ma2i.png' />"
        }, {
          text: "(2 x 2500) + (1 x 2)",
          correct: false,
          feedback: "<img  src='./img/ma2i.png' />"
        }, {
          letter: "d",
          text: "(3 x 2,000) + (3 x 50) + (3 x 2)",
          correct: false,
          feedback: "<img  src='./img/ma2i.png' />"
        }
      ]
    }, {
      lesson: "Place Value Multiplication",

      context: " Farmer James plants 761 watermelon seeds each year. The expression below shows " +
          "the amount he plants in 8 years. 8 x 761 = ___",
      stem: "Which expression can be used to fill in the blank?",
      image: "<img src ='img/ma3.png' class='answer-image'>",
      answers: [
        {
          text: "(8 x 700) + (8 x 60) + (8 x 1)",
          correct: true,
          feedback: "<img  src='./img/ma3c.png' />"
        }, {
          text: "(8 x 70) + (8 x 6) + (8 x 1)",
          correct: false,
          feedback: "<img  src='./img/ma3i.png' />"
        }, {
          text: "(8 x 76) + (8 x 1)",
          correct: false,
          feedback: "<img  src='./img/ma3i.png' />"
        }, {
          letter: "d",
          text: "(8 x 70) + (8 x 61)",
          correct: false,
          feedback: "<img  src='./img/ma3i.png' />"
        }
      ]
    }, {
      lesson: "Place Value Multiplication",
      context: "The Sugar and Spice Bakery made 12 trays of cookies. Each tray holds 24 cookies.",
      stem: "How many cookies did the bakery make?",
      image: "<img src ='img/ma4.png' class='answer-image'>",
      answers: [
        {
          text: "288 cookies",
          correct: true,
          feedback: "<img   src='./img/ma4c.png' />"
        }, {
          text: "248 cookies",
          correct: false,
          feedback: "<img   src='./img/ma4c.png' />"
        }, {
          text: "1,284 cookies",
          correct: false,
          feedback: "<img   src='./img/ma4c.png' />"
        }, {
          letter: "d",
          text: "348 cookies",
          correct: false,
          feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced " +
              "the Articles of Confederation in 1791.</p><p>  The Articles of Confederation cam" +
              "e before the US Constitution. </p>"
        }
      ]
    }
  ];

  // --------------------------//      Dom Elements --------------------------//
  // Holder Divs
  var frameDiv = $("#frame");
  var questionDiv = $("#question");
  var questionHTML = $("<div>").attr({id: "questionText"});

  var sbContainer = $("#studyBuddy");
  var feedbackDiv = $("<div id='feedbackDiv'>");
  var animationDiv = $("#animation");

  var quesBottom = $("<span id='questionBottom'><a>Press</a> <img   src='./img/iconQ.png' id='bottomQ'" +
      " width='25 px'> <a>for feedback</a></span>");

  var hiddenMenus;
  //arrow navigators
  var sbUp = $("#sbUp");
  var sbLft = $("#sbLft");
  var sbRt = $("#sbRt");
  var sbDwn = $("#sbDwn");

  var sbSelectBtn = $("#sbSelectBtn");
  var sbMenuBtn = $("#sbMenuBtn");

  var selectable = $(".selectable");
  var selected = $(".selected");

  // --------------------------// -- DOM helper functions --//
  // --------------------------//
  function toggleFrame(show) {
    frameDiv
      .children()
      .hide();
    frameDiv.append(show);
    show.show();
    $(".selected").removeClass("selected");
  }

  selectLast = function () {
    $(".selected")
      .prev()
      .addClass("selected");
    $(".selected")
      .next()
      .removeClass("selected");
  };

  var selectNext = function () {
    if (!$(".selected").length) {
      console.log("no selected");
      $(".selectable:visible")
        .first()
        .addClass("selected");
    } else {
      $(".selected")
        .next()
        .addClass("selected");
      $(".selected")
        .prev()
        .removeClass("selected");
    }
  };

  function highlight(x) {
    console.log("clicked");
    $(x).addClass("highlight");

    setTimeout(function () {
      $(x).removeClass("highlight");
    }, 2000);
  }

  //----click handlers ----//

  sbSelectBtn
    .click(function () {
      highlight(this);
      $(".selected:visible").click();
      console.log("hidden menus: " + $(".navItem:hidden").length);
    });

  sbUp.click(function () {
    highlight($(this).children());
    selectLast();
  });

  sbDwn.click(function () {
    highlight($(this).children());
    selectNext();
  });

  sbRt.click(function () {
    highlight($(this).children());
    if ($("#feedbackDiv:visible").length) {
      $("#feedbackDiv").remove();
      questionHTML.show();
      $("#FBarrow").remove();
    }

    selectNext();
    nextQhandler();
  });

  sbLft.click(function () {
    highlight($(this).children());

    if ($("#feedbackDiv:visible").length) {
      $("#feedbackDiv").remove();
      questionHTML.show();
      $("#FBarrow").remove();
      $("#questionBottom").show();
    } else {
      selectLast();
      lastQhandler();
    }
  });

  /**
  |--------------------------------------------------
  | Menu Button
  |--------------------------------------------------
  */

  sbMenuBtn.click(function () {
    highlight(this);
    // set global hiddenMenus variable
    hiddenMenus = $(".navItem:hidden").length;
    //get last hidden menu
    var previous = hiddenMenus - 1;
    console.log("hiddenMenus: " + hiddenMenus);
    console.log(typeof hiddenMenus);
    if (typeof hiddenMenus != null && hiddenMenus == 1) {
      frameDiv
        .children()
        .remove();
      renderMenu();
      clearGlobals();
      console.log("framediv was less than two");
    } else if (hiddenMenus > 1 && hiddenMenus < 3) {
      var lastMenu = $(`.navItem:eq(${previous})`);
      $(lastMenu).show(0, function () {
        $(".navItem:visible")
          .last()
          .remove();
      });
    } else {
      $(".navItem")
        .last()
        .show();
      removeOthers();
      console.log("leaving study or test mode");
      console.log(typeof hiddenMenus);
    }
    $("#FBarrow").remove();
    $("#questionBottom").remove();
  });

  /**
  |--------------------------------------------------
  | Remove anything that is not a menu item
  |--------------------------------------------------
  */
  function removeOthers() {
    var others = frameDiv.children();

    $.each(others, function (i, element) {
      console.log("called each");
      console.log(i);
      console.log(element);
      if (i > 2) {
        $(this).remove();
        console.log(this);
      }
    });
  }

  function nextQhandler() {
    if ($("#feedbackDiv:visible").length) {
      $("#feedbackDiv").remove();
      questionHTML.show();
      $("#FBarrow").remove();
    }

    if (currentLesson[1] != null) {
      nextQuestion();
    }
  }

  function lastQhandler() {
    if ($("#feedbackDiv:visible").length) {
      $("#feedbackDiv").remove();
      questionHTML.show();
      $("#FBarrow").remove();
    }
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
  // Callback variable for ending the animation. Currently set to pause at 20sec
  // and render menu.
  var selectHistory = [];
  //Clear it all out for next lesson.
  var clearGlobals = function () {
    currentLesson = [];
    questionCounter = 0;
    currentMode = 0;
    questionCount = 0;
    gotRight = [];
    mistakes = [];
    reviewLesson = [];
    mathQuestions.forEach(function (ques) {
      ques.answered = "";
    });
    scienceQuestions.forEach(function (ques) {
      ques.answered = "";
    });
  };
  var subjectMenu;

  // -----------------------------------// ------- Menu Rendering & Nav-------//
  // -----------------------------------//

  function renderMenu() {
    console.log("ive been reset");
    clearGlobals();
    // $(".answerBtn").off();

    clearTimeout(animationTimeout);
    console.log("renderMenu questionCounter", questionCounter);
    var mainMenuDiv = $("<div class='navItem' value='0'>");
    var mainMenu = $("<div class='main-menu'><input type='image' ind='0' data = 'Math' value='large' c" +
        "lass ='sbSubject selectable'   src='./img/math.png'/><input type='image' ind='0'" +
        " data = 'Science' value='large' class='sbSubject'   src='./img/science.png'/>");

    var viewScores = $("<h4>View Scores</h4>").attr({id: "view-scores", data: "Scores", class: "sbSubject"});

    mainMenu.append(viewScores);

    var menuHeading = $("<h3 class='menu-heading'>Choose a Subject</h3>");
    mainMenuDiv.append(menuHeading);
    mainMenuDiv.append(mainMenu);

    toggleFrame(mainMenuDiv);

    // subjectMenuDiv = $("<div class='sbjdiv'>") User Selects Subject, Append
    // Subject Menu
    var subjectMenuDiv = $("<div class='navItem' value='1'><h3 class='menu-heading'>Choose a Lesson</h3>");

    subjectMenu = $("<span id='lessonTitle' class ='selectable'></span>");
    var sSubjectMenuHead = $("<span class='lessonTitle selectable'></span>");

    var mathSubjectMenu = $("<span class='menu-disabled'>Add-Subtract Whole Numbers</span><span class='menu-d" +
        "isabled'>Multiply-Divide Whole Numbers</span><span class='menu-disabled'>Compare" +
        " and Order</span>");

    var sciSubjectMenu = $("<span class='menu-disabled'>Properties of Matter</span><span class='menu-disable" +
        "d'>Energy Forms</span><span class='menu-disabled'> Forces and Motion</span>");

    $(".sbSubject").click(function () {
      var selectedMenu = $(this).attr("data");
      console.log(selectedMenu);

      switch (selectedMenu) {
        case "Math":
          subjectMenu.text("Place Value Multiplication");
          subjectMenuDiv.append(subjectMenu);
          subjectMenuDiv.append(mathSubjectMenu);
          toggleFrame(subjectMenuDiv);
          break;
        case "Science":
          subjectMenu.text("Electricity");
          subjectMenuDiv.append(subjectMenu);
          subjectMenuDiv.append(sciSubjectMenu);
          toggleFrame(subjectMenuDiv);

          break;
        case "Scores":
          toggleFrame($("<img   src='./img/scores.png' id='scores-table' />"));
      }
    });
    subjectMenu.click(function () {
      console.log("lessontitle");
      currentLessonTitle = titleText;
      console.log("Lesson Title Click");
      var titleText = $(this).text();
      renderLessonMenu(titleText);
      var second = frameDiv
        .children()
        .eq(2);
    });
  }
  renderMenu();

  //Play Animation
  function playAnimation(vid) {
    var animation = $("<video id='animation' controls autoplay width='400'><source src=" + vid + " type='video/mp4'></video>");
    console.log(vid);
    toggleFrame(animation);
    if (vid === "./animations/placevaluemultiplication.mp4") {
      animationTimeout = setTimeout(function () {
        animation.trigger("pause");
      }, 11000);
    }
  }
  //   User Selects Lesson, Append Lesson Menu

  function renderLessonMenu(titleText) {
    clearTimeout(animationTimeout);
    var lessonMenuDiv = $("<div class='navItem' value='2'><h3 class='menu-heading'>Choose a Mode</h3>");
    var lessonMenu = $("<h3 class='lessonMenuTitle'>" + titleText + "</h3><br><span class='lessonMenuitem aclick selectable' data='A'>Play Lesson</sp" +
        "an><span class='lessonMenuitem bclick' data='B'>Study</span><span class='lessonM" +
        "enuitem cclick' data='C'>Test</span>");
    lessonMenuDiv.append(lessonMenu);
    toggleFrame(lessonMenuDiv);

    var lessonTitle = titleText
      .toLowerCase()
      .replace(/\s+/g, "");
    var selectedAnimation = "./animations/" + lessonTitle + ".mp4";

    $(".lessonMenuitem").click(function () {
      var lessonMi = $(this).attr("data");
      switch (lessonMi) {
        case "A":
          playAnimation(selectedAnimation);
          break;
        case "B":
          //
          console.log("make Study");
          currentMode = 0;
          makeStudy(titleText);
          break;
        case "C":
          console.log("Make Test");
          makeTest(titleText);
          $("#questionBottom").remove();
          currentMode = 1;
          console.log("currentMode " + currentMode);
          break;
      }
    });
  }
  // Builds the Html for each question.
  function makeQuestion(inputQuestion) {
    $("#questionBottom").remove();

    console.log(questionCounter);
    console.log(currentLesson[0].lesson);
    console.log("lesson length: " + currentLesson.length);
    questionHTML.html("");
    // var questionHTML = $("<div>").attr({"id": "questionText"});
    var stem = $("<a>" + inputQuestion.context + "</a>")
      .addClass("questionStem")
      .append("<p>")
      .append("<p>" + inputQuestion.stem);
    var answerBank = [];
    var answers = inputQuestion.answers;
    var questionImage = $(inputQuestion.image);

    var answered = inputQuestion.answered;

    console.log($(answered).text());
    //if answer object is correct, gives it C class, else I (incorrect) class.
    answers.forEach(function (answer) {
      var html;
      if (answer.correct) {
        html = $("<a>" + answer.text + "</a>")
          .addClass("answers")
          .attr({value: "C", feedback: answer.feedback})
          .append("<br>");
      } else {
        html = $("<a>" + answer.text + "</a>")
          .addClass("answers")
          .attr({value: "I", feedback: answer.feedback})
          .append("<br>");
      }
      //For Review Mistakes, check for previous answer
      if (answered != null && answer.text === $(answered).text()) {
        html.addClass("prev-answered");
      }
      answerBank.push(html);
    });

    //randomize answers
    shuffle(answerBank);

    //assigns letter value to radomized answers
    $(answerBank[0])
      .attr({id: "answa", "data-letter": "a"})
      .prepend(
      //adds the abcd icons
      "<a id='ansBtnA'><img class='answer-icon'  src='./img/iconA.png' data-image='img/" +
          "iconQ.png' id = 'iconA' alt='A) ' width='25' height='25'>");

    $(answerBank[1])
      .attr({id: "answb", "data-letter": "b"})
      .prepend("<a id='ansBtnB'><img class='answer-icon'  src='./img/iconB.png' data-image='img/" +
          "iconQ.png' id = 'iconB' alt='B) ' width='25' height='25'>");
    $(answerBank[2])
      .attr({id: "answc", "data-letter": "c"})
      .prepend("<a id='ansBtnC'><img class='answer-icon'  src='./img/iconC.png' data-image='img/" +
          "iconQ.png' id = 'iconC' alt='C) ' width='25' height='25'> ");
    $(answerBank[3])
      .attr({id: "answd", "data-letter": "d"})
      .prepend("<a id='ansBtnD'><img class='answer-icon'  src='./img/iconD.png'id = 'iconD' data" +
          "-image='img/iconQ.png' alt='D) ' width='25' height='25'> ");
    //Appends answeres to question
    answerBank.forEach(function (answer) {
      $(stem).append(answer);
    });
    questionHTML.append(stem);
    questionHTML.append(questionImage);

    toggleFrame(questionHTML);
    if (currentMode < 1) {
      frameDiv.append(quesBottom);
    }

    //for review mistakes, adds X next to previous answer
    if ($(".prev-answered")) {
      $(".prev-answered").prepend("<img  src='./img/iconX.png' height='20' width ='20' class='x-icon'>");
    }
  }
  //end of makeQuestion() Answer click handlers handles user answer
  $(".answerBtn")
    .click(function () {
      highlight(this);
      if ($("#feedbackDiv:visible").length) {
        $("#feedbackDiv").remove();
        $("#FBarrow").remove();
        questionHTML.show();
        $("#questionBottom").show(// takes the button value to associate w/ corresponding answer choice
        );
      } else {
        var choiceId = $(this).attr("value");
        var btnId = $(this).attr("id");
        checker(choiceId, btnId, this);
      }
    });

  //Helper function, swaps the ABCD for a question mark
  function imgToggle(thisId, oldPic, newPic) {
    $(thisId).attr("src", newPic);
    $(thisId).attr("data-image", oldPic);
  }

  // If a button is clicked, pulls the letter value Calls checker function, which
  // pulls corresponsing answer feedback data from the DOM

  function checker(choiceId, btnId, element) {
    console.log("checker question count = " + questionCounter);
    var answerChoice = $("#answ" + choiceId);
    var correct = answerChoice.attr("value");
    var feedbackText = answerChoice.attr("feedback");
    var feedbackShown = false;
    var answerIcon = $(`#icon${choiceId.toUpperCase()}`);

    var btnPic = answerIcon.attr("src");
    var altPic = answerIcon.attr("data-image");

    //Correct/Incorrect Icons
    var iconX = $("<img  src='./img/iconX.png' height='20' width ='20' class='x-icon'>");
    var iconY = $("<img  src='./img/iconY.png' height='20' width ='20' class='y-icon'>");
    // Switch statement to handle whether to score a question and/or move on.
    switch (true) {
      case correct === "C" && currentMode >= 1:
        gotRight.push(currentLesson[questionCounter]);
        nextQuestion();
        break;
      case correct === "I" && currentMode >= 1:
        mistakes.push(currentLesson[questionCounter]);
        mistakes[mistakes.length - 1].answered = answerChoice;
        nextQuestion();
        break;
      case correct === "C" && currentMode < 1 && unAnswered() === 0:
        answerChoice.prepend(iconY);
        //toggleFeedback(feedbackText);
        break;
      case correct === "I" && currentMode < 1 && unAnswered() === 0:
        answerChoice.prepend(iconX);
        //toggleFeedback(feedbackText);
        break;
      case correct === "C" && unAnswered() && currentMode < 1:
        answerChoice.prepend(iconY);

        gotRight.push(currentLesson[questionCounter]);
        console.log("Pushed correct");
        //toggleFeedback(feedbackText);
        break;
      case correct === "I" && unAnswered() && currentMode < 1:
        answerChoice.prepend(iconX);

        mistakes.push(currentLesson[questionCounter]);
        mistakes[mistakes.length - 1].answered = answerChoice;
        console.log(unAnswered() + "," + questionCounter);
        console.log("Pushed wrong" + mistakes[mistakes.length - 1].answered);
        //toggleFeedback(feedbackText);
        break;
    }

    // Data toggler to append the X or Checkmark on first click Toggles feedback on
    // second click.
    if (currentMode < 1 && $(element).attr("data-clicked")) {
      $(element).attr("data-clicked", "");
      imgToggle(answerIcon, btnPic, altPic);
      toggleFeedback(feedbackText, answerIcon, btnPic, altPic);
    } else if (!$(element).attr("data-clicked")) {
      imgToggle(answerIcon, btnPic, altPic);
      $(element).attr("data-clicked", "clicked");
    }
  }

  //Helper function. Total answers < current question index = unAnswered
  var unAnswered = function () {
    var answered = mistakes.length + gotRight.length;
    var questionCount = questionCounter + 1;
    if (answered < questionCount) {
      return true;
    } else if (answered >= questionCount) {
      return 0;
    }
  };

  //Toggle handler for diplaying/hiding feedback
  function toggleFeedback(feedbackText, answerIcon, btnPic, altPic) {
    if ($("#feedbackDiv:visible").length) {
      $("#FBarrow").remove();
      $("#feedbackDiv").remove();
      questionHTML.show();
      $("#questionBottom").show();
    } else {
      questionHTML.hide();
      $("#questionBottom").hide();
      frameDiv.append(feedbackDiv);
      $("#studyBuddy").append("<span id='FBarrow'><a class='arrowtext'>Back</a><img  src='./img/arrows.png' wid" +
          "th='50px' style='padding-top:10px; margin-bottom: -15px'><a class='arrowtext'>Ne" +
          "xt</a></span>");
      feedbackShown = true;
      feedbackDiv
        .html("<p>" + feedbackText + "</p>")
        .addClass("feedback");
      $("#feedbackDiv").click(function () {
        $("#feedbackDiv").remove();
        $("#FBarrow").remove();
        questionHTML.show();
        $("#questionBottom").show();
        feedbackShown = false;
      });
    }
  }

  //Builds Study Mode
  function makeStudy(inputLesson) {
    clearGlobals();
    questionCounter = 0;
    console.log("makeStudy question counter" + questionCounter);
    sbLft.addClass("lastQ");
    sbRt.addClass("nextQ");
    var firstQuestion;
    $(".lessonBtn").removeClass("lessonBtn");
    if (inputLesson === "Electricity") {
      currentLesson = scienceQuestions;
      firstQuestion = scienceQuestions[0];
      makeQuestion(firstQuestion);
    } else if (inputLesson === "Place Value Multiplication") {
      currentLesson = mathQuestions;
      firstQuestion = mathQuestions[0];
      makeQuestion(firstQuestion);
    } else {
      currentLesson = mistakes;
      firstQuestion = mistakes[0];
      makeQuestion(firstQuestion);
    }
  }

  //Test Mode
  function makeTest(inputLesson) {
    makeStudy(inputLesson);
  }

  function nextQuestion() {
    if (unAnswered()) {
      mistakes.push(currentLesson[questionCounter]);
      console.log("pushed incorrect");
    }

    //$("incorrect").removeClass("incorrect");
    $(".answerBtn")
      .each(function (i, ele) {
        $(ele).attr("data-clicked", "");
      });
    // feedbackDiv.html('');
    questionCounter++;

    if (questionCounter >= currentLesson.length) {
      studyScore();
    } else {
      makeQuestion(currentLesson[questionCounter]);

      if (!$("#questionBottom:visible").length && currentMode < 1) {
        $("#questionBottom").show();
      }
    }
  }

  function lastQuestion() {
    $(".correct").removeClass("correct");
    $(".incorrect").removeClass("incorrect");
    makeQuestion(currentLesson[questionCounter - 1]);
  }

  /* Review Mistakes */

  var reviewMistakes = function () {
    //empty the review lesson questions before populating
    reviewLesson = [];
    //Push mistakes into a new lesson for review mistakes.
    mistakes.forEach(function (ques) {
      reviewLesson.push(ques);
    });
    //reset counter, for iteration via nextQuestion()
    questionCounter = 0;
    currentMode = 0;
    //reset mistakes container
    mistakes = [];
    currentLesson = reviewLesson;
    console.log(currentLesson.length);
    makeQuestion(currentLesson[0]);

    if (!$("#questionBottom:visible").length) {
      $("#questionBottom").show();
    }
  };

  //Calculates score after lesson, appends the score screen.
  function studyScore() {
    $("#questionBottom").remove();
    var scoreDiv = $("<div>").attr({id: "score-Div"});
    var scores = "<h3 class='menu-heading'>Scores</h3>";
    var mistakesTitle = "<h3>" + currentLesson[0].lesson + "</h3>";
    var finalScore = "<h3>Score: " + (gotRight.length / 5) * 100 + "%</h3>";
    var reviewH3 = $("<h3 id='rev-mistakes'>")
      .text("Review Mistakes")
      .css("text-align", "right")
      .click(reviewMistakes)
      .addClass("selectable");
    sbLft.removeClass("lastQ");
    sbRt.removeClass("nextQ");
    scoreDiv.append(scores, mistakesTitle, finalScore, reviewH3);
    toggleFrame(scoreDiv);
  }

  // --------------------------// ---- Helper Functions ----//
  // --------------------------//
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
