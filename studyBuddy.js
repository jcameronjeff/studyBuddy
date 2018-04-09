$.noConflict();
jQuery(document).ready(function($) {

//Dom Elements

var frameDiv = $("#frame");
var questionDiv = $("#question");
var questionHTML = $("<div>").attr({'id':'questionText'});
var feedbackDiv = $("<div id='feedbackDiv'>");
var animationDiv = $("#animation");

var sbUp = $("#sbUp");
var sbLft =  $("#sbLft");
var sbRt =  $("#sbRt");
var sbDwn =  $("#sbDwn");

var sbSelectBtn = $("#sbSelectBtn");
var sbMenuBtn = $("#sbMenuBtn");

var menuHeading = $("<h3>").addClass("menu-heading");

var selectable = $(".selectable");

var selected = $(".selected")
  //--------------------------//
 //-- DOM helper functions --//
//--------------------------//
function toggleFrame(show){
  frameDiv.empty();
  frameDiv.append(show);
}

function changeHeading(newText){
  frameDiv.prepend(menuHeading.text(newText));
}

// function prevRemoveSelectable(){
//   $(selected).prevAll(':has(.selected):first').removeClass("selected");
// }
//
var nextAddSelected = function(){

$(".selectable").next().next().addClass("selected");
// prevRemoveSelectable();
}

sbSelectBtn.click(function(){
  $(".selected").click()
});

//----click handlers ----//
sbMenuBtn.click(function(){
  frameDiv.empty();
  renderMenu();
});



// ---- Globals -----//

var currentLesson;
var questionCounter = 0;
var score = 0;
var gotRight = [];
var mistakes = [];

//----------------------------//
//------- Menu Routing-------//
//--------------------------//

function renderMenu(){
  // sbLft.removeClass('nextQ');
  // sbRt.removeClass('lastQ');
  //Append Main Menu
  // var mainMenu = $("<div id='sbMenu'>"+
  //           "<input type='radio' id='choice_1' name ='choice'><img class='sbSubject selected' data = 'Math' id='Ma' src='math.png'></a>"+
  //           "<a><img class='sbSubject selectable' data = 'Science' id='subjectScience' src='science.png'></a>"+
  //           "</div>");


var mainMenu = $("<label class='rad'><input type='radio' name ='menRad' id='menRad-0' value='large'/><img data = 'Math' id='Ma' src='math.png'></label>"+"<label class='rad'><input type='radio' name ='menRad' id='menRad-1' value='large'/><img data = 'Science' id='subjectScience' src='science.png'></label>");
  toggleFrame(mainMenu);



  changeHeading("Choose a Subject");

    $('#sbRt').click(function(){
      console.log(object);

( "this button is disabled" );
      var eq =$('input[name=menRad]:checked').eq();
      console.log(eq);
        $(':checked').nextAll('.rad').first().focus();

      var $boxes = $('input[name=menRad]:checked');
      var checkedId = $boxes.attr('id');
      $(checkedId).attr("checked", "false");
      console.log(checkedId);
      var idNum = checkedId.slice(-1);
      var idText = "menRad-";
      var z = parseInt(idNum) + 1;

      $("#" + idText + z).attr("checked", "true").button("refresh");;

      });

      $(sbLft).click(function(){
        console.log('left clicked');
        var $boxes = $('input[name=menRad]:checked');
        var checkedId = $boxes.attr('id');
        $(checkedId).attr("checked", "false");
        console.log(checkedId);
        var idNum = checkedId.slice(-1);
        var idText = "menRad-";
        var z = parseInt(idNum) - 1;

        $("#" + idText + "" + z).attr("checked", "true");

        });

  //User Selects Subject, Append Subject Menu
  var subjectMenu = $("<h4 class='lessonTitle'></a>");

  // $('.sbSubject').click(function(){
  //   var selectedMenu = $(this).attr("data");
  //   console.log(selectedMenu);

  //   changeHeading("Choose a Lesson");
  //
  //   // switch(selectedMenu) {
  //   //   case "Math":
  //   //   toggleFrame(subjectMenu.text("Algebra"));
  //   //   changeHeading("Choose a Lesson");
  //   //       break;
  //   //   case "Science":
  //   //   toggleFrame(subjectMenu.text("Electricity"));
  //   //   changeHeading("Choose a Lesson");
  //   //       break;
  //   //   case "C":
  //   //   console.log("Make Test");
  //   //   }
  // });
//   User Selects Lesson, Append Lesson Menu
//
subjectMenu.click(function(){
  currentLessonTitle = titleText;
  console.log("Lesson Title Click");
  var titleText = $(this).text();
  renderLessonMenu(titleText);
});


function renderLessonMenu(titleText){

  var lessonMenu = $("<h4>"+ titleText +"</h4><br><h5 class='lessonMenuitem aclick' data='A'>A)Play Lesson</h5><h5 class='lessonMenuitem bclick' data='B'>B) Study</h5><h5 class='lessonMenuitem cclick' data='C'>C) Test</h5>");
  toggleFrame(lessonMenu);

  var lessonTitle = titleText.toLowerCase();
  var selectedAnimation = lessonTitle+".mp4";

  $(".lessonMenuitem").click(function(){
    var lessonMi = $(this).attr('data');

    switch(lessonMi) {
      case "A":
          playAnimation(selectedAnimation);
          break;
      case "B":
          // $(".answerBtn").off();
          console.log("make Study");
          makeStudy(titleText);
          break;
      case "C":
      console.log("Make Test");
      }
  });
  $(".answerBtn").addClass('lessonBtn');

  $(".lessonBtn").click(function(){
    var choiceId = $(this).attr("value");
    console.log(choiceId);
    $( "."+choiceId+"click").trigger( "click");

    });
  };
  };

renderMenu();

//Play Animation

function playAnimation(vid){

  frameDiv.empty();
  var animation = $("<video id='animation' controls autoplay width='400'><source src=" + vid + " type='video/mp4'></video>");
  frameDiv.append(animation);
  animationDiv.bind("ended", function() {
   console.log('ended');
   toggleFrame(lessonMenu);

  });
};

// playAnimation("electric.mp4");


//question as object; probably will turn this into constructor//
var scienceQuestions = [
    {lesson: "Electricity",
    context: "Question 1 After the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
    stem: "Which of the following best defines the Articles of Confederation?",
  answers: [
    {
    text: "The first constitution of the United States.",
    correct: true,
    feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
    },
    {
    text: "The treaty that ended the American Revolution.",
    correct: false,
    feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
    },
    {
    text: "The agreement between the U.S. And France to pay off war debts.",
    correct: false,
    feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
    },
    {
    text: "The first American Bill of Rights.",
    correct: false,
    feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
    }]
    },

    {lesson: "Electricity",
      context: "Question 2 After the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
      stem: "Which of the following best defines the Articles of Confederation?",
    answers: [
      {
      text: "The first constitution of the United States.",
      correct: true,
      feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
      },
      {
      text: "The treaty that ended the American Revolution.",
      correct: false,
      feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
      },
      {
      text: "The agreement between the U.S. And France to pay off war debts.",
      correct: false,
      feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
      },
      {letter: "d",
      text: "The first American Bill of Rights.",
      correct: false,
      feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
      }]
      },

      {lesson: "Electricity",
        context: " Question 3 After the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
        stem: "Which of the following best defines the Articles of Confederation?",
      answers: [
        {
        text: "The first constitution of the United States.",
        correct: true,
        feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
        },
        {
        text: "The treaty that ended the American Revolution.",
        correct: false,
        feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
        },
        {
        text: "The agreement between the U.S. And France to pay off war debts.",
        correct: false,
        feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
        },
        {letter: "d",
        text: "The first American Bill of Rights.",
        correct: false,
        feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
        }]
        },


        {lesson: "Electricity",
          context: " Question 4 Question After the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
          stem: "Which of the following best defines the Articles of Confederation?",
        answers: [
          {
          text: "The first constitution of the United States.",
          correct: true,
          feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
          },
          {
          text: "The treaty that ended the American Revolution.",
          correct: false,
          feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
          },
          {
          text: "The agreement between the U.S. And France to pay off war debts.",
          correct: false,
          feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
          },
          {letter: "d",
          text: "The first American Bill of Rights.",
          correct: false,
          feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
          }]
          },
          {lesson: "Electricity",
            context: "AQuestion 5 fter the Revolutionary War, the American states were independent from Great Britain. They needed to create a system of government to run this new nation.",
            stem: "Which of the following best defines the Articles of Confederation?",
          answers: [
            {
            text: "The first constitution of the United States.",
            correct: true,
            feedback: "<p>The first constitution of the United States. </p><p>Under the Articles of Confederation, the states formed together to create a central government.</p> <p>The federal government established by the Articles conducted the affairs of the country during the last two years of the Revolutionary War.</p>"
            },
            {
            text: "The treaty that ended the American Revolution.",
            correct: false,
            feedback: "<p>A treaty is an agreement between two foreign nations.</p><p> The treaty that ended the Revolution was the Treaty of Paris.</p> The Articles of Confederation were written before the end of the Revolution.</p><p> It was an agreement between the states.</p>"
            },
            {
            text: "The agreement between the U.S. And France to pay off war debts.",
            correct: false,
            feedback: "<p>An agreement between two foreign nations is called a treaty.</p><p> The Articles of Confederation was an agreement between the states. </p><p> Among other things, the Articles gave power to the central government to make treaties.</p>"
            },
            {letter: "d",
            text: "The first American Bill of Rights.",
            correct: false,
            feedback: "<p>The Bill of Rights is part of the United States Constitution, which replaced the Articles of Confederation in 1791.</p><p>  The Articles of Confederation came before the US Constitution. </p>"
            }]
            },


  ];




// Builds the Html for each question. Will convert this into constructor.

function makeQuestion(inputQuestion){
  questionHTML.html("");
  // var questionHTML = $("<div>").attr({"id": "questionText"});
  var stem = $("<a>" + inputQuestion.context + "</a>").addClass('questionStem').append("<p>").append("<p>" + inputQuestion.stem);
  var answerBank = [];
  var answers = inputQuestion.answers;

  //if answer object is correct, gives it C class, else I (incorrect) class.
  answers.forEach(function(answer) {
          if (answer.correct){
              console.log(answer.text);
            var html = $("<a>"+ answer.text
              +"</a>").attr({value: "C", feedback: answer.feedback}).append("<br>");
            answerBank.push(html);
          }
          else{
            console.log(answer.text);
          var html = $("<a>"+ answer.text
              +"</a>").addClass("answers").attr({value: "I", feedback: answer.feedback}).append("<br>");
            answerBank.push(html);

          };
      });

    //randomize answers
    shuffle(answerBank);


    //assigns letter value to radomized answers
    $(answerBank[0]).attr({"id": "answa"}).prepend("A) ");
    $(answerBank[1]).attr({"id": "answb"}).prepend("B) ");;
    $(answerBank[2]).attr({"id": "answc"}).prepend("C) ");;
    $(answerBank[3]).attr({"id": "answd"}).prepend("D) ");;

    answerBank.forEach(function(answer) {

    $(stem).append(answer);
    });

    questionHTML.append(stem);
    toggleFrame(questionHTML);
    frameDiv.append(feedbackDiv);


    $(".answerBtn").click(function(){
      var choiceId = $(this).attr("value");
      console.log(choiceId);
      var btnId = $(this).attr('id');
      console.log(btnId);
      checker(choiceId, btnId);
    });

};

 //Answer click handlers
 //If a button is clicked, pulls the letter value
 //Calls checker function, which pulls corresponsing answer feedback data from the DOM

function checker(choiceId, btnId){
  var answerChoice = $("#answ" + choiceId + "");
  console.log(answerChoice);
  var correct = answerChoice.attr("value");
  var feedbackText = answerChoice.attr("feedback");

  console.log(feedbackText);
  toggleFeedback(correct, feedbackText); //add a correct boolean to this function


  if (correct === "C"){
    $("#" + btnId).addClass("correct");
    console.log("pushed correct");
  }
  else if(correct === "I"){
    $("#" + btnId).addClass("incorrect");
  };
   if(correct === "C" && unAnswered()){
    gotRight.push(currentLesson[questionCounter + 1]);
      score += 1;
      console.log(unAnswered() + "," + questionCounter);
      console.log("correctAnswer: " + gotRight[0]);
  }else if (correct === "I" && unAnswered()){
    $("#" + btnId).addClass("incorrect");
    mistakes.push(currentLesson[questionCounter + 1]);
    console.log("pushed mistake" + unAnswered() + "," + questionCounter);
    console.log("wrong answer: " + mistakes[0].context);
  }
};

var unAnswered = function (){
  var answered = mistakes.length + gotRight.length;
  var questionCount = questionCounter + 1;
    if (answered < questionCount){
      console.log("questions answered: " + answered + "question count: " + questionCount);
      return true;
    }
    else if (answered >= questionCount) {

      console.log("questions answered:  " + answered + "question count: " + questionCount);
      return 0;
    }
}

//Toggle handler for diplaying/hiding feedback
function toggleFeedback(correct, feedbackText){
frameDiv.append(feedbackDiv);
questionHTML.hide();
  // quues.append("<div>").attr({"id": "feedback"});
feedbackDiv.html("<div>" + feedbackText + "<button id='closeBtn'>Close</button><div>").addClass('feedback');

$("#feedbackDiv").click(function(){
  $("#questionText").show();
  feedbackDiv.html("<p>");

});
}



function makeStudy(inputLesson){
  sbLft.addClass('lastQ');
  sbRt.addClass('nextQ');

  $(".nextQ").click(function(){
    nextQuestion();
  })
  $(".lastQ").click(function(){
    nextQuestion();
  })

  $(".lessonBtn").removeClass("lessonBtn");
  if (inputLesson === "Electricity"){
    currentLesson = scienceQuestions;
    var firstQuestion = scienceQuestions[0];
    makeQuestion(firstQuestion);
  }

};


function nextQuestion(){
  console.log(unAnswered());
  if (unAnswered() === 0){
      questionCounter += 1;
  }
  console.log(questionCounter);
  if(questionCounter >= currentLesson.length){
    studyScore();
  } else{
      makeQuestion(currentLesson[questionCounter])
  }
}

function lastQuestion(){
  $(".correct").removeClass("correct");
  $(".incorrect").removeClass("incorrect");
    makeQuestion(currentLesson[questionCounter - 1])
}

var reviewMistakes = function(){
  console.log("review");
  currentLesson = (mistakes);
  makeQuestion(mistakes[0]);
}

function studyScore(){
    var scoreDiv = $("<div>").attr({"id":"score-Div"});
    var mistakesTitle = "<h3>"+ currentLesson[0].lesson +"</h3>"
    var finalScore = "<h3>Score: " + (gotRight.length/currentLesson.length) * 100+"%</h3>";
    var reviewH3 = $("<h3>").text("Review Mistakes").css( "text-align", "right" ).click(reviewMistakes);

    scoreDiv
    .append(mistakesTitle, finalScore, reviewH3);

    toggleFrame(scoreDiv);

};




   //--------------------------//
  //---- Helper Functions ----//
 //--------------------------//
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
