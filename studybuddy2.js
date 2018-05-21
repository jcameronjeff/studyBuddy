

$.noConflict();
jQuery(document).ready(function($) {
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
  var toggleFrame = (show) => {
    frameDiv.children().hide();
    frameDiv.append(show);
    show.show();
  }

  var changeHeading = (newText) => {
    frameDiv.prepend(menuHeading.text(newText));
  }

  var selectLast = () => {
    $(".selected").prev().addClass("selected");
    $(".selected").next().removeClass("selected");
  };

  var selectNext =  () => {
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
    // frameDiv.empty();
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
var screenHistory = [];



//Clear it all out for next lesson. 
var clearGlobals =  () => {
  currentLesson = [];
  questionCounter = 0;
  currentMode = 0;
  questionCount = 0;
  gotRight = [];
  mistakes = [];
  reviewLesson = [];
};

//Had some issues with repeated click listeners. Kept this in here in case they pop up again.
var unbindThis = () => {
  $(this).off();
}

 



var renderMainMenu = () => {


  clearGlobals();
  clearTimeout(animationTimeout);
  mainMenu.append(viewScores);
  toggleFrame(mainMenu);
  screenHistory.push(mainMenu);
  changeHeading("Choose a Subject");

}

$('.sbSubject').click(() => {
let selectedMenu = $(this).attr("data");
handleSelectedMenu(selectedMenu)
});



var handleSelectedMenu = (selectedMenu) => {
  console.log(selectedMenu);
      changeHeading("Choose a Lesson");
      switch (selectedMenu) {
        case "Math":
          subjectMenu.text("Place Value Multiplication");
          toggleFrame(subjectMenu);
          frameDiv.append(mathSubjectMenu)
          changeHeading("Choose a Lesson");
          selectHistory.push(function(){renderSubjectMenu("math")});
          break;
        case "Science":
          subjectMenu.text("Electricity")
          toggleFrame(subjectMenu);
          frameDiv.append(sciSubjectMenu);
          changeHeading("Choose a Lesson");
          selectHistory.push(function(){renderSubjectMenu("science")});
          break;
        case "Scores":
          toggleFrame($("<img src='img/scores.png' id='scores-table' />"));
          changeHeading("Scores");
          selectHistory.push(function(){renderSubjectMenu("scores")});
      }
}


});

