



const questionBank = [
  { id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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


var lesson = questionBank.filter(function(question){
  if(question.lesson === )
})

function Question(id, lesson, context, stem, answers){


animation: function(){
  return this.lesson + ".mp4"
}

}
