


var question = $("<form class = 'form-horizonal'>").text(questionStem).attr({class: "question"}).attr({id: i});




<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<input type="radio" id="choise_1" name="choice" checked="checked" />
<label for="choise_1">One</label>

<input type="radio" id="choise_2" name="choice" />
<label for="choise_2">Two</label>

<input type="radio" id="choise_3" name="choice" />
<label for="choise_3">Three</label>

<div class="button next">SELECT NEXT</div>

$('.next').click(function() {
  $("input[name=choice]:checked").nextAll(':radio:first').prop('checked', true);
});


var mainMenu = $("<input type='radio' name ='ans' value='large'/><img class='sbSubject selected' data = 'Math' id='Ma' src='math.png'>")
<label>
    <input type="radio" name="fb" value="small" />
    <img src="http://placehold.it/20x20/35d/fff&text=f">
  </label>
